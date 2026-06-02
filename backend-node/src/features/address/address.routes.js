const express = require('express');
const router = express.Router();
const authenticateJWT = require('../../../middlewares/auth');
const {
    getUserAddresses,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    getProvinces,
    validatePostalCode
} = require('./address.controller');

// همه روت‌های آدرس نیاز به احراز هویت دارند
router.use(authenticateJWT);

// روت‌های عمومی آدرس (با احراز هویت)
router.get('/provinces', getProvinces);
router.get('/validate-postal-code', validatePostalCode);

// روت‌های اصلی آدرس
router.get('/', getUserAddresses);
router.get('/:addressId', getAddressById);
router.post('/', createAddress);
router.put('/:addressId', updateAddress);
router.delete('/:addressId', deleteAddress);
router.patch('/:addressId/default', setDefaultAddress);

module.exports = router;
