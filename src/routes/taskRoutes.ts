import { taskController } from "@/controllers/taskController";
import { validateSchema } from "@/middlewares/validateSchema";
import { taskSchema } from "@/schemas/taskSchema";
import { Router } from "express";

const taskRouter = Router()

taskRouter.post("/tasks", validateSchema(taskSchema), taskController.createTask)
taskRouter.get("/tasks", taskController.getTasks)
taskRouter.put("/tasks/:id", validateSchema(taskSchema), taskController.updateTask)
taskRouter.delete("/tasks/:id", taskController.deleteTask)

export default taskRouter