"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import UserMenu from "./UserMenu";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
    const { cart, removeFromCart, clearCart } = useCart();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [allServices, setAllServices] = useState<{ id: number; title: string; price: number }[]>([]);

    // Закрытие выпадашки при клике вне корзины
    const handleOutsideClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    // Загрузка услуг из API
    useEffect(() => {
        fetch("/api/services")
            .then((res) => res.json())
            .then(setAllServices)
            .catch((err) => console.error("Ошибка загрузки услуг в Header:", err));
    }, []);

    const handleContinue = () => {
        const isAuth = localStorage.getItem("userPhone");
        if (isAuth) {
            router.push("/booking");
        } else {
            localStorage.setItem("redirectAfterLogin", "/booking");
            router.push("/auth");
        }
    };

    const getServiceTitle = (id: number) => {
        return allServices.find((s) => s.id === id)?.title || "Услуга";
    };

    const getServicePrice = (id: number) => {
        return allServices.find((s) => s.id === id)?.price || 0;
    };

    return (
        <header className="header">
            <div className="logo">Autoservice</div>
            <div className="header-right">
                <a href="#" className="help-link">
                    Нужна помощь?
                </a>

                <div className="cart-icon-wrapper" ref={dropdownRef}>
                    <div className="cart-icon-btn" onClick={() => setOpen(!open)}>
                        <ShoppingBag className="cart-icon" />
                        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                    </div>

                    {open && (
                        <div className="cart-dropdown">
                            <h4>Корзина</h4>
                            {cart.length === 0 ? (
                                <p>Пусто</p>
                            ) : (
                                <ul>
                                    {cart.map((id) => (
                                        <li key={id}>
                                            <span>{getServiceTitle(id)}</span>
                                            <span>{getServicePrice(id)} ₽</span>
                                            <button onClick={() => removeFromCart(id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="cart-actions">
                                <button onClick={clearCart} className="clear-btn">
                                    Очистить
                                </button>
                                <button onClick={handleContinue} className="continue-btn">
                                    Продолжить
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <UserMenu />
            </div>
        </header>
    );
}
