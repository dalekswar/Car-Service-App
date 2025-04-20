// src/app/booking/StepDateTime.tsx
"use client";

import { useState } from "react";
import "./StepDateTime.css";

const times = {
    утро: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"],
    день: ["12:00", "12:30", "13:00"],
    вечер: ["18:00"],
};

export default function StepDateTime({ date, time, setDate, setTime, onNext }: {
    date: string;
    time: string;
    setDate: (val: string) => void;
    setTime: (val: string) => void;
    onNext: () => void;
}) {
    const [selectedDate, setSelectedDate] = useState<string>(date || new Date().toISOString().slice(0, 10));
    const [selectedTime, setSelectedTime] = useState<string>(time);

    const handleTimeClick = (val: string) => {
        setSelectedTime(val);
        setTime(val);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSelectedDate(val);
        setDate(val);
    };

    return (
        <div className="step-datetime">
            <h2>Выберите дату и время</h2>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="calendar-input"
            />

            <div className="time-block">
                <strong>Утро</strong>
                <div className="time-options">
                    {times.утро.map((t) => (
                        <button
                            key={t}
                            className={selectedTime === t ? "selected" : ""}
                            onClick={() => handleTimeClick(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <strong>День</strong>
                <div className="time-options">
                    {times.день.map((t) => (
                        <button
                            key={t}
                            className={selectedTime === t ? "selected" : ""}
                            onClick={() => handleTimeClick(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                <strong>Вечер</strong>
                <div className="time-options">
                    {times.вечер.map((t) => (
                        <button
                            key={t}
                            className={selectedTime === t ? "selected" : ""}
                            onClick={() => handleTimeClick(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="confirm-button"
                disabled={!selectedDate || !selectedTime}
                onClick={onNext}
            >
                Подтвердить
            </button>
        </div>
    );
}
