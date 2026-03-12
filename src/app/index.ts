import express from "express"
import type { Application } from "express"

export function createServerApplication(): Application{
    const app = express()

    app.get("/home", function(req, res){
        return res.json({
            message : "This is how I handle the routes",
            statusCode: 200
        })
    })


    return app
}