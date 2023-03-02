import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("irfoloji" + req);
  if (!token) return next(createError(401,"token hatası"))


  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};
