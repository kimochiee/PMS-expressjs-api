const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/customError");

const slotService = require("../services/slot.service");

const getSlots = catchAsync(async (req, res, next) => {
  const slots = await slotService.findAllSlotsWithConditions(req.query);

  res.status(200).json({
    status: "success",
    msg: "Get all slots successfully",
    slots,
  });
});

const createSlot = catchAsync(async (req, res, next) => {
  const slot = await slotService.addingSlot(req.body);

  res
    .status(201)
    .json({ status: "success", msg: "Create slot successfully", slot });
});

const getSingleSlot = catchAsync(async (req, res, next) => {
  const slot = await slotService.findSlotById(req.params.id);

  if (!slot) {
    throw new CustomError("No slot with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Get single slot successfully", slot });
});

const updateSlot = catchAsync(async (req, res, next) => {
  const slot = await slotService.updateSlotById(req.params.id, req.body);

  if (!slot) {
    throw new CustomError("No slot with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Update slot successfully", slot });
});

const deleteSlot = catchAsync(async (req, res, next) => {
  const slot = await slotService.deleteSlotById(req.params.id);

  if (!slot) {
    throw new CustomError("No slot with that id", 400);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Delete slot successfully", slot });
});

module.exports = {
  getSlots,
  createSlot,
  getSingleSlot,
  updateSlot,
  deleteSlot,
};
