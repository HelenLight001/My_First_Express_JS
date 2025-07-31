const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema(
  {
    ///// title is an example of a data field structure
    title: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      minLength: [8, "Minimum lenght should be more than  letter words"],
      maxLength: [15, "Maximum length should not exceed 15 words"],
      unique: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    userInfo: {
      type: String,
      country: String,
      state: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      minLength: [5, "Minimum length should be more than 5 characters"],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
  },

  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
