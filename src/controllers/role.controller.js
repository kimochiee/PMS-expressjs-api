const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const Role = require("../models/role.model");

// const roleService = require("../services/role.service");
const factoryService = require("../services/factory.service");

const getRoles = catchAsync(async (req, res, next) => {
  const roles = await factoryService.getAll(Role, req.query);

  if (!roles || roles.length == 0) {
    throw new CustomError("No roles with that query", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Get all roles successfully",
    roles,
  });
});

const createRole = catchAsync(async (req, res, next) => {
  const role = await factoryService.createOne(Role, req.body);

  res
    .status(201)
    .json({ status: "success", msg: "Create role successfully", role });
});

const getSingleRole = catchAsync(async (req, res, next) => {
  const role = await factoryService.getOne(Role, req.params.id, "");

  if (!role) {
    throw new CustomError("No role with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Get single role successfully", role });
});

const updateRole = catchAsync(async (req, res, next) => {
  const role = await factoryService.updateOne(Role, req.params.id, req.body);

  if (!role) {
    throw new CustomError("No role with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Update role successfully", role });
});

const deleteRole = catchAsync(async (req, res, next) => {
  const role = await factoryService.deleteOne(Role, req.params.id);

  if (!role) {
    throw new CustomError("No role with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Delete role successfully", role });
});

module.exports = {
  getRoles,
  createRole,
  getSingleRole,
  updateRole,
  deleteRole,
};
