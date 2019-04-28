const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// supplierSchema.set("toJSON", {
//   virtuals: true,
//   transform(doc, json) {
//     delete json.password;
//     return json;
//   }
// });

// supplierSchema.virtual("products", {
//   ref: "Product",
//   localField: "_id",
//   foreignField: "supplier"
// });

supplierSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Supplier', supplierSchema)