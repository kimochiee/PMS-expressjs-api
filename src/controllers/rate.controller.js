const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const Rate = require("../models/rate.model");

const factoryService = require("../services/factory.service");

const getRates = catchAsync(async (req, res, next) => {
  const rates = await factoryService.getAll(Rate, req.query);

  if (!rates || rates.length == 0) {
    throw new CustomError("No rates with that query", 400);
  }

  res.status(200).json({
    status: "success",
    msg: "Get all rates successfully",
    rates,
  });
});

const createRate = catchAsync(async (req, res, next) => {
  const rate = await factoryService.createOne(Rate, req.body);

  res
    .status(201)
    .json({ status: "success", msg: "Create rate successfully", rate });
});

const getSingleRate = catchAsync(async (req, res, next) => {
  const rate = await factoryService.getOne(Rate, req.params.id, "");

  if (!rate) {
    throw new CustomError("No rate with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Get single rate successfully", rate });
});

const getRateByCode = catchAsync(async (req, res, next) => {
  const rate = await factoryService.getOneByOptions(Rate, {
    rateCode: req.params.rateCode,
  });

  if (!rate) {
    throw new CustomError("Rate not found for that code", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Get single rate successfully", rate });
});

const updateRate = catchAsync(async (req, res, next) => {
  const rate = await factoryService.updateOne(Rate, req.params.id, req.body);

  if (!rate) {
    throw new CustomError("No rate with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Update rate successfully", rate });
});

const deleteRate = catchAsync(async (req, res, next) => {
  const rate = await factoryService.deleteOne(Rate, req.params.id);

  if (!rate) {
    throw new CustomError("No rate with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Delete rate successfully", rate });
});

module.exports = {
  getRates,
  createRate,
  getSingleRate,
  getRateByCode,
  updateRate,
  deleteRate,
};
