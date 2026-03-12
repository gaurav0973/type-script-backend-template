import {
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";
import type { Request } from "express";
import type { Response } from "express";

class TodoController {
  private _db: Todo[];
  constructor() {
    this._db = [];
  }
  public handleGetAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async handleinsertTodo(req: Request, res: Response) {
    try {
      const unvalidatedData = req.body;
      const validatedDate =
        await todoValidationSchema.parseAsync(unvalidatedData);
      this._db.push(validatedDate);
      return res.status(201).json({
        todo: validatedDate,
      });
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
  }
}

export default TodoController;
