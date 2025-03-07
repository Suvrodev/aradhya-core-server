import { TPromocode } from "./promocode.interface";
import { promocodeModel } from "./promocode.model";

///Create Promocode into db
const addPromoCodeIntoDB = async (payload: TPromocode) => {
  //   console.log("Payload: ", payload);
  const result = await promocodeModel.create(payload);
  return result;
};

//Get All Promocode from DB
const getAllPromoCodeFromDB = async () => {
  const result = await promocodeModel.find().sort({ order: 1 });
  return result;
};

//Get Specific Promocode
const getSpecificPromoFromDB = async (serviceId: string) => {
  const result = await promocodeModel.findOne({ promoId: serviceId });
  return result;
};

//Delete Promocode from DB
const deletePromocodeFromDB = async (promoId: string) => {
  const result = await promocodeModel.deleteOne({ promoId: promoId });
  return result;
};

//Update Promocode
const UpdatePromoCodeIntoDBFromDB = async (
  promoId: string,
  payload: TPromocode
) => {
  console.log("promoId: ", promoId);
  console.log("payload", payload);

  const result = await promocodeModel.updateOne({ promoId: promoId }, payload, {
    new: true,
  });
  return result;
};

export const PromoCodeService = {
  addPromoCodeIntoDB,
  getAllPromoCodeFromDB,
  getSpecificPromoFromDB,
  deletePromocodeFromDB,
  UpdatePromoCodeIntoDBFromDB,
};
