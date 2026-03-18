import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { sendMessageSchema } from "../validators/message.validator";
import { HTTPSTATUS } from "../config/http.config";
import { sendMessageService } from "../services/message.service";

export const sendMessageController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const body = sendMessageSchema.parse(req.body);

    const result = await sendMessageService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Message sent successfully",
      ...result,
    });
  }
);
