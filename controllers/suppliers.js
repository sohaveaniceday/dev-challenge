const Supplier = require('../models/supplier')

function indexRoute(req, res) {
  return Supplier
    .find(req.query)
    .then(supplier => res.status(200).json(supplier))
    .catch(err => res.json(err))
}

function createRoute(req,res) {
  return Supplier
    .create(req.body)
    .then(supplier => res.status(201).json(supplier))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  return Supplier
    .findById(req.params.id)
    .then(supplier => {
      if (!supplier) return res.status(404).json({ message: "Not Found" });
      res.status(200).json(supplier);
    })
    .catch(err => res.json(err));
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
}
