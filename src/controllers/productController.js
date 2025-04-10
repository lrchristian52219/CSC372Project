const productModel = require('../models/productModel');

// Get all products
const getAllProducts = (req, res) => {
    const { category, search } = req.query;

    try {
        const products = productModel.getAllProducts(category, search);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

// Get product details by ID
const getProductById = (req, res) => {
    const { id } = req.params;

    try {
        const product = productModel.getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
};

// Add a product to the cart
const addToCart = (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
        return res.status(400).json({ error: 'Missing required fields: user_id, product_id, or quantity' });
    }

    try {
        const cart_id = productModel.getOrCreateCart(user_id);
        console.log('Cart ID:', cart_id); // Log the cart ID
        productModel.addToCart(cart_id, product_id, quantity); // Use addToCart here
        res.status(201).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error in addToCart:', error);
        res.status(500).json({ error: 'Failed to add product to cart' });
    }
};

// Remove a product from the cart
const removeFromCart = (req, res) => {
    const { product_id } = req.params;

    try {
        productModel.removeFromCart(product_id);
        res.status(200).json({ message: 'Product removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove product from cart' });
    }
};

// View cart
const viewCart = (req, res) => {
    try {
        const cart = productModel.viewCart();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

// Checkout
const checkout = (req, res) => {
    try {
        productModel.checkout();
        res.status(200).json({ message: 'Checkout successful' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to complete checkout' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addToCart,
    removeFromCart,
    viewCart,
    checkout,
};