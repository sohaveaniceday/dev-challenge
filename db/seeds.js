const mongoose = require("mongoose");
const { dbURI } = require("../config/environment");
const Supplier = require("../models/supplier");

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
    .then(supplier => console.log(`${supplier.length} suppliers created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
