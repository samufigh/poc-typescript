import { idError, notFoundIdError, statusError } from "@/errors/typeErrors"
import { Task } from "@/protocols/typeTask"
import { taskRepository } from "@/repositories/taskRepository"

async function createTask(infoTask :Task) {
    const {name, description, day, responsible, status} = infoTask

    if (status !== "fazer" && status !== "fazendo" && status !== "feito") throw statusError()


    return taskRepository.createTask(name, description, day, responsible, status)
}

async function getTasks() :Promise<Task[]> {
    const tasks = await taskRepository.getTasks()
    console.log(tasks)
    return tasks
}

async function updateTask(infoTask :Task, id: string) {

    const {name, description, day, responsible, status} = infoTask
    const _id : number = Number(id)
    if(isNaN(_id)) throw notFoundIdError()
    if (!id) throw idError()
    if (status !== "fazer" && status !== "fazendo" && status !== "feito") throw statusError()
    const task = await taskRepository.getTaskById(_id)
    if (!task) throw notFoundIdError()

    return taskRepository.updateTask(_id, name, description, day, responsible, status)
}

async function deleteTask(id :string) {

    const _id : number = Number(id)
    if(isNaN(_id)) throw notFoundIdError()
    const task = await taskRepository.getTaskById(_id)
    if (!task) throw notFoundIdError()

    return taskRepository.deleteTask(_id)
}

export const taskService = { createTask, getTasks, updateTask, deleteTask }