import mongoose from "mongoose";

const rateSchema = new mongoose.Schema(
  {
    rateName: {
      type: String,
      required: [true, "Rate name is required"],
    },
    rateCode: {
      type: String,
      required: [true, "Rate code is required"],
      unique: true,
    },
    caregory: {
      type: Array,
    },
    type: {
      type: Array,
    },
    rate: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Rate", rateSchema);
