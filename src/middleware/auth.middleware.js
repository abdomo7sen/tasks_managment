import { verify } from "jsonwebtoken";
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const { token } = req.headers.authorization;
  if (!token)
    return res.status(401).json({ message: "Authentication required!" });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token!" });
  }
};

export default authMiddleware;
