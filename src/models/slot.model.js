import mongoose from "mongoose";

const slotNameSchema = new mongoose.Schema({
  slotName: {
    type: String,
    unique: true,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

const capacitySchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: [true, "Vehicle type is required"],
  },
  isAvailable: {
    type: Boolean,
    default: false,
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
    capacity: [capacitySchema],
    isFullyOccupied: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Slot", slotSchema);
