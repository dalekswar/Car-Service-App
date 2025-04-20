"use client";

import { useEffect, useState } from "react";
import "./bookorders.css";

export default function BookOrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("userOrders");
        if (saved) {
            setOrders(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="orders-page">
            <h2>Мои записи</h2>
            {orders.length === 0 ? (
                <p>У вас пока нет записей.</p>
            ) : (
                <div className="orders-list">
                    {orders.map((order) => (
                        <div className="order-card" key={order.id}>
                            <h4>Запись #{order.id}</h4>
                            <p><strong>Дата:</strong> {order.date}</p>
                            <p><strong>Время:</strong> {order.time}</p>
                            <p><strong>Услуги:</strong> {order.services.join(", ")}</p>
                            <p><strong>Статус:</strong> <span className="status">{order.status}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
