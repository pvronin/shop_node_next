const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    let token = null;

    // 1. ابتدا از هدر Authorization چک کن
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    // 2. اگر در هدر نبود، از کوکی بخوان
    if (!token && req.cookies && req.cookies.access_token) {
        token = req.cookies.access_token;
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'توکن ارسال نشده است. لطفاً وارد شوید.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error('JWT verify error:', err.message);

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'توکن منقضی شده است. لطفاً مجدداً وارد شوید.'
            });
        }

        return res.status(401).json({
            success: false,
            message: 'توکن نامعتبر است'
        });
    }
};

module.exports = authenticateJWT;
