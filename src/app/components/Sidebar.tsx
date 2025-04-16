"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Home,
    Info,
    Settings,
    Calendar,
    Wrench,
    Star,
    ClipboardList,
    Users,
    FileText,
    ShoppingCart,
    User,
    Warehouse,
    BookOpen,
} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    const toggleSidebar = () => setCollapsed(!collapsed);

    // 📦 Меню по ролям
    const baseMenu = [
        { label: "Главная", icon: <Home />, href: "/" },
        { label: "Услуги", icon: <Wrench />, href: "/services" },
        { label: "Онлайн-запись", icon: <Calendar />, href: "/booking" },
        { label: "Отзывы", icon: <Star />, href: "/reviews" },
        { label: "О нас", icon: <Info />, href: "/about" },
    ];

    const userMenu = [
        { label: "Личный кабинет", icon: <User />, href: "/cabinet" },
        { label: "Мои записи", icon: <BookOpen />, href: "/my-bookings" },
        { label: "Настройки", icon: <Settings />, href: "/settings" },
    ];

    const managerMenu = [
        { label: "Календарь", icon: <Calendar />, href: "/manager/calendar" },
        { label: "Заказы", icon: <ClipboardList />, href: "/manager/orders" },
        { label: "Сотрудники", icon: <Users />, href: "/manager/staff" },
        { label: "Отчёты", icon: <FileText />, href: "/manager/reports" },
        { label: "Заказ деталей", icon: <ShoppingCart />, href: "/manager/parts" },
        { label: "Клиенты", icon: <User />, href: "/manager/clients" },
        { label: "Склад", icon: <Warehouse />, href: "/manager/storage" },
        { label: "Настройки", icon: <Settings />, href: "/settings" },
    ];

    const mechanicMenu = [
        { label: "Календарь", icon: <Calendar />, href: "/mechanic/calendar" },
        { label: "Ремонты", icon: <ClipboardList />, href: "/mechanic/repairs" },
        { label: "Настройки", icon: <Settings />, href: "/settings" },
    ];

    // 🎯 Получаем роль
    useEffect(() => {
        const updateRole = () => {
            const storedRole = localStorage.getItem("userRole");
            setRole(storedRole);
        };

        updateRole();

        window.addEventListener("storage", updateRole);
        window.addEventListener("roleChange", updateRole);

        const interval = setInterval(() => {
            const storedRole = localStorage.getItem("userRole");
            if (storedRole !== role) {
                setRole(storedRole);
            }
        }, 500);

        return () => {
            window.removeEventListener("storage", updateRole);
            window.removeEventListener("roleChange", updateRole);
            clearInterval(interval);
        };
    }, [role]);

    // 🧩 Формируем итоговое меню
    let menuItems = [...baseMenu];

    if (role === "user") {
        menuItems = [...baseMenu, ...userMenu];
    } else if (role === "manager") {
        menuItems = [...baseMenu, ...managerMenu];
    } else if (role === "mechanic") {
        menuItems = [...baseMenu, ...mechanicMenu];
    }

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {collapsed ? "→" : "←"}
            </button>
            <nav>
                <ul>
                    {menuItems.map(({ label, icon, href }) => (
                        <li key={label}>
                            <Link href={href}>
                                <span className="icon">{icon}</span>
                                {!collapsed && <span className="label">{label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
