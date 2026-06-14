'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';


export default function Toustcomponent() {
    useEffect(() => {
        toast.warning('به علت تستی بودن سایت ممکن است بعضی مشکلات باشد که مربوط به این است که روی سرور واقعی نیست یا تصاویر کالا ها وابسته ای پی ای های خارجی هستند و نیاز به ویپی ان ممکن است داشته باشن. همچنین به علت در نظر گرفتن نیاز های سئو در نکست خیلی دستم بسته بود و سعی کردم سئو شدن و سرور ساید موندن اکثر صفحاتو کامپوننت هارو رعایت کنم.', {
            duration: 12000,
            position: 'top-center',
        });
    }, []);

    return null;
}
