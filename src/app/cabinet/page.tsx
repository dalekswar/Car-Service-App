// src/app/cabinet/page.tsx
"use client";

import { useEffect, useState } from "react";
import "./cabinet.css";

export default function CabinetPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        phone: "",
        photo: "",
    });

    const [cars, setCars] = useState<{ carBrand: string; vin: string }[]>([{
        carBrand: "",
        vin: "",
    }]);

    const [message, setMessage] = useState("");

    useEffect(() => {
        const phone = localStorage.getItem("userPhone") || "";
        if (!phone) return;

        const savedData = localStorage.getItem(`userData-${phone}`);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setForm((prev) => ({ ...prev, ...parsed }));
                setCars(parsed.cars || [{ carBrand: "", vin: "" }]);
                if (parsed.photo) {
                    localStorage.setItem("userAvatar", parsed.photo);
                }
            } catch (err) {
                console.error("Ошибка чтения userData:", err);
            }
        } else {
            setForm((prev) => ({ ...prev, phone }));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCarChange = (index: number, key: "carBrand" | "vin", value: string) => {
        const updated = [...cars];
        updated[index][key] = value;
        setCars(updated);
    };

    const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const phone = form.phone;
        const formData = new FormData();
        formData.append("avatar", file);
        formData.append("phone", phone);

        const res = await fetch("/api/avatar", {
            method: "POST",
            body: formData,
        });

        const result = await res.json();

        if (result.avatar) {
            setForm((prev) => ({ ...prev, photo: result.avatar }));
            localStorage.setItem("userAvatar", result.avatar);
            localStorage.setItem(`userData-${phone}`, JSON.stringify({ ...form, photo: result.avatar, cars }));
        }
    };

    const handleAddCar = () => {
        setCars([...cars, { carBrand: "", vin: "" }]);
    };

    const handleRemoveCar = (index: number) => {
        const updated = cars.filter((_, i) => i !== index);
        setCars(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phone = form.phone;
        if (phone) {
            const dataToSave = { ...form, cars };
            localStorage.setItem(`userData-${phone}`, JSON.stringify(dataToSave));
            if (form.photo) {
                localStorage.setItem("userAvatar", form.photo);
            }
            setMessage("Данные сохранены!");
            setTimeout(() => setMessage(""), 3000);
        }
    };

    return (
        <div className="cabinet-container">
            <form className="cabinet-form" onSubmit={handleSubmit}>
                <h2>Личный кабинет</h2>

                {form.photo && (
                    <div className="avatar-preview">
                        <img src={form.photo} alt="Фото пользователя" className="avatar-large" />
                    </div>
                )}

                <label>Имя</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} />

                <label>Фамилия</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} />

                <label>Отчество</label>
                <input name="patronymic" value={form.patronymic} onChange={handleChange} />

                <label>Телефон</label>
                <input name="phone" value={form.phone} disabled />

                <h3>Автомобили</h3>
                {cars.map((car, index) => (
                    <div key={index} className="car-group">
                        <label>Марка</label>
                        <input
                            value={car.carBrand}
                            onChange={(e) => handleCarChange(index, "carBrand", e.target.value)}
                        />
                        <label>VIN номер</label>
                        <input
                            value={car.vin}
                            onChange={(e) => handleCarChange(index, "vin", e.target.value)}
                        />
                        {cars.length > 1 && (
                            <button type="button" className="remove-car-btn" onClick={() => handleRemoveCar(index)}>
                                Удалить автомобиль
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" className="add-car-btn" onClick={handleAddCar}>
                    + Добавить автомобиль
                </button>

                <label>Фото</label>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />

                <div className="button-wrapper">
                    <button className="save-button" type="submit">Сохранить</button>
                    {message && <p className="saved-message">{message}</p>}
                </div>
            </form>
        </div>
    );
}
