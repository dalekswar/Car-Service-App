"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Info, Settings, Calendar, Wrench, Star } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const menuItems = [
        { label: "Главная", icon: <Home />, href: "/" },
        { label: "Услуги", icon: <Wrench />, href: "/services" },
        { label: "Онлайн-запись", icon: <Calendar />, href: "/booking" },
        { label: "Отзывы", icon: <Star />, href: "/reviews" },
        { label: "О нас", icon: <Info />, href: "/about" },
    ];


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
