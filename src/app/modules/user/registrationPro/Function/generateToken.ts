import Jwt from "jsonwebtoken";
import config from "../../../../config";
export const buildJwtPayload = (user: any) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  isBlocked: user.isBlocked,
  studentId: user.studentId,
  phone: user.phone,
  image: user.image,
});

export const generateToken = (jwtPayload: any) => {
  const res = Jwt.sign(jwtPayload, config.jwt_access_token as string, {
    expiresIn: "30d",
  });

  return res;
};
