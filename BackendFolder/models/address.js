const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Home", "Office", "Friends & Family"],
      default: "Home",
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
