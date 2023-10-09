const Area = require("../models/area.model");

//
const getFloorsService = (active) => {
  return new Promise(async (resolve, reject) => {
    try {
      const floors = await Area.distinct("floorName", { isActive: active });

      resolve(floors);
    } catch (error) {
      reject(error);
    }
  });
};

const getWingsService = (floor) => {
  return new Promise(async (resolve, reject) => {
    try {
      const wings = await Area.distinct("wingName", { floorName: floor });

      resolve(wings);
    } catch (error) {
      reject(error);
    }
  });
};

//
const getSlotById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Area.find(
        { "slots._id": id },
        { "slots.$": 1 }
      ).select("floorName wingName isFullyOccupied isActive");

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const updateSlotById = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Area.updateOne(
        { "slots._id": id },
        {
          $set: {
            "slots.$.capacity": data.capacity,
            "slots.$.slotName": data.slotName,
          },
        }
      );

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

const insertSlotService = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slots = await Area.findByIdAndUpdate(
        { _id: id },
        { $push: { slots: { $each: data } } },
        { new: true, upsert: true }
      );

      resolve(slots);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteSlotById = (areaId, slotId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const slot = await Area.updateOne(
        { _id: areaId },
        { $pull: { slots: { _id: slotId } } }
      );

      resolve(slot);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getFloorsService,
  getWingsService,
  getSlotById,
  updateSlotById,
  insertSlotService,
  deleteSlotById,
};
