const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  suppliers: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Supplier',
    required: true,
    price: { type: Integer, required: true }
  } ]
})

supplierSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Example', supplierSchema)