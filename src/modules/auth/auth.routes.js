import { Router } from "express";
import { register, login } from "../controllers/authController";
import { catchError } from "../../middleware/catchError.js";
const router = Router();

router.post("/register", catchError(register));
router.post("/login", catchError(login));

export default router;
