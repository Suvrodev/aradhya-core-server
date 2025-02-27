import { TService } from "./service.inrerface";
import { ServiceModel } from "./service.model";

///Create Service into db
const addServiceIntoDB = async (payload: TService) => {
  //   console.log("Payload: ", payload);
  const result = await ServiceModel.create(payload);
  return result;
};

//Get All Service from DB
const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};

//Get All Service from DB
const getSpecificServiceFromDB = async (serviceId: string) => {
  const result = await ServiceModel.findOne({ _id: serviceId });
  return result;
};

//Delete Service from DB
const deleteServiceFromDB = async (serviceId: string) => {
  const result = await ServiceModel.findByIdAndDelete({ _id: serviceId });
  return result;
};

//Update Service
const updatServiceIntoDBFromDB = async (
  serviceId: string,
  payload: TService
) => {
  //   console.log("User Id in service: ", userId);
  //   console.log("payload in service", payload);

  const result = await ServiceModel.findByIdAndUpdate(
    { _id: serviceId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const serviceServices = {
  addServiceIntoDB,
  getAllServiceFromDB,
  getSpecificServiceFromDB,
  deleteServiceFromDB,
  updatServiceIntoDBFromDB,
};
