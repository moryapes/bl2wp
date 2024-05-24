import "./style.css";

import { cards } from '../../helpers/cardsList';
import Filter from "../../components/filter/Filter";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


function Catalog() {
    const [filteredData, setFilteredData] = useState([]);
    const [filterIsActive, setFilterIsActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterQuery = searchParams.get('filter') || '';
    const cardQuery = searchParams.get('card') || '';

    useEffect(() => {
        const filteredCards = cards.filter(card => card.name.includes(filterQuery));
        setFilteredData(filteredCards);
    }, [filterQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value.toLowerCase();
        const currentFilter = searchParams.get('filter') || '';
        setSearchParams({ filter: currentFilter, card: query }); 
    };
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(cardQuery));
    const filteredAndSearchedCards = filteredData.filter(card => card.name.includes(cardQuery));

    return (
        <main className="main main__catalog">
            <div className="catalog__search">
                <h2>Каталог</h2>
                <form className="search__form" onSubmit={handleSubmit}>
                    <input type="search" name="search" className="search__input"/>
                    <input type="submit" className="search__button" value='Найти'/>
                </form>
            </div>
            <div className="catalog__inner">
                <Filter filteredData={filteredData} setFilteredData={setFilteredData} setFilterIsActive={setFilterIsActive} />
                <div className="catalog__pocket">
                    <table className="catalog__table">
                        <thead>
                            <tr className="tr-bb">
                                <th className="rarity">Редкость</th>
                                <th className="name">Название</th>
                                <th className="type">Тип</th>
                                <th className="manuf">Производитель</th>
                                <th className="element">Стихия</th>
                                <th className="dlc">Дополнение</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterIsActive ?
                                    filteredAndSearchedCards.map((cards) => {
                                        return (
                                            // <NavLink to={`/card/${cards.id}`} className="cards__link" key={cards.id}>
                                            <tr onClick={() => window.location.href = `/card/${cards.id}`} className="tr-elems" key={cards.id}>
                                                <td><img src={cards.img} alt={cards.name} className="card__item-img" /></td>
                                                <td className="card__name"><p className={cards.rarity}>{cards.name}</p></td>
                                                <td className="card__type">{cards.type}</td>
                                                <td className="card__manuf"><img src={cards.manuf} alt="производитель" className="card__manuf-img" /></td>
                                                <td className="card__elements">{Array.isArray(cards.element) &&
                                                    cards.element.map((elemi, index) => (
                                                        <img key={index} src={elemi} alt='элемент' className="card__elem-img" />
                                                    ))
                                                }</td>
                                                <td className="card__dlc">{cards.dlc}</td>
                                            </tr>
                                            // </NavLink>
                                        );
                                    })
                                    :
                                    filteredCards.map((cards) => {
                                        return (
                                            // <NavLink to={`/card/${cards.id}`} className="cards__link" key={cards.id}>
                                            <tr onClick={() => window.location.href = `/card/${cards.id}`} className="tr-elems" key={cards.id}>
                                                <td><img src={cards.img} alt={cards.name} className="card__item-img" /></td>
                                                <td className="card__name"><p className={cards.rarity}>{cards.name}</p></td>
                                                <td className="card__type">{cards.type}</td>
                                                <td className="card__manuf"><img src={cards.manuf} alt="производитель" className="card__manuf-img" /></td>
                                                <td className="card__elements">{Array.isArray(cards.element) &&
                                                    cards.element.map((elem, index) => (
                                                        <img key={index} src={elem} alt='элемент' className="card__elem-img" />
                                                    ))
                                                }</td>
                                                <td className="card__dlc">{cards.dlc}</td>
                                            </tr>
                                            // </NavLink>
                                        );
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Catalog;