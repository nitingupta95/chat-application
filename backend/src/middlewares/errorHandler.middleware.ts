import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError, ErrorCodes } from "../utils/app-error";

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Error occurred: ${req.path}`, error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      errorCode: error.errorCode,
    });
  }

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    error: error?.message || "Something went wrong",
    errorCode: ErrorCodes.ERR_INTERNAL,
  });
};
