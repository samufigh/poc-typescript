import express, { Express } from "express"
import "express-async-errors"
import dotenv from "dotenv"
import taskRouter from "./routes/taskRoutes"
import errorHandlingMiddleware from "./middlewares/errorHandle"
dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(taskRouter)
app.use(errorHandlingMiddleware)

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))