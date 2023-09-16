export type Task = {
    id?: number,
    name: string,
    description: string,
    day: string,
    responsible: string,
    status: string
}

export type CreateTask = Omit<Task, "id">

export type CustomError = {
    type: string; 
    message: string;
    status: number
  }

  export type Id = {
    id: number
  }