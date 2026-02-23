"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // تابع کمکی برای گرفتن اطلاعات کاربر با توکن
    const fetchUser = async (token) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/users/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!res.ok) throw new Error("Failed to fetch user");

            const data = await res.json();
            setUser(data.user);
            return data;
        } catch (err) {
            console.error("Fetch user error:", err);
            return null;
        }
    };

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = Cookies.get("access_token");
            if (!accessToken) {
                setLoading(false);
                return;
            }

            let userData = await fetchUser(accessToken);

            // اگر access token نامعتبر بود و refresh داری → امتحان refresh
            // if (!userData) {
            //     const refreshToken = Cookies.get("refresh_token");
            //     if (refreshToken) {
            //         try {
            //             const res = await fetch("http://127.0.0.1:8000/api/auth/refresh", {
            //                 method: "POST",
            //                 headers: { "Content-Type": "application/json" },
            //                 body: JSON.stringify({ refresh: refreshToken }),
            //             });

            //             if (res.ok) {
            //                 const { access } = await res.json();
            //                 Cookies.set("access_token", access, { expires: 1, secure: true, sameSite: "lax" });
            //                 userData = await fetchUser(access);
            //             }
            //         } catch (refreshErr) {
            //             console.error("Refresh failed:", refreshErr);
            //         }
            //     }
            // }

            if (!userData) {
                Cookies.remove("access_token");
                // Cookies.remove("refresh_token");
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "خطا در ورود");
            }

            const { token: access } = await res.json();

            Cookies.set("access_token", access, { expires: 1, secure: true, sameSite: "lax" });


            // مهم: بعد از لاگین موفق، اطلاعات کاربر رو از /me بگیر
            const userData = await fetchUser(access);
            if (userData) setUser(userData);

            return { success: true };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    const logout = () => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth باید داخل AuthProvider استفاده شود");
    return context;
};
