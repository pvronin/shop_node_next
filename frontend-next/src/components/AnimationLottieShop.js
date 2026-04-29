// components/LoadingAnimation.tsx
"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/lottie/Shopping.json";

export default function AnimationLottieShop() {
  return (
    <div className="w-full mx-auto">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}

      />
    </div>
  );
}
