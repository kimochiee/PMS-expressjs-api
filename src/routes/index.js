import express from "express";
const router = express.Router();

import errorHandler from "../middlewares/error.middleware";
import CustomError from "../utils/customError";

import authRouter from "./auth.routes";
import adminRouter from "./admin.routes";
import userRouter from "./user.routes";

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/user", userRouter);

router.all("*", (req, res) => {
  throw new CustomError(`Can't find ${req.originalUrl} on this server!`, 404);
});
router.use(errorHandler);

export default router;
