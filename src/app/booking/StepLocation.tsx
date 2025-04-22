// src/app/booking/StepLocation.tsx
"use client";

import React from "react";

type Props = {
    location: string;
    setLocation: (value: string) => void;
    onNext: () => void;
};

export default function StepLocation({ location, setLocation, onNext }: Props) {
    const handleNext = () => {
        if (location) {
            localStorage.setItem("bookingLocation", location);
            onNext();
        }
    };

    return (
        <div className="step step-location">
            <h2>Выберите локацию</h2>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">Выберите...</option>
                <option value="autoservice">Автосервис</option>
            </select>
            <button onClick={handleNext}>Продолжить</button>
        </div>
    );
}
