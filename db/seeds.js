const mongoose = require("mongoose");
const { dbURI } = require("../config/environment");
const Supplier = require("../models/supplier");
const Product = require("../models/product");
const Promise = require("bluebird");


mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase();

  Supplier.create([
    {
      name: "New Co Ltd"
    },
    {
      name: "Old Co Ltd"
    }
  ])
    .then(supplier => {
      return Promise.all([
        supplier,
        Product.create([
          {
            name: "Small wongle",
            supplier: [supplier[0]._id],
            price: 5
          },
          {
            name: "Large wongle",
            supplier: [supplier[0]._id],
            price: 8
          },
          {
            name: "Super wongle",
            supplier: [supplier[0]._id],
            price: 12
          },
          {
            name: "Mini wongle",
            supplier: [supplier[1]._id],
            price: 4
          },
          {
            name: "Small wongle",
            supplier: [supplier[1]._id],
            price: 6
          },
          {
            name: "Large wongle",
            supplier: [supplier[1]._id],
            price: 9
          },
          {
            name: "Super wongle",
            supplier: [supplier[1]._id],
            price: 13
          }
        ])
      ])
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
