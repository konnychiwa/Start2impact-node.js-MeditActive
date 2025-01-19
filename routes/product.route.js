const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  postProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

// get all products
router.get('/', getProducts);

// get a product
router.get('/:id', getProduct);

// add a product
router.post('/', postProducts);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
