const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
    vehicleNo: {
      type: String,
      required: [true, "Vehicle number is required"],
    },
    checkIn: {
      type: String,
      required: [true, "CheckIn time is required"],
    },
    checkOut: {
      type: String,
      required: [true, "CheckOut time is required"],
    },
    category: {
      type: String,
    },
    rateCode: {
      type: String,
    },
    rate: {
      type: Number,
    },
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "slot",
      required: true,
    },
    totalHours: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
    paymentMode: {
      type: Array,
      enum: ["cash", "credit/debit", "upi", "neft/imps"],
    },
    paidStatus: {
      type: Array,
      enum: ["pending", "in progress", "completed"],
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parking", parkingSchema);
