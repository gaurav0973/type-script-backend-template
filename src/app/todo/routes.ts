import { Router } from "express";
import TodoController from "./controllers.js";

const todoRouter = Router()
const controller = new TodoController()

todoRouter.get("/", controller.handleGetAllTodos)
// todoRouter.get("/:id")

// todoRouter.post("/")

// todoRouter.put("/")
// todoRouter.delete("/")

export default todoRouter