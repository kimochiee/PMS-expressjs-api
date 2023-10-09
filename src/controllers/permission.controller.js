const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const Permission = require("../models/permission.model");

const factoryService = require("../services/factory.service");

const getPermissions = catchAsync(async (req, res, next) => {
  const permissions = await factoryService.getAll(Permission, req.query);

  if (!permissions || permissions.length == 0) {
    throw new CustomError("No permissions with that query", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Get all permissions successfully",
    permissions,
  });
});

const createPermission = catchAsync(async (req, res, next) => {
  const permission = await factoryService.createOne(Permission, req.body);

  res.status(201).json({
    status: "success",
    msg: "Create permission successfully",
    permission,
  });
});

const getSinglePermission = catchAsync(async (req, res, next) => {
  const permission = await factoryService.getOne(
    Permission,
    req.params.id,
    "role"
  );

  if (!permission) {
    throw new CustomError("No permission with that id", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Get single permission successfully",
    permission,
  });
});

const updatePermission = catchAsync(async (req, res, next) => {
  const permission = await factoryService.updateOne(
    Permission,
    req.params.id,
    req.body
  );

  if (!permission) {
    throw new CustomError("No permission with that id", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Update permission successfully",
    permission,
  });
});

const deletePermission = catchAsync(async (req, res, next) => {
  const permission = await factoryService.deleteOne(Permission, req.params.id);

  if (!permission) {
    throw new CustomError("No permission with that id", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Delete permission successfully",
    permission,
  });
});

module.exports = {
  getPermissions,
  createPermission,
  getSinglePermission,
  updatePermission,
  deletePermission,
};
