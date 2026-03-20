import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { Request } from "express";
import { UnauthorizedException } from "../utils/app-error";
import { Env } from "./env.config";
import { findByIdUserService } from "../services/user.service";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const token = req.cookies.accessToken;
          if (!token) throw new UnauthorizedException("Unauthorized access");
          return token;
        },
      ]),
      secretOrKey: Env.JWT_SECRET,
      audience: ["user"],
      algorithms: ["HS256"],
    },
    async ({ userId }: { userId: string }, done: VerifiedCallback) => {
      try {
        const user = userId && (await findByIdUserService(userId));
        return done(null, user || false);
      } catch (error) {
        return done(null, false);
      }
    }
  )
);

export const passportAuthenticateJwt = passport.authenticate("jwt", {
  session: false,
});
