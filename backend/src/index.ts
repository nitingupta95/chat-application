import "dotenv/config";
import path from "path";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import passport from "passport";
import { Env } from "./config/env.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import connectDatabase from "./config/database.config";
import { initializeSocket } from "./lib/socket";
import routes from "./routes";

import "./config/passport.config";

const app = express();
const server = http.createServer(app);

//socket
initializeSocket(server);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.use(passport.initialize());

app.get(
  "/health",
  asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({
      message: "Server is healthy",
      status: "OK",
    });
  })
);

app.use("/api", routes);

if (Env.NODE_ENV === "production") {
  const clientPath = path.resolve(__dirname, "../../client/dist");

  //Serve static files
  app.use(express.static(clientPath));

  app.get(/^(?!\/api).*/, (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

app.use(errorHandler);

server.listen(Env.PORT, async () => {
  await connectDatabase();
  console.log(`Server running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
