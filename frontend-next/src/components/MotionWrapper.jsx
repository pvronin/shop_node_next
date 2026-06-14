"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MotionWrapper({ children, direction = "up", delay = 0, duration = 0.6 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionMap = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
    };

    const initial = directionMap[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.5, ...initial }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0.3, ...initial }}
            transition={{ duration, delay, ease: "easeOut" }}
            style={{ opacity: 1 }}
        >
            {children}
        </motion.div>
    );
}
