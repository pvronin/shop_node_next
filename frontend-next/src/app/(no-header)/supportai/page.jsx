'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';
import { BsChatDots } from 'react-icons/bs';
import { BiBot } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

export default function ChatPage() {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    // اسکرول خودکار به آخرین پیام
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // هندل کردن Enter برای ارسال
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        // اضافه کردن پیام کاربر به لیست
        const userMessage = { role: 'user', content: message, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setLoading(true);
        setIsTyping(true);

        try {
            const res = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userMessage: message }),
            });

            const data = await res.json();

            if (data.success) {
                // اضافه کردن پاسخ بات به لیست
                const botMessage = {
                    role: 'assistant',
                    content: data.reply,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                const errorMessage = {
                    role: 'assistant',
                    content: '❌ ' + data.error,
                    timestamp: new Date(),
                    isError: true
                };
                setMessages(prev => [...prev, errorMessage]);
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = {
                role: 'assistant',
                content: '❌ خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.',
                timestamp: new Date(),
                isError: true
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
            setIsTyping(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
            <div className="max-w-7xl mx-auto h-screen flex flex-col">
                {/* هدر */}
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white dark:bg-gray-800 shadow-lg rounded-b-2xl z-10"
                >
                    <div className="px-6 py-4 flex items-center gap-3">

                        <Logo width={60} height={60} />

                        <div>
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">چت با هوش مصنوعی</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">پاسخگو و هوشمند • ۲۴ ساعته</p>
                        </div>
                    </div>
                </motion.div>

                {/* پیام‌ها */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                    {messages.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center justify-center h-full text-center"
                        >
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg mb-4">
                                <div className="w-12 h-12 text-white flex items-center justify-center">
                                    <BsChatDots size={40} />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">به چت‌بات خوش آمدید!</h2>
                            <p className="text-gray-500 dark:text-gray-400">سوال خود را بپرسید تا به شما کمک کنم 😊</p>
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[70%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                                    <div className={`flex items-center gap-2 ${msg.role !== 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`rounded-2xl px-4 py-2 shadow-md ${msg.role === 'user'
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                                            : msg.isError
                                                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700'
                                                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
                                            }`}>
                                            <p className="whitespace-pre-wrap break-words">{msg.content}</p>
                                        </div>
                                        <div className='rounded-full border-1 p-1.5 bg-gradient-to-r from-blue-600 to-emerald-500'>
                                            {
                                                msg.role == 'user' ? <FaUser size={22} /> : <BiBot size={22} />
                                            }
                                        </div>
                                    </div>

                                    <p className={`text-xs mt-1 text-gray-400 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                        {new Date(msg.timestamp).toLocaleTimeString('fa-IR')}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* تایپینگ ایندیکیتور */}
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-md border border-gray-200 dark:border-gray-700">
                                    <div className="flex gap-1">
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                                            className="w-2 h-2 bg-gray-400 rounded-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div ref={messagesEndRef} />
                </div>

                {/* اینپوت */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-lg rounded-t-2xl"
                >
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <textarea
                                ref={textareaRef}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="پیام خود را بنویسید..."
                                rows={1}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
                                style={{ minHeight: '48px', maxHeight: '120px' }}
                                onInput={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                                }}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={sendMessage}
                            disabled={loading || !message.trim()}
                            className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                            style={{ height: '48px' }}
                        >
                            {loading ? (
                                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            )}
                        </motion.button>
                    </div>

                    {/* نکته‌های پایینی */}
                    <p className="text-xs text-center text-gray-400 mt-3">
                        پاسخ‌ها توسط هوش مصنوعی تولید می‌شوند
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
