import React from "react";
import "./Header.css";
import UserMenu from "./UserMenu";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Autoservice</div>
            <div className="header-right">
                <a href="#" className="help-link">Нужна помощь?</a>
                <UserMenu />
            </div>
        </header>
    );
}
