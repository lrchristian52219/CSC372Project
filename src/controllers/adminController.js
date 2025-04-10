const adminModel = require('../models/adminModel');

// Add a new product
const addProduct = (req, res) => {
    const { name, description, image_url, price, category_id, is_featured } = req.body;

    console.log('Request body:', req.body); // Log the incoming data

    try {
        adminModel.addProduct({ name, description, image_url, price, category_id, is_featured });
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error in addProduct:', error); // Log the error
        res.status(500).json({ error: 'Failed to add product' });
    }
};

// Edit an existing product
const editProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, image_url, price, category_id, is_featured } = req.body;

    try {
        adminModel.editProduct(id, { name, description, image_url, price, category_id, is_featured });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

// Delete a product
const deleteProduct = (req, res) => {
    const { id } = req.params;

    try {
        adminModel.deleteProduct(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

// Bulk upload products
const bulkUploadProducts = (req, res) => {
    const products = req.body;

    try {
        adminModel.bulkUploadProducts(products);
        res.status(201).json({ message: 'Products uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to upload products' });
    }
};

// Get all categories
const getAllCategories = (req, res) => {
    try {
        const categories = adminModel.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};

// Add a new category
const addCategory = (req, res) => {
    const { name, priority_level } = req.body;

    try {
        adminModel.addCategory({ name, priority_level });
        res.status(201).json({ message: 'Category added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add category' });
    }
};

// Edit an existing category
const editCategory = (req, res) => {
    const { id } = req.params;
    const { name, priority_level } = req.body;

    try {
        adminModel.editCategory(id, { name, priority_level });
        res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update category' });
    }
};

// Delete a category
const deleteCategory = (req, res) => {
    const { id } = req.params;

    try {
        adminModel.deleteCategory(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
};

module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
    bulkUploadProducts,
    getAllCategories,
    addCategory,
    editCategory,
    deleteCategory,
};