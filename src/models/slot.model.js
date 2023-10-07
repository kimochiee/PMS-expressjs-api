const mongoose = require("mongoose");

const slotNameSchema = new mongoose.Schema({
  slotName: {
    type: String,
    unique: true,
  },
  vehicleType: {
    type: String,
    required: [true, "Vehicle type is required"],
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  capacity: {
    type: Number,
  },
});

const slotSchema = new mongoose.Schema(
  {
    floorName: {
      type: String,
      required: [true, "Floor name is required"],
    },
    wingName: {
      type: String,
      required: [true, "Wing name is required"],
    },
    slots: [slotNameSchema],
    isFullyOccupied: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", slotSchema);
