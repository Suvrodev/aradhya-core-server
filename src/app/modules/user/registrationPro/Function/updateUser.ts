import { userModel } from "../../user.model";

export const updateUser = async (email: string, payload: any) => {
  const res = await userModel.updateOne(
    { email: email },
    {
      name: payload.name,
      password: payload.password,
      phone: payload.phone,
    },
    { new: true }
  );
  return res;
};
