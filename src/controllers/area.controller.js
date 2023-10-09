const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const Area = require("../models/area.model");

const areaService = require("../services/area.service");
const fatoryService = require("../services/factory.service");

// Areas
const getAreas = catchAsync(async (req, res, next) => {
  const areas = await fatoryService.getAll(Area, req.query);

  res.status(200).json({
    status: "success",
    msg: "Get all areas successfully",
    areas,
  });
});

const createArea = catchAsync(async (req, res, next) => {
  const area = await fatoryService.createOne(Area, req.body);

  res
    .status(201)
    .json({ status: "success", msg: "Create area successfully", area });
});

const getSingleArea = catchAsync(async (req, res, next) => {
  const area = await fatoryService.getOne(Area, req.params.id);

  if (!area) {
    throw new CustomError("No area with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Get single area successfully", area });
});

const updateArea = catchAsync(async (req, res, next) => {
  const area = await fatoryService.updateOne(Area, req.params.id, req.body);

  if (!area) {
    throw new CustomError("No area with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Update area successfully", area });
});

const deleteArea = catchAsync(async (req, res, next) => {
  const area = await fatoryService.deleteOne(Area, req.params.id);

  if (!area) {
    throw new CustomError("No area with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Delete area successfully", area });
});

// Floors & Wings
const getFloors = catchAsync(async (req, res, next) => {
  const floors = await areaService.getFloorsService(req.params.active);

  if (!floors) {
    throw new CustomError("Floors not found", 400);
  }

  res
    .status(200)
    .json({ status: "sucess", msg: "Get floors successfully", floors });
});

const getWingsByFloor = catchAsync(async (req, res, next) => {
  const wings = await areaService.getWingsService(req.params.floor);

  if (!wings) {
    throw new CustomError(`Wings not found for floor ${req.params.floor}`, 400);
  }

  res
    .status(200)
    .json({ status: "sucess", msg: "Get wings successfully", wings });
});

// Slots
const getSlots = catchAsync(async (req, res, next) => {
  const slots = await fatoryService.getAll(Area, {
    floorName: req.params.floor,
    wingName: req.params.wing,
  });

  if (!slots || slots.length == 0) {
    throw new CustomError(
      `Slots not found for floor "${req.params.floor}" and for wing "${req.params.wing}"`,
      400
    );
  }

  res
    .status(200)
    .json({ status: "sucess", msg: "Get area successfully", slots: slots[0] });
});

const getSlot = catchAsync(async (req, res, next) => {
  const slot = await areaService.getSlotById(req.params.id);

  if (!slot || slot.length == 0) {
    throw new CustomError(`Slot not found`, 400);
  }

  res
    .status(200)
    .json({ status: "sucess", msg: "Get slot successfully", slot: slot[0] });
});

const updateSlot = catchAsync(async (req, res, next) => {
  const slot = await areaService.updateSlotById(req.params.id, req.body);

  if (!slot || slot.length == 0) {
    throw new CustomError(`Slot not found`, 400);
  }

  res
    .status(200)
    .json({ status: "sucess", msg: "Update slot successfully", slot });
});

const insertSlot = catchAsync(async (req, res, next) => {
  let areas = await areaService.findAllAreasWithConditions({
    floorName: req.params.floor,
    wingName: req.params.wing,
  });

  if (!areas || areas.length == 0) {
    throw new CustomError("Areas not found", 400);
  }

  areas = areas.map((area) => area._id);

  const slots = await areaService.insertSlotService(areas[0], req.body);

  res
    .status(200)
    .json({ status: "success", msg: "Insert slot successfully", slots });
});

const deleteSlot = catchAsync(async (req, res, next) => {
  const slot = await areaService.deleteSlotById(
    req.params.areaId,
    req.params.slotId
  );

  if (!slot || slot.length == 0) {
    throw new CustomError(`Slot not found`, 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Delete slot successfully", slot });
});

module.exports = {
  getAreas,
  createArea,
  getSingleArea,
  updateArea,
  deleteArea,
  getFloors,
  getWingsByFloor,
  getSlots,
  getSlot,
  updateSlot,
  insertSlot,
  deleteSlot,
};
