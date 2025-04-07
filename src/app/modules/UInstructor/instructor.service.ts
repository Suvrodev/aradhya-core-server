import bcrypt from "bcrypt";
import AppError from "../../errors/AppError";
import config from "../../config";
import { instructorModel } from "./instructor.model";
import { TInstructor } from "./instractor.interface";
import { generateInstructorId } from "./generateInstructorId";

interface IPassword {
  oldPassword: string;
  newPassword: string;
}

///Create Instructor into db
const registerInstructorIntoDB = async (payload: TInstructor) => {
  console.log("------------------------------------------");
  console.log("User Payload: ", payload);
  const email = payload?.email;
  const res = await instructorModel.findOne({ email: email });
  console.log("Email Exists: ", res);
  if (res) {
    throw new AppError(409, "This Email Already Exists");
  }

  const instructorId = await generateInstructorId(); // Make sure to await the function
  console.log("Generated id: ", instructorId);
  if (!instructorId) {
    throw new AppError(400, "Bad request for user id");
  }

  payload.instructorId = instructorId; // Now this is assigning a string value to instructorId

  console.log("Payload: ", payload);
  const result = await instructorModel.create(payload);
  return result;
};

//Get All Instructor from DB
const getAllInstructorFromDB = async (search?: string) => {
  const filter: any = {};

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { studentId: { $regex: search, $options: "i" } },
    ];
  }

  const result = await instructorModel.find(filter);
  return result;
};

//Get single User from DB
const getSingleInstructorFromDB = async (id: string) => {
  const result = await instructorModel.findOne({ instructorId: id });
  return result;
};

//delete Instructor from DB
const deleteInstructor = async (id: string) => {
  console.log("Delete id: ", id);
  try {
    const result = await instructorModel.deleteOne({ instructorId: id });
    return result;
  } catch (error) {
    throw new Error("Instructir Not Found");
  }
};

//Update Password
const updatePasswordIntoDB = async (userId: string, payload: IPassword) => {
  const { oldPassword, newPassword } = payload;
  console.log("------------------");
  console.log("User Id: ", userId);
  console.log("Old Password ", oldPassword);
  console.log("New  Password ", newPassword);

  //Checking  if the user is exist
  const isInstructorExists = await instructorModel.findOne({
    instructorId: userId,
  });
  if (!isInstructorExists) {
    throw new AppError(404, "Instructor not Found");
  }

  //Check Password is right or wrong
  // const isPasswordMatched = await bcrypt.compare(
  //   oldPassword,
  //   isUserExists?.password
  // );

  if (oldPassword !== isInstructorExists?.password) {
    throw new AppError(401, "Old password is not matched");
  }

  // const hashNewPassword = await bcrypt.hash(
  //   newPassword,
  //   Number(config.bcrypt_salt_rounds)
  // );
  const result = await instructorModel.updateOne(
    { studentId: userId },
    { password: newPassword },
    { new: true }
  );
  return result;
};
//Update User
const updatInstructorIntoDB = async (userId: string, payload: TInstructor) => {
  console.log("User Id in service: ", userId);
  console.log("payload in service", payload);

  const result = await instructorModel.updateOne(
    { instructorId: userId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const instructorServices = {
  registerInstructorIntoDB,
  getAllInstructorFromDB,
  getSingleInstructorFromDB,
  deleteInstructor,
  updatePasswordIntoDB,
  updatInstructorIntoDB,
};
