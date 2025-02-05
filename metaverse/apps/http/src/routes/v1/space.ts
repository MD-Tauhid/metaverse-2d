import { Router } from "express";

export const spaceRouter = Router();

spaceRouter.post("/", (req, res) => {
    res.send("create space");
})

spaceRouter.delete("/element", (req, res) => {
    res.send("delete element");
})

spaceRouter.delete("/:spaceId", (req, res) => {
    res.send(req.params.spaceId);
})

spaceRouter.get("/all", (req, res) => {
    res.send("get all spaces...");
})

spaceRouter.post("/element", (req, res) => {
    res.send("Create space element");
});

spaceRouter.get("/:spaceId", (req, res) => {
    res.send("get specific space");
});
