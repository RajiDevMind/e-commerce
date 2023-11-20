const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Types.ObjectId, ref: "User" },

    img: {
      type: [String],
      required: [true, "product images must be provided!"],
    },
    title: {
      type: String,
      required: [true, "product name must be provided!"],
    },
    new_price: {
      type: Number,
      required: [true, "product price must be provided!"],
    },
    old_price: {
      type: String,
      required: [true, "Recommend to higher amount than new_price!"],
    },
    company: {
      type: String,
      required: [true, "sellers name"],
    },
    reviews: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    category: String,
    color: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
