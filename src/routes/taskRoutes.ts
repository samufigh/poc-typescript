import { taskController } from "@/controllers/taskController";
import { validateSchema } from "@/middlewares/validateSchema";
import { deleteTaskSchema, taskSchema } from "@/schemas/taskSchema";
import { Router } from "express";

const taskRouter = Router()

taskRouter.post("/tasks", validateSchema(taskSchema), taskController.createTask)
taskRouter.get("/tasks", taskController.getTasks)
taskRouter.put("/tasks", validateSchema(taskSchema), taskController.updateTask)
taskRouter.delete("/tasks", validateSchema(deleteTaskSchema), taskController.deleteTask)

export default taskRouter