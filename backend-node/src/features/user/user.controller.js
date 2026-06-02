const prisma = require('../../../prismadb');
const bcrypt = require('bcrypt');
const authenticateJWT = require('../../../middlewares/auth');

const getMe = async (req, res) => {
    try {
        const user = await prisma.users.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                username: true,
                email: true,
                first_name: true,
                last_name: true,
                role: true,
                phone: true,
                created_at: true,
                is_verified: true
            }
        });

        const addresses = await prisma.addresses.findMany({
            where: { user_id: req.user.id },
            select: {
                id: true,
                label: true,
                province: true,
                city: true,
                postal_code: true,
                address_line: true,
                is_default: true
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            user,
            addresses
        });
    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور'
        });
    }
};

const updateMe = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        const updateData = {};
        const allowedFields = ['first_name', 'last_name', 'username', 'email', 'phone'];

        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                updateData[field] = req.body[field];
            }
        });

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'هیچ فیلدی برای آپدیت ارسال نشده'
            });
        }

        const updatedUser = await prisma.users.update({
            where: { id: req.user.id },
            data: updateData,
            select: {
                id: true,
                username: true,
                email: true,
                first_name: true,
                last_name: true,
                phone: true,
                role: true
            }
        });

        res.status(200).json({
            success: true,
            message: 'پروفایل با موفقیت به‌روزرسانی شد',
            user: updatedUser
        });

    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({
                success: false,
                message: 'این نام کاربری یا ایمیل قبلاً استفاده شده'
            });
        }
        res.status(500).json({
            success: false,
            message: 'خطا در به‌روزرسانی پروفایل'
        });
    }
};

const changePassword = async (req, res) => {
    try {
        const { current_password, new_password, confirm_password } = req.body;

        if (!current_password || !new_password || !confirm_password) {
            return res.status(400).json({
                success: false,
                message: 'تمام فیلدها الزامی هستند'
            });
        }

        if (new_password !== confirm_password) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور جدید و تکرار آن مطابقت ندارند'
            });
        }

        if (new_password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
            });
        }

        const user = await prisma.users.findUnique({
            where: { id: req.user.id }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        const isValid = await bcrypt.compare(current_password, user.password_hash);
        if (!isValid) {
            return res.status(401).json({
                success: false,
                message: 'رمز عبور فعلی اشتباه است'
            });
        }

        const isSameAsOld = await bcrypt.compare(new_password, user.password_hash);
        if (isSameAsOld) {
            return res.status(400).json({
                success: false,
                message: 'رمز جدید باید با رمز قبلی متفاوت باشد'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const newPasswordHash = await bcrypt.hash(new_password, salt);

        await prisma.users.update({
            where: { id: req.user.id },
            data: { password_hash: newPasswordHash }
        });

        res.status(200).json({
            success: true,
            message: 'رمز عبور با موفقیت تغییر کرد'
        });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در تغییر رمز عبور'
        });
    }
};

module.exports = { getMe, updateMe, changePassword };
