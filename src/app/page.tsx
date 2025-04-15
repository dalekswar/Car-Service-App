import "./styles/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="content">
      {/* Hero */}
      <section className="hero">
        <h1>
          Личный кабинет <br />
          для <span>вашего</span> автомобиля
        </h1>
        <p>
          Откройте ключевые элементы безупречного автосервиса: премиальный
          сервис и удобство в один клик.
        </p>
        <Link href="/auth" className="create-account-btn">
          Создать личный кабинет
        </Link>
      </section>

      {/* Features */}
      <section className="features">
        <h2>
          Наши <span>преимущества</span>
        </h2>
        <div className="feature-grid">
          <Feature icon="/icons/booking.svg" title="Запись в один клик" />
          <Feature icon="/icons/notification.svg" title="Онлайн уведомление" />
          <Feature icon="/icons/history.svg" title="История всех работ" />
          <Feature icon="/icons/transparency.svg" title="Прозрачность" />
          <Feature icon="/icons/control.svg" title="Контроль" />
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="feature">
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}
