import app from "./app";
import { Request, Response } from "express";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT;

app.use('/', (req: Request, res: Response) => {
    res.status(200).send("Hello!")
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}.`))