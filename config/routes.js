const router = require('express').Router()
const suppliers = require('../controllers/suppliers')
const products = require('../controllers/products')

router.route('/suppliers')
  .get(suppliers.index)
  .post(suppliers.create)

router.route('/suppliers/:id')
  .get(suppliers.show)

router.route('/products')
  .get(products.index)
  .post(products.create)

router.route('/suppliers/:id')
  .get(products.show)

module.exports = router