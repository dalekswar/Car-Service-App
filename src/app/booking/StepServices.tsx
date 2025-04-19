"use client";

import { useEffect, useState } from "react";
import "./StepServices.css";

type Service = {
    id: number;
    title: string;
    price: number;
};

export default function StepServices({
    services,
    setServices,
    onNext,
}: {
    services: Service[];
    setServices: (val: Service[]) => void;
    onNext: () => void;
}) {
    const [availableServices, setAvailableServices] = useState<Service[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            const res = await fetch("/api/services");
            const data: Service[] = await res.json();
            const filtered = data.filter(
                (s) => !services.some((added) => added.id === s.id)
            );
            setAvailableServices(filtered);
        };

        fetchServices();
    }, [services]);

    const handleAdd = () => {
        if (!selectedId) return;
        const serviceToAdd = availableServices.find((s) => s.id === selectedId);
        if (!serviceToAdd) return;

        setServices([...services, serviceToAdd]);
        setSelectedId(null);
    };

    const handleRemove = (id: number) => {
        setServices(services.filter((s) => s.id !== id));
    };

    return (
        <div className="step-services">
            <h2>Выберите услуги</h2>

            <select
                value={selectedId ?? ""}
                onChange={(e) => setSelectedId(Number(e.target.value))}
            >
                <option value="">-- Выбрать услугу --</option>
                {availableServices.map((s) => (
                    <option key={s.id} value={s.id}>
                        {s.title} — {s.price}₽
                    </option>
                ))}
            </select>

            <button
                className="add-btn"
                onClick={handleAdd}
                disabled={!selectedId}
            >
                Добавить услугу
            </button>

            <ul className="selected-services">
                {services.map((s) => (
                    <li key={s.id}>
                        {s.title} — {s.price}₽
                        <button className="remove-btn" onClick={() => handleRemove(s.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>

            <button className="next-btn" onClick={onNext} disabled={services.length === 0}>
                Продолжить
            </button>
        </div>
    );
}
