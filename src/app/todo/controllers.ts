import type { Todo } from "../../validation/todo.schema.js"
import type { Request } from "express";
import type { Response } from "express";

class TodoController {
    private _db: Todo[]
    constructor(){
        this._db = []
    }
    public handleGetAllTodos(req:Request, res:Response){
        const todos = this._db;
        return res.json({todos})
    }
}

export default TodoController