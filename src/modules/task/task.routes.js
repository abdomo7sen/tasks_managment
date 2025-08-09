import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController";
import authMiddleware from "../middleware/authMiddleware";
import { catchError } from "../../middleware/catchError.js";
import { validate } from "../../middleware/validation.js";
import {
  taskDeleteSchemaVal,
  taskSchemaVal,
  taskUpdateSchemaVal,
} from "./task.validation.js";
const router = Router();
router.use(authMiddleware);
router.get("/", catchError(getTasks));
router.post("/", validate(taskSchemaVal), catchError(createTask));
router.put("/:id", validate(taskUpdateSchemaVal), catchError(updateTask));
router.delete("/:id", validate(taskDeleteSchemaVal), catchError(deleteTask));

export default router;
