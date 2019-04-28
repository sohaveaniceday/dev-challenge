const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  suppliers: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier',
    required: true,
  } ]
})

productSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model("Product", productSchema);