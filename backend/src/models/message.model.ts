import mongoose, { Document, Schema } from "mongoose";

export interface MessageDocument extends Document {
  chatId: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  content?: string;
  image?: string;
  replyTo?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<MessageDocument>(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    content: { type: String },
    image: { type: String },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

messageSchema.index({ chatId: 1, createdAt: 1 });
messageSchema.index({ sender: 1, createdAt: -1 });

const MessageModel = mongoose.model<MessageDocument>("Message", messageSchema);

export default MessageModel;
