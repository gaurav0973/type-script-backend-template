import express from "express"
import type { Application } from "express"
import todoRouter from "./todo/routes.js"


export function createServerApplication(): Application{
    const app = express()
    app.use(express.json())

    //method => this is not how we use in industry
    // app.get("/home", function(req, res){
    //     return res.json({
    //         message : "This is how I handle the routes",
    //         statusCode: 200
    //     })
    // })
    app.use("/todos", todoRouter)


    return app
}