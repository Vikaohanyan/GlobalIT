const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.get('/', productController.getProducts); // Հանրային
router.post('/', verifyToken, isAdmin, productController.createProduct); // Միայն ադմին
router.put('/:id', verifyToken, isAdmin, productController.updateProduct); // Միայն ադմին
router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct); // Միայն ադմին

module.exports = router;