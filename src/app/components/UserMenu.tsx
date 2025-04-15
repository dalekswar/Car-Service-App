"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "./UserMenu.css";

export default function UserMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [avatar, setAvatar] = useState("");
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Функция для проверки авторизации
    const checkAuth = () => {
        const storedPhone = localStorage.getItem("userPhone");
        const storedAvatar = localStorage.getItem("userAvatar");
        setIsAuthenticated(!!storedPhone);
        setAvatar(storedAvatar || "");
    };

    useEffect(() => {
        checkAuth();

        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Обновление авторизации при изменении localStorage (аватар, телефон)
    useEffect(() => {
        const updateFromStorage = () => checkAuth();
        window.addEventListener("storage", updateFromStorage);

        const interval = setInterval(() => {
            checkAuth();
        }, 300); // периодически проверяем localStorage

        return () => {
            window.removeEventListener("storage", updateFromStorage);
            clearInterval(interval);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userPhone");
        localStorage.removeItem("userAvatar");
        setIsAuthenticated(false);
        setAvatar("");
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
