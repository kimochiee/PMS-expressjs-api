const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    menuName: {
      type: [String],
      required: [true, "Menu name is required"],
    },
    description: {
      type: String,
      maxLength: [50, "Description can't be more than 50 characters"],
    },
    role: {
      type: mongoose.Types.ObjectId,
      ref: "Role",
      required: true,
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

module.exports = mongoose.model("Permission", permissionSchema);
