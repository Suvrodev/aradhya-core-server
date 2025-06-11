import AppError from "../../errors/AppError";
import { TOurPeople } from "./OurPeople.interface";
import { OurPeopleModel } from "./OurPeople.model";

//Insert Our People
const createOurPeopleIntoDB = async (ourPeopleData: TOurPeople) => {
  console.log("Our People: ", ourPeopleData);
  const result = await OurPeopleModel.create(ourPeopleData);
  return result;
};

// Get all Our People
const getAllOurPeopleFromDB = async () => {
  const result = await OurPeopleModel.find().sort({ order: 1 }); // 1 for ascending
  return result;
};

// Get top 4 "Our People" who have a message, sorted by order
const getAllOurPeopleWithMessageFromDB = async () => {
  const result = await OurPeopleModel.find({
    message: { $exists: true, $ne: "" },
  })
    .sort({ order: 1 }) // sort by order ascending
    .limit(4); // limit to first 4
  return result;
};

// Get specific Our People
const getSpecificOurPeopleFromDB = async (id: string) => {
  const result = await OurPeopleModel.findOne({ instructorId: id });
  return result;
};

//delete Our People
const deleteOurPeopleFromDB = async (id: string) => {
  //main work
  console.log("People id******", id);
  const result = await OurPeopleModel.deleteOne({ _id: id });
  return result;
};

//update Our People
const updateOurPeopleFromDB = async (id: string, payload: TOurPeople) => {
  console.log("People id::::::", id);
  console.log("UpdateOur People body: ", payload);
  const result = await OurPeopleModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const OurPeopleService = {
  createOurPeopleIntoDB,
  getAllOurPeopleFromDB,
  getAllOurPeopleWithMessageFromDB,
  getSpecificOurPeopleFromDB,
  deleteOurPeopleFromDB,
  updateOurPeopleFromDB,
};
