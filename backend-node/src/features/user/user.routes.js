const express = require('express');
const router = express.Router();
const authenticateJWT = require('../../../middlewares/auth');
const { getMe, updateMe, changePassword } = require('./user.controller');

router.get('/me', authenticateJWT, getMe);
router.put('/me', authenticateJWT, updateMe);
router.post('/me/change-password', authenticateJWT, changePassword);

module.exports = router;
