const express = require('express');
const authenticateJWT = require('../../../middlewares/auth');
const router = express.Router();
const {
    getProducts,
    getDiscountedProducts,
    getProductById,
    getCategories,
    getRelatedProducts,
    addComment
} = require('./product.controller');

// روت‌های عمومی (نیاز به احراز هویت ندارند)
router.get('/', getProducts);
router.get('/discounted', getDiscountedProducts);
router.get('/categories', getCategories);
router.get('/:id', getProductById);
router.get('/:id/related', getRelatedProducts);

router.post('/addcomment/:id', authenticateJWT, addComment)

module.exports = router;
