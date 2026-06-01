
'use client'

import { useEffect } from 'react';

export default function Alert({ message }) {
    useEffect(() => {
        alert(message);
    }, [message]); // اگر پیام تغییر کند، دوباره اجرا می‌شود

    // این کامپوننت هیچ المان UI خاصی رندر نمی‌کند
    return null;
}
