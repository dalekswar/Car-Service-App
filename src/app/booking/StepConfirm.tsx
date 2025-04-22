"use client";

import React, { useEffect, useState } from "react";
import { getRandomMechanic } from "@/app/lib/fetchHelpers";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import "./StepConfirm.css";
import type { ServiceItem } from "@/app/types";


// interface ServiceItem {
//     id: number;
//     title: string;
//     price: number;
// }

type Props = {
    location: string;
    date: string;
    time: string;
    services: ServiceItem[];
    setServices: (value: ServiceItem[]) => void;
    selectedCar: string;
    setSelectedCar: (value: string) => void;
    mechanic: any;
    setMechanic: (value: any) => void;
    onBack: () => void;
};

export default function StepConfirm({
    location,
    date,
    time,
    services,
    setServices,
    selectedCar,
    setSelectedCar,
    mechanic,
    setMechanic,
    onBack,
}: Props) {
    const router = useRouter();
    const { clearCart } = useCart();
    const [userCars, setUserCars] = useState<{ vin: string; carBrand: string }[]>([]);
    const [allServices, setAllServices] = useState<ServiceItem[]>([]);
    const [selectedServiceId, setSelectedServiceId] = useState<number | "">("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const phone = localStorage.getItem("userPhone") || "";
        const savedData = localStorage.getItem(`userData-${phone}`);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setUserCars(parsed.cars || []);
            } catch (err) {
                console.error("Ошибка загрузки автомобилей:", err);
            }
        }

        fetch("/api/services")
            .then((res) => res.json())
            .then(setAllServices)
            .catch((err) => console.error("Ошибка загрузки услуг:", err));

        if (!mechanic) {
            getRandomMechanic().then(setMechanic);
        }
    }, []);

    const handleAddService = () => {
        if (!selectedServiceId) return;
        const newService = allServices.find((s) => s.id === selectedServiceId);
        if (newService && !services.find((s) => s.id === newService.id)) {
            setServices([...services, newService]);
        }
        setSelectedServiceId("");
    };

    const handleRemoveService = (id: number) => {
        setServices(services.filter((s) => s.id !== id));
    };

    const handleSubmit = () => {
        const orders = JSON.parse(localStorage.getItem("userOrders") || "[]");
        const newOrder = {
            id: Date.now(),
            date,
            time,
            services: services.map((s) => s.title),
            status: "Ожидает подтверждения",
        };
        localStorage.setItem("userOrders", JSON.stringify([newOrder, ...orders]));

        clearCart();
        localStorage.removeItem("cart");

        setSuccess(true);
    };

    return (
        <div className="step step-confirm">
            <h2>Подтверждение записи</h2>

            {!success ? (
                <>
                    <p><strong>Локация:</strong> {location}</p>
                    <p><strong>Дата:</strong> {date}</p>
                    <p><strong>Время:</strong> {time}</p>

                    <h3>Выбранные услуги:</h3>
                    <ul>
                        {services.map((s) => (
                            <li key={s.id}>
                                {s.title} — {s.price}₽
                                <button onClick={() => handleRemoveService(s.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>

                    <label>Добавить услугу:</label>
                    <select
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(Number(e.target.value))}
                    >
                        <option value="">Выберите услугу</option>
                        {allServices
                            .filter((s) => !services.some((sel) => sel.id === s.id))
                            .map((s) => (
                                <option key={s.id} value={s.id}>
                                    {s.title} — {s.price}₽
                                </option>
                            ))}
                    </select>
                    <button onClick={handleAddService} disabled={!selectedServiceId}>
                        Добавить
                    </button>

                    <label>Автомобиль:</label>
                    <select
                        value={selectedCar}
                        onChange={(e) => setSelectedCar(e.target.value)}
                    >
                        <option value="">Выберите автомобиль</option>
                        {userCars.map((car, idx) => (
                            <option key={idx} value={car.vin}>
                                {car.carBrand} ({car.vin})
                            </option>
                        ))}
                    </select>

                    <label>Механик:</label>
                    <input placeholder="Механик" value={mechanic || ""} disabled />

                    <div className="buttons">
                        <button onClick={onBack}>Назад</button>
                        <button onClick={handleSubmit}>Подтвердить</button>
                    </div>
                </>
            ) : (
                <div className="success-block">
                    <h3>🎉 Запись успешно оформлена!</h3>
                    <p>Вы можете просмотреть все записи на странице "Мои записи".</p>
                    <button className="view-orders-btn" onClick={() => router.push("/bookorders")}>
                        Перейти в Мои записи
                    </button>
                </div>
            )}
        </div>
    );
}
