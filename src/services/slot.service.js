const Slot = require("../models/slot.model");
const APIFeatures = require("../utils/apiFeatures");

const findAllSlotsWithConditions = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const features = new APIFeatures(Slot.find(), query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

      const slots = await features.query;

      resolve(slots);
    } catch (error) {
      reject(error);
    }
  });
};

const addingSlot = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Slot.create(data);

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const findSlotById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Slot.findById(id);

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const findSlotWithConditions = (condition) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Slot.findOne(condition);

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const updateSlotById = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Slot.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteSlotById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Slot.findByIdAndDelete(id);

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  findAllSlotsWithConditions,
  addingSlot,
  findSlotById,
  findSlotWithConditions,
  updateSlotById,
  deleteSlotById,
};
