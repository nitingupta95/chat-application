import mongoose from "mongoose";
import cloudinary from "../config/cloudinary.config";
import ChatModel from "../models/chat.model";
import MessageModel from "../models/message.model";
import { BadRequestException, NotFoundException } from "../utils/app-error";
import {
  emitLastMessageToParticipants,
  emitNewMessageToChatRoom,
} from "../lib/socket";
import UserModel from "../models/user.model";

export const sendMessageService = async (
  userId: string,
  body: {
    chatId: string;
    content?: string;
    image?: string;
    replyToId?: string;
  }
) => {
  const { chatId, content, image, replyToId } = body;

  const chat = await ChatModel.findOne({
    _id: chatId,
    participants: {
      $in: [userId],
    },
  });
  if (!chat) throw new BadRequestException("Chat not found or unauthorized");

  if (replyToId) {
    const replyMessage = await MessageModel.findOne({
      _id: replyToId,
      chatId,
    });
    if (!replyMessage) throw new NotFoundException("Reply message not found");
  }

  let imageUrl;

  if (image) {
    //upload the image to cloudinary
    const uploadRes = await cloudinary.uploader.upload(image);
    imageUrl = uploadRes.secure_url;
  }

  const newMessage = await MessageModel.create({
    chatId,
    sender: userId,
    content,
    image: imageUrl,
    replyTo: replyToId || null,
  });

  await newMessage.populate([
    { path: "sender", select: "name avatar" },
    {
      path: "replyTo",
      select: "content image sender",
      populate: {
        path: "sender",
        select: "name avatar",
      },
    },
  ]);

  chat.lastMessage = newMessage._id as mongoose.Types.ObjectId;
  try {
    await chat.save();
  } catch (error) {
    // Keep chat and message state consistent if updating lastMessage fails.
    await MessageModel.findByIdAndDelete(newMessage._id).catch(() => null);
    throw error;
  }

  //websocket emit the new Message to the chat room
  emitNewMessageToChatRoom(userId, chatId, newMessage);

  //websocket emit the lastmessage to members (personnal room user)
  const allParticipantIds = chat.participants.map((id) => id.toString());
  emitLastMessageToParticipants(allParticipantIds, chatId, newMessage);

  return {
    userMessage: newMessage,
    chat,
  };
};
