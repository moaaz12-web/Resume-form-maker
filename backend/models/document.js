const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new Schema(
  {
    language: {
      type: String,
      required: true,
    },

    tone: {
      type: String,
      required: true,
    },
    usecase: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    variants: {
      type: Number,
      required: true,
    },
    generatedText: {
      type: String,
      required: true,
    },
    translatedText: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("document", DocumentSchema);

// user: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'User',
//     required: true
//   }
//   const product = new Product({
//     user: user._id,
//     // other fields
//   });
//   Product.findById(productId).populate('user').exec((err, product) => {
//     // product.user will be the full user document
//   });
