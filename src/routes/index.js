const express = require("express");
const router = express.Router();

const errorHandler = require("../middlewares/error.middleware");
const CustomError = require("../utils/customError");

// const authRouter  = require("./auth.routes");
// const adminRouter  = require("./admin.routes");
// const userRouter  = require("./user.routes");
const slotRouter = require("./slot.routes");

// router.use("/auth", authRouter);
// router.use("/admin", adminRouter);
// router.use("/user", userRouter);
router.use("/slots", slotRouter);

router.all("*", (req, res) => {
  throw new CustomError(`Can't find ${req.originalUrl} on this server!`, 404);
});
router.use(errorHandler);

module.exports = router;
