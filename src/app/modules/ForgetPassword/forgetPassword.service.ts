import AppError from "../../errors/AppError";
import { userModel } from "../user/user.model";
import { TForgetPassword } from "./forgetPassword.interface";
import { ForgetPasswordModel } from "./forgetPassword.model";
import { sendForgetPasswordEmail } from "./senfForgetPasswordEmail";

///add forget password
const addForgetPassword = async (payload: TForgetPassword) => {
  console.log("------------------------------------------");
  console.log("Payload: ", payload);
  const isUserExists = await userModel.findOne({ email: payload });
  if (!isUserExists) {
    throw new AppError(404, "User not Found");
  }

  const resetCode = Math.floor(100000 + Math.random() * 900000);

  const UpdatepasswordResetCode = await userModel.updateOne(
    { email: payload },
    { passwordResetCode: resetCode },
    {
      new: true,
    }
  );
  console.log("UpdatepasswordResetCode: ", UpdatepasswordResetCode);
  if (!UpdatepasswordResetCode) {
    return;
  }

  //Call this function for Email
  await sendForgetPasswordEmail(payload.toString(), resetCode.toString());
  return resetCode;
};

export const ForgetPasswordService = {
  addForgetPassword,
};
