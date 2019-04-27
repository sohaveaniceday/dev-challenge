const Supplier = require('../models/supplier')

function showRoute(req, res) {
  return Supplier
    .findById(req.params.id)
    .then(supplier => {
      if (!supplier) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json(supplier)
    })
    .catch(err => res.json(err))
}

module.exports = {
  show: showRoute,
}
