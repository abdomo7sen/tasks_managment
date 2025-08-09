import { DataTypes } from "sequelize";
import User, { hasMany } from "./user";
import sequelize from "../database.js";

const Task = sequelize.define(
  "Task",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    status: {
      type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
      defaultValue: "Pending",
    },
    due_date: { type: DataTypes.DATE },
  },
  { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" }
);

Task.belongsTo(User, { foreignKey: "user_id" });
hasMany(Task, { foreignKey: "user_id" });

export default Task;
