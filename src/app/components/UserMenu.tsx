"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "./UserMenu.css";

export default function UserMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [role, setRole] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const checkAuth = () => {
        const storedPhone = localStorage.getItem("userPhone");
        const storedAvatar = localStorage.getItem("userAvatar");
        const storedRole = localStorage.getItem("userRole");
        setIsAuthenticated(!!storedPhone);
        setAvatar(storedAvatar || "");
        setRole(storedRole);

        console.log("Current role:", role);
    };

    useEffect(() => {
        checkAuth();

        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };

        const handleStorageChange = () => checkAuth();

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("storage", handleStorageChange);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            checkAuth();
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        const phone = localStorage.getItem("userPhone");
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userAvatar");
        localStorage.removeItem("userRole");
        console.log("User phone:", phone);
        // Не удаляем userData-${phone}, чтобы сохранить профиль

        setIsAuthenticated(false);
        setAvatar("");
        setRole(null);
        router.push("/");

    };

    return (
        <div className="user-menu-wrapper" ref={menuRef}>
            <button
                className="user-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Пользователь"
            >
                {isAuthenticated && avatar ? (
                    <img src={avatar} alt="User Avatar" className="user-avatar" />
                ) : (
                    "👤"
                )}
            </button>

            {menuOpen && (
                <div className="user-dropdown">
                    {isAuthenticated ? (
                        <>
                            <button onClick={() => router.push("/cabinet")}>Личный кабинет</button>
                            <button onClick={handleLogout}>Выйти</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => router.push("/auth")}>Регистрация</button>
                            <button onClick={() => router.push("/auth")}>Вход</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
