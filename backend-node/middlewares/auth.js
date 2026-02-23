const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;


    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'توکن ارسال نشده یا فرمت اشتباه است'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // حالا req.user شامل { id, email, role, ... } است
        next();
    } catch (err) {
        console.error('JWT verify error:', err.message);

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'توکن منقضی شده است'
            });
        }

        return res.status(401).json({
            success: false,
            message: 'توکن نامعتبر است'
        });
    }
};

module.exports = authenticateJWT;
