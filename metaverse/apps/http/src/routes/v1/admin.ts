import { Router } from "express";

export const adminRouter = Router();

adminRouter.get("/element", (req, res) => {
    res.send("Welcome to the admin dashboard!");
})

adminRouter.put("/element/:elementId", (req, res) => {
    res.send(`Element with ID: ${req.params.elementId}`);
})

adminRouter.post("/avatar", (req, res) => {
    res.send(`Avater in admin`);
})

adminRouter.post("/map", (req, res) => {
    res.send(`map in admin.`);
})