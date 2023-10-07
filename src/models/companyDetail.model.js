const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    mobile: {
      type: Number,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    address: {
      type: String,
      maxLength: [50, "Address can't be more than 50 characters"],
    },
    gstNo: {
      type: String,
    },
    ownerDetails: {
      ownerName: {
        type: String,
      },
      mobile: {
        type: Number,
      },
      email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
      },
      address: {
        type: String,
        maxLength: [50, "Address can't be more than 50 characters"],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CompanyDetail", companySchema);
