"use client";

import { useEffect, useState } from "react";
import "./cabinet.css";

export default function CabinetPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        phone: "",
        carBrand: "",
        vin: "",
        photo: "",
    });
    const [message, setMessage] = useState("");

    // Загружаем данные при первом рендере
    useEffect(() => {
        const phone = localStorage.getItem("userPhone") || "";
        if (!phone) return;

        const savedData = localStorage.getItem(`userData-${phone}`);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setForm((prev) => ({ ...prev, ...parsed }));
                if (parsed.photo) {
                    localStorage.setItem("userAvatar", parsed.photo); // для Header
                }
            } catch (err) {
                console.error("Ошибка чтения userData:", err);
            }
        } else {
            setForm((prev) => ({ ...prev, phone }));
        }
    }, []);

    // Изменение любого текстового поля
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Загрузка фото
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result as string;
            const phone = form.phone;
            const updatedForm = { ...form, photo: base64 };
            setForm(updatedForm);
            if (phone) {
                localStorage.setItem(`userData-${phone}`, JSON.stringify(updatedForm));
                localStorage.setItem("userAvatar", base64);
            }
        };
        reader.readAsDataURL(file);
    };

    // Сохранение данных
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phone = form.phone;
        if (phone) {
            localStorage.setItem(`userData-${phone}`, JSON.stringify(form));
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

                <label>Марка</label>
                <input name="carBrand" value={form.carBrand} onChange={handleChange} />

                <label>VIN номер</label>
                <input name="vin" value={form.vin} onChange={handleChange} />

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
