import { db } from "@/database/databaseConnection"
import { CreateTask, Id, Task } from "@/protocols/typeTask"

async function createTask(name :string, description :string, day :string, responsible :string, status :string) {
    return db.query<CreateTask>(`
    INSERT INTO tarefas (name, description, day, responsible, status)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [name, description, day, responsible, status])
}

async function getTasks() {
    const tasks = await db.query<Task>(`
      SELECT id, name, description, TO_CHAR(day, 'DD-MM-YYYY') AS day, responsible, status
      FROM tarefas;
    `);
    return tasks.rows;
  }
  

async function getTaskById(id :number) {
    const tasks = await db.query<Task>(`
        SELECT * FROM tarefas WHERE id=$1;
    `, [id])
    return tasks.rows[0]
}

async function updateTask(id: number | undefined, name :string, description :string, day :string, responsible :string, status :string) {
    return db.query<Task>(`
    UPDATE tarefas
      SET name = $2, description = $3, day = $4, responsible = $5, status = $6
      WHERE id = $1
      RETURNING *;
    `, [id, name, description, day, responsible, status])
}


async function deleteTask(id :number) {
    return db.query<Id>(`
        DELETE FROM tarefas WHERE id=$1;
    `, [id])
}

export const taskRepository = { createTask, getTasks, getTaskById, updateTask, deleteTask }