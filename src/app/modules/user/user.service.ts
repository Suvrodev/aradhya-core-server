import bcrypt from "bcrypt";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import config from "../../config";
import { generateUserId } from "./generateUserId";

interface IPassword {
  oldPassword: string;
  newPassword: string;
}

///Create User into db
const registerUserIntoDB = async (payload: TUser) => {
  console.log("User Payload: ", payload);
  const email = payload?.email;
  const res = await userModel.findOne({ email: email });
  console.log(" Email Exists: ", res);
  if (res) {
    throw new AppError(409, "This Email Allready Exists");
  }

  const studentId = await generateUserId();
  console.log("Generated id : ", studentId);
  if (!studentId) {
    throw new AppError(400, "Bad request for user id");
  }
  payload.studentId = studentId;
  const result = await userModel.create(payload);
  return result;
};

//Get All User from DB
const getAllUser = async (search?: string) => {
  const filter: any = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { studentId: { $regex: search, $options: "i" } },
    ];
  }

  const result = await userModel.find(filter);
  return result;
};

//Get single User from DB
const getSingleUserFromDB = async (email: string) => {
  // console.log("Email in service: ", email);
  const result = await userModel.findOne({ email: email });
  return result;
};

//deletel User from DB
const deleteUser = async (email: string) => {
  console.log("Delete email: ", email);
  try {
    const result = await userModel.deleteOne({ email: email });
    return result;
  } catch (error) {
    throw new Error("USer Not Found");
  }
};

//Update Password
const updatePasswordIntoDB = async (email: string, payload: IPassword) => {
  const { oldPassword, newPassword } = payload;
  console.log("------------------");
  console.log("User email: ", email);
  console.log("Old Password ", oldPassword);
  console.log("New  Password ", newPassword);

  //Checking  if the user is exist
  const isUserExists = await userModel.findOne({ email: email });
  if (!isUserExists) {
    throw new AppError(404, "User not Found");
  }

  //Check Password is right or wrong
  // const isPasswordMatched = await bcrypt.compare(
  //   oldPassword,
  //   isUserExists?.password
  // );

  if (oldPassword !== isUserExists?.password) {
    throw new AppError(401, "Old password is not matched");
  }

  // const hashNewPassword = await bcrypt.hash(
  //   newPassword,
  //   Number(config.bcrypt_salt_rounds)
  // );
  const result = await userModel.updateOne(
    { email: email },
    { password: newPassword },
    { new: true }
  );
  return result;
};
//Update User
const updatUserIntoDB = async (email: string, payload: TUser) => {
  console.log("==============================================");
  console.log("User Mail in service: ", email);
  console.log("payload in service", payload);

  const result = await userModel.updateOne({ email: email }, payload, {
    new: true,
  });
  return result;
};

export const userServices = {
  registerUserIntoDB,
  getAllUser,
  updatePasswordIntoDB,
  deleteUser,
  updatUserIntoDB,
  getSingleUserFromDB,
};
