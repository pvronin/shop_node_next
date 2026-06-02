const express = require('express');
const router = express.Router();
const {
    getDiscounts,
    getDiscountById,
    getDiscountsStats
} = require('./discount.controller');

// روت‌های عمومی
router.get('/', getDiscounts);
router.get('/stats', getDiscountsStats);
router.get('/:id', getDiscountById);

module.exports = router;
