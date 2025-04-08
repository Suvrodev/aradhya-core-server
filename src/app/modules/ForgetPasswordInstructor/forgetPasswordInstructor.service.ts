import AppError from "../../errors/AppError";
import { instructorModel } from "../UInstructor/instructor.model";
import { userModel } from "../user/user.model";
import { TForgetPassword } from "./forgetPasswordInstructor.interface";
import { ForgetPasswordModel } from "./forgetPasswordInstructor.model";
import { sendForgetPasswordEmail } from "./senfForgetPasswordInstructorEmail";

///Send OTP
const SendOTP = async (payload: TForgetPassword) => {
  console.log("------------------------------------------");
  console.log("Payload: ", payload);
  const isUserExists = await instructorModel.findOne({ email: payload });
  if (!isUserExists) {
    throw new AppError(404, "This email is not exists");
  }

  const resetCode = Math.floor(100000 + Math.random() * 900000);

  const UpdatepasswordResetCode = await instructorModel.updateOne(
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

//Update Password of user
const updatPasswordAfterOTPIntoDB = async (
  email: string,
  otp: string,
  password: string
) => {
  console.log("================================");
  console.log("email: ", email);
  console.log("OTP:", otp);
  console.log("Password:", password);

  //Checking  if the user is exist
  const isUserExists = await instructorModel.findOne({ email: email });
  if (!isUserExists) {
    throw new AppError(404, "User not Found");
  }
  console.log("Exist user: ", isUserExists);

  if (otp != isUserExists?.passwordResetCode) {
    throw new AppError(400, "Invalid OTP");
  }

  const result = await instructorModel.updateOne(
    { email: email },
    { password: password },
    {
      new: true,
    }
  );
  return result;
};

export const ForgetPasswordInstructorService = {
  SendOTP,
  updatPasswordAfterOTPIntoDB,
};
