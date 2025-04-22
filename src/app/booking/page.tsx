// src/app/booking/page.tsx
"use client";

import { useState, useEffect } from "react";
import StepLocation from "./StepLocation";
import StepDateTime from "./StepDateTime";
import StepServices from "./StepServices";
import StepConfirm from "./StepConfirm";
import "./styles.css";

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [services, setServices] = useState<any[]>([]);
    const [selectedCar, setSelectedCar] = useState("");
    const [mechanic, setMechanic] = useState<any>(null);

    useEffect(() => {
        const fetchCart = async () => {
            const stored = localStorage.getItem("cart");
            if (!stored) return;

            const ids = JSON.parse(stored); // [1, 2, 3]
            const res = await fetch("/api/services");
            const all = await res.json();
            const selected = all.filter((s: any) => ids.includes(s.id));
            setServices(selected);
        };

        fetchCart();
    }, []);


    return (
        <div className="booking-layout">
            <main className="booking-main">
                {step === 1 && (
                    <StepLocation
                        location={location}
                        setLocation={setLocation}
                        onNext={() => setStep(2)}
                    />
                )}
                {step === 2 && (
                    <StepDateTime
                        date={date}
                        time={time}
                        setDate={setDate}
                        setTime={setTime}
                        onNext={() => setStep(services.length > 0 ? 4 : 3)}
                    />
                )}
                {step === 3 && (
                    <StepServices
                        services={services}
                        setServices={setServices}
                        onNext={() => setStep(4)}
                    />
                )}
                {step === 4 && (
                    <StepConfirm
                        location={location}
                        date={date}
                        time={time}
                        services={services}
                        setServices={setServices}
                        selectedCar={selectedCar}
                        setSelectedCar={setSelectedCar}
                        mechanic={mechanic}
                        setMechanic={setMechanic}
                        onBack={() => setStep(3)}
                    />

                )}
            </main>
        </div>
    );
}
