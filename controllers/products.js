const Product = require('../models/product')

function indexRoute(req, res) {
  return Product
    .find(req.query)
    .then(product => res.status(200).json(product))
    .catch(err => res.json(err))
}

function createRoute(req,res) {
  return Product
    .create(req.body)
    .then(product => res.status(201).json(product))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  return Product
    .findById(req.params.id)
    .then(product => {
      if (!product) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json(product)
    })
    .catch(err => res.json(err))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
}




