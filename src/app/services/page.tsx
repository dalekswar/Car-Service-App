"use client";

import { useState, useMemo, useEffect } from "react";
import "./services.css";
import { useCart } from "@/context/CartContext";
import { Grid, List, ShoppingBag } from "lucide-react";

const categories = ["Двигатель", "Ходовая часть", "Кузов", "Электрика", "Детейлинг", "ТО", "Другое"];
const formats = ["Срочный ремонт", "Плановое ТО", "Диагностика", "Другое"];
const brands = ["BMW", "Mercedes", "Bentley", "Другое"];
const ITEMS_PER_PAGE = 9;

export default function ServicesPage() {
    const [servicesData, setServicesData] = useState<any[]>([]);
    const [selectedCategory, setCategory] = useState("");
    const [selectedFormat, setFormat] = useState("");
    const [selectedBrand, setBrand] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("price");
    const [view, setView] = useState<"grid" | "list">("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchServices = async () => {
            const res = await fetch("/api/services");
            const data = await res.json();
            setServicesData(data);
        };
        fetchServices();
    }, []);

    const filtered = useMemo(() => {
        let result = servicesData;
        if (search) result = result.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
        if (selectedCategory) result = result.filter(s => s.category === selectedCategory);
        if (selectedFormat) result = result.filter(s => s.format === selectedFormat);
        if (selectedBrand) result = result.filter(s => s.brands?.split(",").includes(selectedBrand));
        return [...result].sort((a, b) => a[sort as "price"] - b[sort as "price"]);
    }, [search, selectedCategory, selectedFormat, selectedBrand, sort, servicesData]);

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
                        <button onClick={() => setView("grid")} className={view === "grid" ? "active" : ""} aria-label="Вид сеткой">
                            <Grid />
                        </button>
                        <button onClick={() => setView("list")} className={view === "list" ? "active" : ""} aria-label="Вид списком">
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
