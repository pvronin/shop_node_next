const app = require('./app');
const PORT = process.env.APP_PORT || 8000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
