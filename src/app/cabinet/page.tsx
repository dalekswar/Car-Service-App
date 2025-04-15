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
        photo: ""
    });

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("userData");
        if (saved) setForm(JSON.parse(saved));
        const savedPhone = localStorage.getItem("userPhone");
        if (savedPhone) setForm((f) => ({ ...f, phone: savedPhone }));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setForm((prev) => ({ ...prev, photo: reader.result as string }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem("userData", JSON.stringify(form));
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
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
                <input name="phone" value={form.phone} onChange={handleChange} disabled />

                <h3>Автомобили</h3>

                <label>Марка</label>
                <input name="carBrand" value={form.carBrand} onChange={handleChange} />

                <label>VIN номер</label>
                <input name="vin" value={form.vin} onChange={handleChange} />

                <label>Фото</label>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />

                <div className="button-wrapper">
                    <button className="save-button" type="submit">Сохранить</button>
                    {showMessage && <p className="success-message">Данные сохранены!</p>}
                </div>
            </form>
        </div>
    );
}
