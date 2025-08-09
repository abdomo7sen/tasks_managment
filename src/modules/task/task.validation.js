import joi from "joi";

const taskSchemaVal = joi
  .object({
    title: joi.string().min(2).max(100).required(),
    description: joi.string().min(5).max(500).required(),
    dueDate: joi.date().greater("now").required(),
    status: joi.string().valid("Pending", "In Progress", "Completed"),
  })
  .required();
const taskUpdateSchemaVal = joi
  .object({
    id: joi.string().hex().required(),
    status: joi.string().valid("Pending", "In Progress", "Completed"),
    title: joi.string().min(2).max(100),
    description: joi.string().min(5).max(500),
    dueDate: joi.date().greater("now"),
  })
  .required();
const taskDeleteSchemaVal = joi
  .object({
    id: joi.string().hex().required(),
  })
  .required();

export { taskSchemaVal, taskUpdateSchemaVal, taskDeleteSchemaVal };
