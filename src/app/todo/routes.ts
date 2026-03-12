import { Router } from "express";
import TodoController from "./controllers.js";

const todoRouter = Router()
const controller = new TodoController()
// kyoki ye detacheed ho gaya hai and will be called when triggred, so bind karna padega

// todoRouter.get("/", controller.handleGetAllTodos)
todoRouter.get("/", controller.handleGetAllTodos.bind(controller))
// todoRouter.get("/:id")

todoRouter.post("/", controller.handleinsertTodo.bind(controller))

// todoRouter.put("/")
// todoRouter.delete("/")

export default todoRouter