import mongoose from "mongoose";

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
      },
      address: {
        type: String,
        maxLength: [50, "Address can't be more than 50 characters"],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("CompanyDetail", companySchema);
