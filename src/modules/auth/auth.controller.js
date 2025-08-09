import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { User } from "../models";
import { configDotenv } from "dotenv";
import { AppError } from "../../middleware/appError.js";
configDotenv({ path: "../.env" });
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "User registered!", user: newUser });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return next(new AppError("User not found!", 404));

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) return next(new AppError("Invalid credentials!", 401));

  const token = sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ message: "Login successful!", token });
};
