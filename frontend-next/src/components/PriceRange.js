"use client";
import React from 'react';
import * as Slider from '@radix-ui/react-slider';

const PriceRange = ({ min, max, value, onChange }) => {
    return (
        <div className="p-2">
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={value}
                onValueChange={onChange}
                max={max}
                min={min}
                step={10}
            >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-[4px]">
                    <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>

                {/* دستگیره حداکثر */}
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 shadow-md rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer" />

                {/* دستگیره حداقل */}
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 shadow-md rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer" />

            </Slider.Root>

            <div className="flex justify-between mt-4 text-[11px] text-gray-500 font-medium">
                <div className="flex flex-col text-left">
                    <span>تا (تومان)</span>
                    <span className="text-gray-900 text-xs">{value[1].toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                    <span>از (تومان)</span>
                    <span className="text-gray-900 text-xs">{value[0].toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
