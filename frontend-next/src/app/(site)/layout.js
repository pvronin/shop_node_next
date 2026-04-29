// app/(site)/layout.tsx
import Header from "@/components/header/Header";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => (
        <div className="h-48 bg-gray-100 animate-pulse mt-auto" />
    ),
});

export default function SiteLayout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
