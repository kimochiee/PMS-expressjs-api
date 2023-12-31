const User = require("../models/user.model");
const CustomError = require("../utils/customError");
const catchAsync = require("../utils/catchAsync");
const { verifyToken } = require("../utils/jwt");

const authenticateUser = catchAsync(async (req, res, next) => {
  // const { refreshToken } = req.cookies;

  // if (!refreshToken) {
  //   throw new CustomError("You already logout", 400);
  // }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const payload = verifyToken(token);

    if (!payload) {
      throw new CustomError("Invalid access token", 401);
    }

    const user = await User.findById(payload._id).populate("role");

    if (!user) {
      throw new CustomError(
        "The user belonging to this token does no longer exist",
        401
      );
    }

    req.user = user;
    next();
  } else {
    throw new CustomError("Not Authorized to access this route", 403);
  }
});

const authorizeUser = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (!roles.includes(role.roleName)) {
      throw new CustomError(
        "You do not have permission to access this route",
        403
      );
    }

    next();
  };
};

module.exports = { authenticateUser, authorizeUser };
