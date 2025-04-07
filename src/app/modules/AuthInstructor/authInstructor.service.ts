import config from "../../config";
import AppError from "../../errors/AppError";
import { instructorModel } from "../UInstructor/instructor.model";
import { TLoginUser } from "./authInstructor.interface";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const loginInstructor = async (payload: TLoginUser) => {
  //   console.log("Payloadddd: ", payload);

  //Checking  if the Instructor is exist
  const isInstructorExists = await instructorModel.findOne({
    email: payload.email,
  });
  if (!isInstructorExists) {
    throw new AppError(404, "Instructor not Found");
  }

  //Check Instructor blocked or not
  const instructorIsBlocked = isInstructorExists?.isBlocked;
  if (instructorIsBlocked) {
    throw new AppError(403, "Instructor is Blocked");
  }

  //Check Instructor status enable or disable
  const instructorStatus = isInstructorExists?.status;
  if (instructorStatus == "disable") {
    throw new AppError(403, "Instructor is disable");
  }

  //Check Password is right or wrong
  // const isPasswordMatched = await bcrypt.compare(
  //   payload?.password,
  //   isUserExists?.password
  // );
  // if (!isPasswordMatched) {
  //   throw new AppError(401, "Password is Incorrect");
  // }

  ///Check Password without bycript (For Don't set forget Password)
  if (payload?.password !== isInstructorExists?.password) {
    throw new AppError(401, "Password is Incorrect");
  }

  // console.log("is User exists----: ", isUserExists);
  //Create Token and send to the client
  const jwtPayload = {
    _id: isInstructorExists._id,
    name: isInstructorExists?.name,
    email: isInstructorExists?.email,
    role: isInstructorExists?.role,
    isBlocked: isInstructorExists?.isBlocked,
    studentId: isInstructorExists?.instructorId,
    phone: isInstructorExists?.phone,
    image: isInstructorExists?.image,
  };
  const accessToken = Jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: "30d",
  });
  //   console.log("JwtPayload: ", jwtPayload);
  //Access Granted: Send AccessToken, Refresh Token
  return {
    accessToken,
  };
};

export const AuthInstructorServices = {
  loginInstructor,
};
