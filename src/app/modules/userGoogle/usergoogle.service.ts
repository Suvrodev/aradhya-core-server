import Jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { userModel } from "../user/user.model";
import config from "../../config";
import { generateUserId } from "../user/generateUserId";

///Create User into db by Google Login
const registerUserIntoDBByGoogle = async (payload: TUser) => {
  console.log("------------------------------------");
  console.log("Payload: ", payload);
  const email = payload?.email;
  let user = await userModel.findOne({ email });

  console.log("------------------------------------");
  console.log("User: ", user);

  if (!user) {
    const studentId = await generateUserId();
    if (!studentId) {
      throw new AppError(400, "Bad request for user id");
    }

    payload.studentId = studentId;
    payload.role = "student";
    user = await userModel.create(payload);
  }

  // ✅ Ensure user is not null
  if (!user) {
    throw new AppError(500, "User could not be created or found");
  }

  const jwtPayload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isBlocked: user.isBlocked,
    studentId: user.studentId,
    phone: user.phone,
    image: user.image,
  };

  const accessToken = Jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: "30d",
  });

  return {
    accessToken,
  };
};

export const userGoogleServices = {
  registerUserIntoDBByGoogle,
};
