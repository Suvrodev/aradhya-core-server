import config from "../../../config";
import AppError from "../../../errors/AppError";
import { generateUserId } from "../generateUserId";
import { TUser } from "../user.interface";
import { userModel } from "../user.model";
import Jwt from "jsonwebtoken";
import { updateUser } from "./Function/updateUser";
import { buildJwtPayload, generateToken } from "./Function/generateToken";

// helper: build jwt payload exactly like your google flow

///Create User into db
const newRegisterUserIntoDB = async (payload: TUser) => {
  console.log("------------------------------------------");
  console.log("User Payload for new registration: ", payload);

  let email = payload?.email?.toLowerCase()?.trim();
  if (!email) throw new AppError(400, "Email is required");

  let user = await userModel.findOne({ email });
  console.log("Find User: ", user);

  // ----- CASE 1: User already exists -> update password from payload and login -----
  if (user) {
    console.log("Case-1");
    // if blocked, stop here (remove this if you want to allow)
    if (user.isBlocked) {
      throw new AppError(403, "User is blocked");
    }

    /**
     * Update start
     */
    const updateResult = await updateUser(email, payload);
    console.log("Update Result: ", updateResult);
    const againUser = await userModel.findOne({ email });
    console.log("Again User: ", againUser);

    /**
     * Update end
     */

    const jwtPayload = buildJwtPayload(againUser);
    const accessToken = generateToken(jwtPayload);

    return {
      message: "Password updated & logged in",
      accessToken,
      user: jwtPayload,
    };
  }

  // ----- CASE 2: User don't exists -> Register and Login -----
  console.log("CASE-2------------------------");
  email = payload?.email;
  const studentId = await generateUserId();
  console.log("Generated id : ", studentId);
  if (!studentId) {
    throw new AppError(400, "Bad request for user id");
  }
  payload.studentId = studentId;
  const createResult = await userModel.create(payload);
  console.log("Creating Result: ", createResult);

  const jwtPayloadd = buildJwtPayload(createResult);
  const accessTokenn = generateToken(jwtPayloadd);

  return {
    message: "User Created",
    accessToken: accessTokenn,
    user: jwtPayloadd,
  };
};

export const userNewServices = {
  newRegisterUserIntoDB,
};
