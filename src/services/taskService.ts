import { idError, notFoundIdError, statusError } from "@/errors/typeErrors"
import { Task } from "@/protocols/typeTask"
import { taskRepository } from "@/repositories/taskRepository"
import { number } from "joi"

async function createTask(infoTask :Task) {
    const {name, description, day, responsible, status} = infoTask

    if (status !== "fazer" && status !== "fazendo" && status !== "feito") {
        throw statusError()
    }

    return taskRepository.createTask(name, description, day, responsible, status)
}

async function getTasks() :Promise<Task[]> {
    const tasks = await taskRepository.getTasks()
    console.log(tasks)
    return tasks
}

async function updateTask(infoTask :Task) {
    const {id, name, description, day, responsible, status} = infoTask

    if (!id){
        throw idError()
    }
    if (status !== "fazer" && status !== "fazendo" && status !== "feito") {
        throw statusError()
    }
    const task = await taskRepository.getTaskById(id)

    if (!task){
        throw notFoundIdError()
    }


    return taskRepository.updateTask(id, name, description, day, responsible, status)
}

async function deleteTask(id :number) {

    const task = await taskRepository.getTaskById(id)

    if (!task){
        throw notFoundIdError()
    }

    return taskRepository.deleteTask(id)
}

export const taskService = { createTask, getTasks, updateTask, deleteTask }