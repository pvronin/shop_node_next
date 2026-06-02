const prisma = require('../../../prismadb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, email, password, first_name = '', last_name = '' } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'نام کاربری، ایمیل و رمز عبور الزامی هستند'
            });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'فرمت ایمیل نامعتبر است'
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
            });
        }

        const existingUser = await prisma.users.findFirst({
            where: {
                OR: [
                    { username: username.trim() },
                    { email: email.trim().toLowerCase() }
                ]
            }
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: existingUser.username === username.trim() ?
                    'این نام کاربری قبلاً ثبت شده است' :
                    'این ایمیل قبلاً ثبت شده است'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.users.create({
            data: {
                username: username.trim(),
                email: email.trim().toLowerCase(),
                password_hash: hashedPassword,
                first_name: first_name.trim() || null,
                last_name: last_name.trim() || null,
            }
        });

        res.status(201).json({
            success: true,
            message: 'ثبت‌نام با موفقیت انجام شد',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                first_name: newUser.first_name,
                last_name: newUser.last_name
            }
        });

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور در هنگام ثبت‌نام'
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'ایمیل و رمز عبور الزامی هستند'
            });
        }

        const user = await prisma.users.findUnique({
            where: { email: email.trim().toLowerCase() }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'ایمیل یا رمز عبور اشتباه است'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'ایمیل یا رمز عبور اشتباه است'
            });
        }

        await prisma.users.update({
            where: { id: user.id },
            data: { last_login_at: new Date() }
        });

        const payload = { id: user.id, email: user.email, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            success: true,
            message: 'ورود با موفقیت انجام شد',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور در هنگام ورود'
        });
    }
};

module.exports = { register, login };
