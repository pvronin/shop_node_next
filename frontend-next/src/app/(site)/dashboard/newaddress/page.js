"use client"

import { useState } from "react"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;



export default function newAddress() {
    const router = useRouter();
    const [form, setForm] = useState({
        label: '',
        province: '',
        city: '',
        postal_code: '',
        address_line: '',
        is_default: false
    })

    const handleChangeForm = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        console.log(form); // این لاگ قبل از آپدیت state اتفاق می افتد، بهتر است پس از رندر مجدد تست شود
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get('access_token');

        const response = await axios.post(
            `${apiUrl}/api/users/me/addresses`,
            form,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        if (response.data.success) {
            router.push('/dashboard')
        } else {
            alert(response.data.message || 'خطا در ذخیره آدرس')
        }
    }
    return (
        <div>
            <form className="flex flex-col w-80 mx-auto bg-amber-300 p-5 rounded-2xl" onSubmit={handleSubmit}>
                <label >برچسب</label>
                <input onChange={handleChangeForm} name="label" type="text" />

                <label >استان</label>
                <input onChange={handleChangeForm} name="province" type="text" />

                <label >شهر</label>
                <input onChange={handleChangeForm} name="city" type="text" />

                <label >کد پستی</label>
                <input onChange={handleChangeForm} name="postal_code" type="text" />

                <label >ادرس کامل</label>
                <input onChange={handleChangeForm} name="address_line" type="text" />

                <label >ایا ادرس پیشفرض شود؟</label>
                <input onChange={handleChangeForm} name="is_default" type="checkbox" />

                <button type="submit" className="w-full bg-amber-100">
                    ss
                </button>
            </form>
        </div>
    )
}
