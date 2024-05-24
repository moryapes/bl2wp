import "./style.css";

import logo from "./../../images/logo_without_text.svg";
import moxxi from "./../../images/moxxi.png";

import { NavLink } from "react-router-dom";

function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <NavLink to="/">
          <img className="footer__logo" src={logo} alt="BL2WP логотип" />
        </NavLink>
        <ul className="footer__menu">
          <li className="footer__menu__item">
            <NavLink to="/" className="footer__menu__link">
              Главная
            </NavLink>
          </li>
          <li className="footer__menu__item">
            <NavLink to="/catalogWeapon" className="footer__menu__link">
              Оружие
            </NavLink>
          </li>
          <li className="footer__menu__item">
            <NavLink
              to="/catalogGrenades"
              className="footer__menu__link"
            >
              Гранаты
            </NavLink>
          </li>
          <li className="footer__menu__item">
            <NavLink
              to="/catalogShields"
              className="footer__menu__link"
            >
              Щиты
            </NavLink>
          </li>
          <li className="footer__menu__item">
            <NavLink to="/guide" className="footer__menu__link">
              Компоненты
            </NavLink>
          </li>
        </ul>
        <p>2024</p>
        <img className="moxxi" src={moxxi} alt="кнопка вверх" onClick={e => toTop(e)} />
      </div>
    </footer>
  );
}

export default Footer;
