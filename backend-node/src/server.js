const app = require('./app');
const PORT = process.env.APP_PORT || 8000;

// می‌گوییم اگر روی ورسل نبودیم (یعنی لوکال بودیم)، سرور را لیسن کن
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running locally on port ${PORT}`);
    });
}

// این خط هم برای ورسل حیاتی است
module.exports = app;
