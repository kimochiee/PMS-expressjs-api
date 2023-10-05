import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    menuName: {
      type: String,
      required: [true, "Menu name is required"],
    },
    description: {
      type: String,
      maxLength: [50, "Description can't be more than 50 characters"],
    },
    isAccessible: {
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

export default mongoose.model("Permission", permissionSchema);
