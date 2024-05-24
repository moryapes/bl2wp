import "./style.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo_wt from "./../../images/logo_without_text.svg";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <header className="header">
        <div className="header__wrapper">
        <NavLink to="/">
        <div className="header__logo">
                <img className="header__logo-img" src={logo_wt} alt="BL2WP logo"/>
                    <div className="header__logo-text">
                        <p className="hlt-b">Borderlands 2</p>
                        <p className="hlt-w">weapons</p>
                    </div>
            </div>
        </NavLink>

        <div className="header__burger" onClick={toggleMenu}>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
                <div className="burger__line"></div>
            </div>

        <ul className={`header__menu__list ${isMenuOpen ? "open" : ""}`}>
            <li className="header__menu__list__item">
                <NavLink to="/catalogWeapon" className="header__menu__link">
                    Оружие
                </NavLink>
            </li>
            <li className="header__menu__list__item">
                <NavLink to="/catalogGrenades" className="header__menu__link">
                    Гранаты
                </NavLink>
            </li>
            <li className="header__menu__list__item">
                <NavLink to="/catalogShields" className="header__menu__link">
                    Щиты
                </NavLink>
            </li>
            <li className="header__menu__list__item">
                <NavLink to="/catalog" className="header__menu__link">
                    Каталог
                </NavLink>
            </li>
            <li className="header__menu__list__item">
                <NavLink to="/guide" className="header__menu__link">
                    Компоненты
                </NavLink>
            </li>
        </ul>
        </div>
    </header>
    );
}

export default Header;