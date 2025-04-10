const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes for products
router.get('/products', productController.getAllProducts); // Get all products (with optional filters)
router.get('/products/:id', productController.getProductById); // Get product details by ID

// Routes for cart
router.post('/cart', productController.addToCart); // Add a product to the cart
router.delete('/cart/:product_id', productController.removeFromCart); // Remove a product from the cart
router.get('/cart', productController.viewCart); // View the cart
router.post('/cart/checkout', productController.checkout); // Checkout (empty the cart)

module.exports = router;