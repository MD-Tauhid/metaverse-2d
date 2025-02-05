import { Router } from "express";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";
import { userRouter } from "./user";

export const router = Router();

router.get("/signup", (req, res) => {
    res.json({
        message:"signup",
    })
});
router.get("/signin", (req, res) => {
    res.json({
        message:"signin",
    })
});

router.use("/space", spaceRouter);
router.use("/admin", adminRouter);
router.use("/user", userRouter);
