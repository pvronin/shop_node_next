const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import route files
const authRoutes = require('./features/auth/auth.routes');
const userRoutes = require('./features/user/user.routes');
const productRoutes = require('./features/product/product.routes');
const addressRoutes = require('./features/address/address.routes');
const discountRoutes = require('./features/discount/discount.routes');
const chatRoutes = require('./features/chat/chat.routes');

const app = express();

// Middlewares
// تنظیمات کامل CORS برای پشتیبانی از credentials
// تنظیمات درست CORS
app.use(cors({
    origin: [
        'http://localhost:3000', // فرانت‌لوکال خودت (اگر پورت دیگری است عوضش کن)
        // 'https://your-frontend-vercel-url.vercel.app' // آدرس نهایی فرانت‌اندم روی ورسل را بعداً اینجا اضافه کن
    ],
    credentials: true, // اجازه ارسال کوکی و هدرهای احراز هویت
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/chat', chatRoutes);


// Health check
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API Server is running',
        version: '1.0.0'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'مسیر مورد نظر یافت نشد'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'خطای داخلی سرور',
        ...(process.env.NODE_ENV === 'development' && { error: err.message })
    });
});

module.exports = app;
