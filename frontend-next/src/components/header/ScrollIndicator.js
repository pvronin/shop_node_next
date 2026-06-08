"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ScrollIndicator = ({ selector, ScrollToTop = false, PositionClasses = "fixed bottom-1 left-3", heightwidth = 11 }) => {
    const [hasMore, setHasMore] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // اگر selector برابر "window" بود، از window استفاده کن
        const isWindow = selector === "window";
        const container = isWindow ? window : document.querySelector(selector);

        if (!container) return;

        containerRef.current = container;

        const handleScroll = () => {
            let scrollTop, scrollHeight, clientHeight;

            if (isWindow) {
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                scrollHeight = document.documentElement.scrollHeight;
                clientHeight = window.innerHeight;
            } else {
                scrollTop = container.scrollTop;
                scrollHeight = container.scrollHeight;
                clientHeight = container.clientHeight;
            }

            if (ScrollToTop) {
                const isAtTop = scrollTop <= 200;
                setHasMore(!isAtTop);
            } else {
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
                setHasMore(!isAtBottom);
            }
        };

        // بررسی اولیه
        handleScroll();

        if (isWindow) {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleScroll);
        } else {
            container.addEventListener("scroll", handleScroll);
            const resizeObserver = new ResizeObserver(handleScroll);
            resizeObserver.observe(container);

            return () => {
                container.removeEventListener("scroll", handleScroll);
                resizeObserver.disconnect();
            };
        }

        return () => {
            if (isWindow) {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleScroll);
            }
        };
    }, [selector, ScrollToTop]);

    const scrollToGoal = () => {
        const isWindow = selector === "window";

        if (isWindow) {
            if (ScrollToTop) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
            }
        } else if (containerRef.current) {
            if (ScrollToTop) {
                containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
            }
        }
    };

    if (!hasMore) return null;

    return (
        <div
            className={`${PositionClasses} transform -translate-x-1/2 z-50 cursor-pointer`}
            onClick={scrollToGoal}
        >
            <div className={`w-${heightwidth} h-${heightwidth} animate-bounce bg-emerald-500 text-white rounded-full p-1 shadow-lg hover:bg-emerald-600 transition-colors flex items-center justify-center`}>
                {ScrollToTop ? (
                    <IoIosArrowUp className="font-bold text-3xl" />
                ) : (
                    <IoIosArrowDown className="font-bold text-3xl" />
                )}
            </div>

        </div>
    );
};

export default ScrollIndicator;
