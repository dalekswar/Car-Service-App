// src/app/layout.tsx
import "./styles/globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
