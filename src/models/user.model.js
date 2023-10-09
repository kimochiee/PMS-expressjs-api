const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "User must have a email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
      minlength: 6,
    },
    address: {
      type: String,
      maxLength: [50, "Address can't be more than 50 characters"],
    },
    mobile: {
      type: Number,
      required: [true, "User must have mobile number"],
    },
    dateOfJoining: {
      type: String,
    },
    role: {
      type: mongoose.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    identityProof: {
      type: String,
      required: true,
    },
    isProfileCompleted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
    passwordChangeAt: Date,
    resetPasswordToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.refreshToken;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);

  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
