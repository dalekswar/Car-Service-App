"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "./auth.css";

export default function AuthPage() {
    const [step, setStep] = useState<"phone" | "code">("phone");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState<string[]>(Array(6).fill(""));
    const [role, setRole] = useState("user");
    const [error, setError] = useState("");
    const router = useRouter();

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneDigitsOnly = phone.replace(/\D/g, "");
        if (!/^(\+7|7|8)\d{10}$/.test(phoneDigitsOnly)) {
            setError("Введите корректный номер телефона (начиная с 7, 8 или +7 и 11 цифр всего)");
            return;
        }
        setError("");
        setStep("code"); // Переходим ко второму шагу
    };

    const handleCodeChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 1);
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
        if (!value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleCodeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (code.some((digit) => digit === "")) {
            setError("Введите все 6 цифр кода");
            return;
        }

        // Сохраняем данные только после подтверждения
        localStorage.setItem("userPhone", phone);
        localStorage.setItem("userRole", role);

        setError("");

        // Если есть сохранённая корзина — отправляем на booking
        const savedCart = localStorage.getItem("cart");
        if (savedCart && JSON.parse(savedCart).length > 0) {
            router.push("/booking");
        } else {
            router.push("/cabinet");
        }
    };


    return (
        <div className="auth-container">
            {step === "phone" ? (
                <form onSubmit={handlePhoneSubmit} className="auth-form">
                    <h2>Войти или зарегистрироваться</h2>
                    <input
                        type="tel"
                        placeholder="Введите номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <label>Выберите роль:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Пользователь</option>
                        <option value="manager">Менеджер</option>
                        <option value="mechanic">Механик</option>
                    </select>

                    {error && <p className="error">{error}</p>}
                    <div className="button-wrapper">
                        <button type="submit">Продолжить</button>
                    </div>

                    <div className="divider">или войти с помощью</div>
                    <div className="socials">
                        <img src="/icons/vk.svg" alt="VK" className="social-icon" />
                        <img src="/icons/google.svg" alt="Google" className="social-icon" />
                        <img src="/icons/gosuslugi.svg" alt="Госуслуги" className="social-icon" />
                    </div>
                </form>
            ) : (
                <form onSubmit={handleCodeSubmit} className="auth-form">
                    <h2>Введите код сообщения</h2>
                    <div className="code-inputs">
                        {code.map((value, index) => (
                            <input
                                key={index}
                                value={value}
                                maxLength={1}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                                onChange={(e) => handleCodeChange(e, index)}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Backspace" &&
                                        !e.currentTarget.value &&
                                        index > 0
                                    ) {
                                        inputRefs.current[index - 1]?.focus();
                                    }
                                }}
                            />
                        ))}
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Войти</button>
                    <div className="divider">или войти с помощью</div>
                    <div className="socials">
                        <img src="/icons/vk.svg" alt="VK" className="social-icon" />
                        <img src="/icons/google.svg" alt="Google" className="social-icon" />
                        <img src="/icons/gosuslugi.svg" alt="Госуслуги" className="social-icon" />
                    </div>
                </form>
            )}
        </div>
    );
}
