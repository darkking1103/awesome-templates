import express, { Express } from "express";

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())

export default app