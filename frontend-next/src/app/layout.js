// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ScrollIndicator from "@/components/header/ScrollIndicator";
import { Toaster } from "sonner";

// main colors: blue-600, emerald-600 in tailwind
const vazir = localFont({
    src: [
        { path: "../fonts/Vazir-Thin-FD-WOL.woff2", weight: "300" },
        { path: "../fonts/Vazir-Medium-FD-WOL.woff2", weight: "500" },
        { path: "../fonts/Vazir-Bold-FD-WOL.woff2", weight: "700" },
    ],
    variable: "--font-vazir",
});

export const metadata = {
    title: "فروشگاه نکست | مدرن و سریع",
    description: "خرید آنلاین محصولات با بهترین تجربه کاربری",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className={vazir.variable}>
            <body className="antialiased font-sans">
                <Toaster richColors position="top-center" theme="dark" toastOptions={{ style: { fontFamily: "var(--font-vazir)", }, }} />
                <AuthProvider>{children}</AuthProvider>
                <ScrollIndicator selector="window" ScrollToTop={true} PositionClasses="fixed bottom-6 right-10" />
            </body>
        </html>
    );
}
