import { Request, Response } from "express";
import { CreateTask, Id, Task } from "@/protocols/typeTask";
import httpStatus from "http-status";
import { taskService } from "@/services/taskService";

async function createTask(req :Request, res :Response) {

    const infoTask = req.body as CreateTask
    await taskService.createTask(infoTask)
    res.sendStatus(httpStatus.CREATED)
}

async function getTasks(req :Request, res :Response) {

    const tasks = await taskService.getTasks()
    res.status(200).send(tasks)
}

async function updateTask(req :Request, res :Response) {

    const infoTask = req.body as Task
    await taskService.updateTask(infoTask)
    res.sendStatus(httpStatus.OK)
}

async function deleteTask(req :Request, res :Response) {
    const {id} = req.body as Id
    await taskService.deleteTask(id)
    res.sendStatus(httpStatus.OK)
}

export const taskController = { createTask, getTasks, updateTask, deleteTask }