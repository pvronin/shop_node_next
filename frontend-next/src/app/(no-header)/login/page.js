"use client";

import { Suspense } from "react";
import LoginPageContent from "./LoginPageContent";

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 mx-auto mb-4 border-4 border-emerald-600 border-t-transparent rounded-full"></div>
          <p>در حال بارگذاری...</p>
        </div>
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  );
}
