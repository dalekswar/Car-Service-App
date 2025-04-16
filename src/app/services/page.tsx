"use client";

import { useState, useMemo } from "react";
import "./services.css";
import { useCart } from "@/context/CartContext";
import { Grid, List, ShoppingBag } from "lucide-react";


const servicesData = [
    { id: 1, title: "Диагностика двигателя", description: "Полная проверка и сканирование двигателя", price: 1200, image: "/images/engine.png", category: "Двигатель", format: "Диагностика", brands: ["BMW", "Mercedes", "Bentley", "Другое"] },
    { id: 2, title: "Замена масла", description: "Замена масла и фильтра", price: 900, image: "/images/oil.png", category: "Двигатель", format: "Плановое ТО", brands: ["BMW", "Mercedes", "Bentley", "Другое"] },
    { id: 3, title: "Ремонт ходовой", description: "Диагностика и ремонт подвески", price: 2500, image: "/images/suspension.png", category: "Ходовая часть", format: "Срочный ремонт", brands: ["BMW", "Mercedes"] },
    { id: 4, title: "Диагностика электрики", description: "Проверка электрооборудования", price: 1500, image: "/images/electrics.png", category: "Электрика", format: "Диагностика", brands: ["Bentley"] },
    { id: 5, title: "Плановое ТО", description: "Плановое техническое обслуживание", price: 3000, image: "/images/to.png", category: "ТО", format: "Плановое ТО", brands: ["Bentley", "Другое"] },
    { id: 6, title: "Замена тормозов", description: "Замена тормозных колодок и дисков", price: 1800, image: "/images/brakes.png", category: "Ходовая часть", format: "Срочный ремонт", brands: ["Mercedes"] },
    { id: 7, title: "Диагностика подвески", description: "Проверка подвески", price: 1100, image: "/images/diagnostics.png", category: "Ходовая часть", format: "Диагностика", brands: ["BMW", "Bentley"] },
    { id: 8, title: "Установка сигнализации", description: "Установка охранной системы", price: 4500, image: "/images/alarm.png", category: "Электрика", format: "Другое", brands: ["Bentley", "Другое"] },
    { id: 9, title: "Покраска кузова", description: "Покраска авто", price: 6000, image: "/images/paint.png", category: "Кузов", format: "Другое", brands: ["Другое"] },
    { id: 10, title: "Мойка двигателя", description: "Профессиональная мойка", price: 700, image: "/images/clean.png", category: "Двигатель", format: "Другое", brands: ["BMW", "Другое"] },
    { id: 11, title: "Шиномонтаж", description: "Сезонная замена шин", price: 1300, image: "/images/tires.png", category: "Детейлинг", format: "Другое", brands: ["Mercedes", "BMW"] },
    { id: 12, title: "Полировка фар", description: "Восстановление прозрачности", price: 800, image: "/images/lights.png", category: "Детейлинг", format: "Другое", brands: ["Другое"] },
];


const categories = ["Двигатель", "Ходовая часть", "Кузов", "Электрика", "Детейлинг", "ТО", "Другое"];
const formats = ["Срочный ремонт", "Плановое ТО", "Диагностика", "Другое"];
const brands = ["BMW", "Mercedes", "Bentley", "Другое"];

const ITEMS_PER_PAGE = 9;



export default function ServicesPage() {
    const [selectedCategory, setCategory] = useState("");
    const [selectedFormat, setFormat] = useState("");
    const [selectedBrand, setBrand] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("price");
    const [view, setView] = useState<"grid" | "list">("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart } = useCart();

    const filtered = useMemo(() => {
        let result = servicesData;
        if (search) result = result.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
        if (selectedCategory) result = result.filter(s => s.category === selectedCategory);
        if (selectedFormat) result = result.filter(s => s.format === selectedFormat);
        if (selectedBrand) result = result.filter(s => s.brands.includes(selectedBrand)); // ✅

        return [...result].sort((a, b) => a[sort as "price"] - b[sort as "price"]);
    }, [search, selectedCategory, selectedFormat, selectedBrand, sort]);

    const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const currentItems = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="services-page">
            <aside className="filters">
                <h3>Категории</h3>
                <ul>{categories.map(c => (
                    <li key={c}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedCategory === c}
                                onChange={() => setCategory(selectedCategory === c ? "" : c)}
                            /> {c}
                        </label>
                    </li>
                ))}</ul>

                <h3>Формат</h3>
                <ul>{formats.map(f => (
                    <li key={f}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedFormat === f}
                                onChange={() => setFormat(selectedFormat === f ? "" : f)}
                            /> {f}
                        </label>
                    </li>
                ))}</ul>

                <h3>Автомобиль</h3>
                <ul>{brands.map(b => (
                    <li key={b}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBrand === b}
                                onChange={() => setBrand(selectedBrand === b ? "" : b)}
                            /> {b}
                        </label>
                    </li>
                ))}</ul>

                <button onClick={() => {
                    setCategory("");
                    setFormat("");
                    setBrand("");
                    setSearch("");
                    setCurrentPage(1);
                }}>Очистить фильтры</button>
            </aside>

            <div className="content">
                <div className="tools">
                    <input placeholder="Поиск" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="price">Сначала дешевле</option>
                        <option value="title">По названию</option>
                    </select>
                    <div className="view-switch">
                        <button
                            onClick={() => setView("grid")}
                            className={view === "grid" ? "active" : ""}
                            aria-label="Вид сеткой"
                        >
                            <Grid />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={view === "list" ? "active" : ""}
                            aria-label="Вид списком"
                        >
                            <List />
                        </button>
                    </div>

                </div>

                <div className={`cards ${view}`}>
                    {currentItems.map((s) => (
                        <div className="card" key={s.id}>
                            <img src={s.image} alt={s.title} />
                            <div className="info">
                                <h4>{s.title}</h4>
                                <p>{s.description}</p>
                                <b>{s.price} ₽</b>
                            </div>
                            <button className="add-to-cart" onClick={() => addToCart(s.id)}>
                                <ShoppingBag size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                {pageCount > 1 && (
                    <div className="pagination">
                        {Array.from({ length: pageCount }, (_, i) => (
                            <button
                                key={i + 1}
                                className={currentPage === i + 1 ? "active" : ""}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
