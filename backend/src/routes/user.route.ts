import { Router } from "express";
import { passportAuthenticateJwt } from "../config/passport.config";
import { getUsersController } from "../controllers/user.controller";

const userRoutes = Router()
  .use(passportAuthenticateJwt)
  .get("/all", getUsersController);

export default userRoutes;
