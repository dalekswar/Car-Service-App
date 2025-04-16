// src/app/layout.tsx
import "./styles/globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext"; // ✅ добавлено

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider> {/* ✅ обернули всё */}
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Header />
              {children}
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
