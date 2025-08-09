import { Task } from "../models";

export async function getTasks(req, res) {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  res.json(tasks);
}

export async function createTask(req, res) {
  const { title, description, status, due_date } = req.body;
  const newTask = await Task.create({
    title,
    description,
    status,
    due_date,
    user_id: req.user.id,
  });
  res.status(201).json(newTask);
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const updatedTask = await Task.update(req.body, {
    where: { id, user_id: req.user.id },
  });
  res.json(updatedTask);
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  await Task.destroy({ where: { id, user_id: req.user.id } });
  res.json({ message: "Task deleted!" });
}
