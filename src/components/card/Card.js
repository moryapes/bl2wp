import "./style.css";

import { useParams } from "react-router-dom";
import {cards} from "../../helpers/cardsList.js";


function Card() {
    const {id} = useParams();
    const card = cards.find(item => item.id === id);

    return(
        <main className="ne_main card__main">
            <div className="card">
                <div className="card__left">
                    <div className="card__left__info">
                        <h2 className={card.rarity}>{card.name}</h2>
                        <p className="card__description"><span className="card__feature">{card.desc}</span> {card.descpon}</p>
                    </div>
                    <div className="card__left__map">
                        <h3>Где найти</h3>
                        { (card.map === '') ? 
                        Array.isArray(card.poluch) ? card.poluch.map((item, index) => (
                            <p key={index} className="card__right__text">{item}</p>
                        )) : <p className="card__right__text">{card.poluch}</p> :
                        card.map && (
                        <img src={card.map} alt="карта где найти"/>)
                        }
                    </div>
                </div>
                <div className="card__right">
                    <div className="card__right__card">
                        <div className="card__icons">
                            {Array.isArray(card.element) &&
                                    card.element.map((elemi, index) => (
                                        <img key={index} src={elemi} alt='элемент' className="card__elem" />
                                    ))
                            }
                        </div>
                        <div className="card__right__image">
                            <img src={card.img} alt={card.name}/>
                            <p className="card__feature__card">{card.desc}</p>
                        </div>
                        <div className="card__right__info">
                            <div className="card__info__wrapper"><p className="card__info__header">Производитель:</p><img src={card.manuf} alt="производитель" className="card__manufacturer"/></div>
                            <div className="card__info__wrapper"><p className="card__info__header">Тип:</p> <p>{card.type}</p></div>
                            <div className="card__info__wrapper"><p className="card__info__header">Дополнение:</p> <p>{card.dlc}</p></div>
                        </div>
                    </div>
                    <div className="card__right__map">
                    { (card.map !== '') ? 
                        Array.isArray(card.poluch) ? card.poluch.map((item, index) => (
                            <p key={index} className="card__right__text">{item}</p>
                        )) : <p className="card__right__text">{card.poluch}</p> :
                        <p></p>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Card;