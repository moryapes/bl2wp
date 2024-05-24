import "./style.css";
import { useState, useEffect } from 'react';
import {cards} from '../../helpers/cardsList.js';
import { NavLink } from "react-router-dom";

import maya from "./../../images/maya.png";
import zero from "./../../images/zero.png";
import {ReactComponent as IconVk} from "./../../images/icons/icon_vk.svg";
import {ReactComponent as IconTg} from "./../../images/icons/icon_tg.svg";
import {ReactComponent as IconDs} from "./../../images/icons/icon_ds.svg";
import compo1 from "./../../images/parts/smg/barrel/hyperion.png";
import compo2 from "./../../images/parts/shotgun/boby/torgue.png";

function Home() {

    const [randomCards, setRandomCards] = useState([]);

    // Функция для выбора случайных карточек из массива cards
    const getRandomCards = () => {
        const shuffledCards = cards.sort(() => Math.random() - 0.5);
        const selectedCards = shuffledCards.slice(0, 3); // Выбираем первые три случайные карточки
        setRandomCards(selectedCards);
    };

    useEffect(() => {
        getRandomCards(); // Вызываем функцию при загрузке компонента
    }, []); // Пустой массив зависимостей означает, что эффект должен запускаться только при монтировании компонента

    return(
        <main className="main">
            <div className="div__info">
                <div className="div__info-text">
                    <h5 className="div__info-h">Borderlands 2 weapons - сайт, посвященный экипировке из игры Borderlands 2</h5>
                    <p className="div-p">Здесь Вы найдете таблицы со всем оружием, щитами и гранатами в игре, а также сможете познакомиться с составными частями вооружения</p>
                </div>
                <img className="div__info-maya" src={maya} alt="майя смотрит"/>
            </div>

            <div className="div__stuff">
            <h1 className="small-h need red">Выберите то, что нужно</h1>
                <div className="div__stuff__cards">
                {randomCards.map((card, index) => (
                        <NavLink key={card.id} to={`/card/${card.id}`}>
                            <div key={index} className="stuff__card">
                                <img className="stuff__card-img" src={card.img} alt={card.name} />
                            </div>
                        </NavLink>
                    ))}
                </div>
                <h1 className="small-h want yellow">Выберите то, что хочется</h1>
            </div>

            <div className="div__guide">
                <div className="div__guide__text">
                    <h1 className="big-h guide">Не забудьте изучить руководства!</h1>
                    <a className="div__guide-btn" href="../guide">Прочитать</a>
                </div>
                <img className="div__guide-zero" src={zero} alt="зер0 любит"/>
                <div className="div__guide__cards">
                    <div className="div__guide__card mmb">
                        <img src={compo1} alt="пример компонента"/>
                    </div>
                    <div className="div__guide__card">
                        <img src={compo2} alt="пример компонента"/>
                    </div>
                </div>
            </div>

            <div className="div__contact">
                <div className="div__contact__questions">
                    <h1 className="big-h yellow question">Есть вопросы?</h1>
                    <p className="div-p mb">Сайт был сделан для дипломного проекта и будет дорабатываться в будущем.</p>
                    <p className="div-p">Свои вопросы, пожелания и предложения можно написать в социальных сетях. Спасибо! :)</p>
                </div>
                <div className="div__contact__social">
                    <h1 className="big-h red write">Пишите</h1>
                    <div className="social__cont">
                    <a href="https://vk.com/moryapes" target="_blank" rel="noreferrer"><IconVk className="social"/></a>
                        <p className="contact__text">vk: moryapes</p>
                    </div>
                    <div className="social__cont">
                    <a href="https://discordapp.com/users/moryapes/" target="_blank" rel="noreferrer"><IconDs className="social"/></a>
                        <p className="contact__text">ds: moryapes</p>
                    </div>
                    <div className="social__cont">
                        <a href="https://t.me/moryapes" target="_blank" rel="noreferrer"><IconTg className="social"/></a>
                        <p className="contact__text">tg: moryapes</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;