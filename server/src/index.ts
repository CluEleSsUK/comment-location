const express = require("express")
import { Request, Response } from "express"
import { samplePosts } from "./SamplePosts"

const app = express()

app.get("/posts", (request: Request, response: Response) => {
	response.send(JSON.stringify(samplePosts))
})

const port = 3001
app.listen(port)
console.log(`API started on port ${port}`)