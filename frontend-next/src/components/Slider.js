"use client";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from './ProductCard';

export default function ProductSlider({ items }) {
    return (
        <Swiper

            className='!p-3 md:!px-6 !pb-14 [&_.swiper-button-next]:!w-2 [&_.swiper-button-prev]:!w-2'
            modules={[Navigation, Pagination, Autoplay]}

            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}

            slidesPerView={1}
            spaceBetween={"25"}
            loop={true}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false, // یا true اگر می‌خوای بعد از تعامل متوقف بشه
                pauseOnMouseEnter: true,     // پیشنهاد: وقتی موس روشه pause کنه
            }}

            speed={1200}                // خوبه، انیمیشن نرم

            grabCursor={true}           // پیشنهاد: cursor دست موقع درگ

            breakpoints={{
                420: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
