import { Router } from "express";

export const userRouter = Router();


userRouter.get("/metadata", (req, res) => {
    res.send("user metadata");
})
userRouter.get("/metadata/bulk", (req, res) => {
    res.send("user metadata bulk request");
})