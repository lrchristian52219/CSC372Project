const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Routes for managing products
router.post('/products', (req, res) => {
    console.log('POST /api/admin/products called');
    adminController.addProduct(req, res);
}); // Add a new product
router.put('/products/:id', adminController.editProduct); // Edit an existing product
router.delete('/products/:id', adminController.deleteProduct); // Delete a product
router.post('/products/bulk', adminController.bulkUploadProducts); // Bulk upload products

// Routes for managing categories
router.get('/categories', adminController.getAllCategories); // Get all categories
router.post('/categories', adminController.addCategory); // Add a new category
router.put('/categories/:id', adminController.editCategory); // Edit an existing category
router.delete('/categories/:id', adminController.deleteCategory); // Delete a category

// Test route
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test route is working' });
});

module.exports = router;