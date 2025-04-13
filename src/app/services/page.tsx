export default function ServicesPage() {
    return (
        <div className="services-page">
            <h1 className="services-title">Услуги автосервиса</h1>

            {/* Фильтры */}
            <div className="services-filters">
                <select>
                    <option>Все категории</option>
                    <option>Диагностика</option>
                    <option>Ремонт двигателя</option>
                    <option>Электрика</option>
                </select>
                <select>
                    <option>Формат</option>
                    <option>Онлайн</option>
                    <option>В сервисе</option>
                </select>
                <select>
                    <option>Марка авто</option>
                    <option>BMW</option>
                    <option>Mercedes</option>
                    <option>Hyundai</option>
                </select>
                <select>
                    <option>Сортировать</option>
                    <option>По цене</option>
                    <option>По популярности</option>
                </select>
            </div>

            {/* Карточки услуг */}
            <div className="services-grid">
                <div className="service-card">
                    <h3>Замена масла</h3>
                    <p>Своевременная замена масла в двигателе для долговечной работы авто.</p>
                    <span className="price">от 1500 ₽</span>
                    <button className="add-to-cart">Добавить в корзину</button>
                </div>

                <div className="service-card">
                    <h3>Компьютерная диагностика</h3>
                    <p>Полная проверка систем автомобиля с использованием современного оборудования.</p>
                    <span className="price">от 1000 ₽</span>
                    <button className="add-to-cart">Добавить в корзину</button>
                </div>

                {/* Добавь больше карточек при необходимости */}
            </div>
        </div>
    );
}
