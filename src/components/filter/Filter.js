import "./style.css";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import qs from 'qs';

import filter from '../../images/icons/icon_filter.svg';
import close from '../../images/icons/close.svg';
import fire from '../../images/elements/fire.png';
import corrosive from '../../images/elements/corrosive.png';
import slag from '../../images/elements/slag.png';
import explosive from '../../images/elements/explosive.png';
import shock from '../../images/elements/shock.png';
import none from '../../images/elements/none.png';
import anshin from '../../images/manufacturers/anshin.png';
import pangolin from '../../images/manufacturers/pangolin.png';
import maliwan from '../../images/manufacturers/maliwan.png';
import dahl from '../../images/manufacturers/dahl.png';
import hyperion from '../../images/manufacturers/hyperion.png';
import jakobs from '../../images/manufacturers/jakobs.png';
import tediore from '../../images/manufacturers/tediore.png';
import vladof from '../../images/manufacturers/vladof.png';
import bandit from '../../images/manufacturers/bandit.png';
import torgue from '../../images/manufacturers/torgue.png';
import { cards } from "../../helpers/cardsList";

function Filter({ filteredData, setFilteredData, setFilterIsActive }) {
    const [show, setShow] = useState(false);
    const [filterElement, setFilterElement] = useState([
        { src: fire, alt: 'огонь', que: 'fire', active: false },
        { src: corrosive, alt: 'коррозия', que: 'corrosive', active: false },
        { src: slag, alt: 'шлак', que: 'slag', active: false },
        { src: explosive, alt: 'взрыв', que: 'explosive', active: false },
        { src: shock, alt: 'шок', que: 'shock', active: false },
        { src: none, alt: 'без элемента', que: 'none', active: false },
    ])
    const [filterRarity, setFilterRarity] = useState([
        { rarity: 'rare', active: false },
        { rarity: 'etech', active: false },
        { rarity: 'violet', active: false },
        { rarity: 'legendary', active: false },
        { rarity: 'seraphim', active: false },
        { rarity: 'perlamutr', active: false },
        { rarity: 'rainbow', active: false },
    ])
    const [filterType, setFilterType] = useState([
        { type: 'Пистолет-пулемет', name: 'Пистолет-пулемет', que: 'smg', active: false },
        { type: 'Ракетомет', name: 'Ракетомет', que: 'rocket', active: false },
        { type: 'Штурмовая винтовка', name: 'Штурмовая винтовка', que: 'riffle', active: false },
        { type: 'Дробовик', name: 'Дробовик', que: 'shotgun', active: false },
        { type: 'Снайперская винтовка', name: 'Снайпер. винтовка', que: 'sniper', active: false },
        { type: 'Пистолет', name: 'Пистолет', que: 'pistol', active: false },
        { type: 'Щит', name: 'Щит', que: 'shield', active: false },
        { type: 'Граната', name: 'Граната', que: 'grenade', active: false },
    ])
    const [filterManuf, setFilterManuf] = useState([
        { src: anshin, alt: 'anshin', active: false },
        { src: pangolin, alt: 'pangolin', active: false },
        { src: torgue, alt: 'torgue', active: false },
        { src: dahl, alt: 'dahl', active: false },
        { src: hyperion, alt: 'hyperion', active: false },
        { src: jakobs, alt: 'jakobs', active: false },
        { src: tediore, alt: 'tediore', active: false },
        { src: vladof, alt: 'vladof', active: false },
        { src: maliwan, alt: 'maliwan', active: false },
        { src: bandit, alt: 'bandit', active: false },
    ])

    const [filterDLC, setFilterDLC] = useState([
        { dlc: 'Мистер Торрг устраивает месилово', name: 'Торрг и месилово', que: 'torgue', active: false },
        { dlc: 'Сэр Хаммерлок открывает сезон охоты', name: 'Сезон охоты', que: 'hammer', active: false },
        { dlc: 'Капитан Скарлетт и ее пиратское сокровище', name: 'Пиратское сокровище', que: 'booty', active: false },
        { dlc: 'Без DLC', name: 'Без DLC', que: 'none', active: false },
        { dlc: 'Командир Лилит и битва за Убежище', name: 'Битва за Убежище', que: 'lilith', active: false },
        { dlc: 'Крошка Тина штурмует Обитель Дракона', name: 'Обитель Дракона', que: 'tina', active: false },
    ])
    const [queryParams, setQueryParams] = useState(null)
    useEffect(() => {
        // При монтировании компонента, проверяем наличие параметров фильтрации в URL
        setQueryParams(qs.parse(window.location.search, { ignoreQueryPrefix: true }))
    }, []);

    useEffect(() => {
        queryParams && Object.keys(queryParams).forEach((elem) => {
            if (elem === 'rarity') {
                // Массив данных из строки в массив (из поиска)
                const arrayRarity = queryParams[elem].split(',');
                // Создаем новый массив с обновленными значениями active
                const updatedFilterRarity = filterRarity.map(elemCompare => {
                    if (arrayRarity.includes(elemCompare.rarity)) {
                        return { ...elemCompare, active: true };
                    } else {
                        return elemCompare;
                    }
                });
                // Устанавливаем обновленный массив в состояние
                setFilterRarity(updatedFilterRarity);
                console.log(updatedFilterRarity);
            }
            if (elem === 'element') {
                const arrayElement = queryParams[elem].split(',');
                const updatedFilterElement = filterElement.map(elemCompare => {
                    if (arrayElement.includes(elemCompare.que)) {
                        return { ...elemCompare, active: true };
                    } else {
                        return elemCompare;
                    }
                });
                setFilterElement(updatedFilterElement);
            }
            if (elem === 'type') {
                const arrayType = queryParams[elem].split(',');
                const updatedFilterType = filterType.map(elemCompare => {
                    if (arrayType.includes(elemCompare.que)) {
                        return { ...elemCompare, active: true };
                    } else {
                        return elemCompare;
                    }
                });
                setFilterType(updatedFilterType);
            }
            if (elem === 'manuf') {
                const arrayManuf = queryParams[elem].split(',');
                const updatedFilterManuf = filterManuf.map(elemCompare => {
                    if (arrayManuf.includes(elemCompare.alt)) {
                        return { ...elemCompare, active: true };
                    } else {
                        return elemCompare;
                    }
                });
                setFilterManuf(updatedFilterManuf);
            }
            if (elem === 'dlc') {
                const arrayDLC = queryParams[elem].split(',');
                const updatedFilterDLC = filterDLC.map(elemCompare => {
                    if (arrayDLC.includes(elemCompare.que)) {
                        return { ...elemCompare, active: true };
                    } else {
                        return elemCompare;
                    }
                });
                setFilterDLC(updatedFilterDLC);
            }
        })
    }, [queryParams]);

    useEffect(() => {
        let filterRarityFiltered = filterRarity.filter(elem => elem.active === true).map((elem) => elem.rarity)
        let filterElementFiltered = filterElement.filter(elem => elem.active === true).map((elem) => elem.src)
        let filterTypeFiltered = filterType.filter(elem => elem.active === true).map((elem) => elem.type)
        let filterManufFiltered = filterManuf.filter(elem => elem.active === true).map((elem) => elem.src)
        let filterDLCfFiltered = filterDLC.filter(elem => elem.active === true).map((elem) => elem.dlc)

        const checkFilteredElement = (filterElementFiltered, checkArray) => {
            for (let i = 0; i < checkArray.length; i++) {
                if (filterElementFiltered.includes(checkArray[i])) {
                    return true;
                }
            }
        }
        setFilteredData(
            cards.filter(elem => (filterRarityFiltered.length === 0 ? true : filterRarityFiltered.includes(elem.rarity))
                && (filterElementFiltered.length === 0 ? true : checkFilteredElement(filterElementFiltered, elem.element))
                && (filterTypeFiltered.length === 0 ? true : filterTypeFiltered.includes(elem.type))
                && (filterManufFiltered.length === 0 ? true : filterManufFiltered.includes(elem.manuf))
                && (filterDLCfFiltered.length === 0 ? true : filterDLCfFiltered.includes(elem.dlc))
            )
        )
        setFilterIsActive(
            filterRarityFiltered.length !== 0 || filterElementFiltered.length !== 0 || filterTypeFiltered.length !== 0 || filterManufFiltered.length !== 0 || filterDLCfFiltered.length !== 0
        )
    }, [filterRarity, filterElement, filterType, filterManuf, filterDLC])

    useEffect(() => {
        const queryParamsString = qs.stringify({
            rarity: filterRarity.filter((elem) => elem.active).map((elem) => elem.rarity),
            element: filterElement.filter((elem) => elem.active).map((elem) => elem.que),
            type: filterType.filter((elem) => elem.active).map((elem) => elem.que),
            manuf: filterManuf.filter((elem) => elem.active).map((elem) => elem.alt),
            dlc: filterDLC.filter((elem) => elem.active).map((elem) => elem.que),
        },
            { arrayFormat: 'comma' }).replace(/%2C/g, ',');
        const url = `${window.location.pathname}?${queryParamsString}`;
        filteredData[0] && window.history.replaceState({}, "", url);
    },[filterRarity, filterElement, filterType, filterManuf, filterDLC])

    return (
        <div className="catalog__filter">
            <div className="catalog__filter__but" onClick={() => setShow(!show)}>
                {show ? [<img src={close} className="filter" alt="иконка фильтра" />] : ''}
                <p>Фильтр</p>
                {show ? '' : [<img src={filter} className="filter" alt="иконка фильтра" />]}
            </div>
            <CSSTransition in={show} timeout={200} classNames='alert' unmountOnExit>
                <div className="catalog__filter__open">
                    <h4>Редкость</h4>
                    <div className="filter__rarity">
                        {
                            filterRarity && filterRarity.map((elem, index) => <button key={elem.rarity} className={`filter__rarity-${elem.rarity} rarity-box ${elem.active ? 'filter__rarity-active' : ''}`} onClick={() => {
                                const updatedFilterRarity = [...filterRarity];
                                updatedFilterRarity[index] = { ...elem, active: elem.active ? false : true };
                                setFilterRarity(updatedFilterRarity);
                            }}>

                            </button>
                            )
                        }
                    </div>
                    <h4>Элемент</h4>
                    <div className="filter__element">
                        {
                            filterElement && filterElement.map((elem, index) => <img src={elem.src} className={`filter__element-img ${elem.active ? 'filter__element-active' : ''}`} alt={elem.alt} onClick={() => {
                                const updatedFilterElement = [...filterElement];
                                updatedFilterElement[index] = { ...elem, active: elem.active ? false : true };
                                setFilterElement(updatedFilterElement);
                            }} />)
                        }
                    </div>
                    <h4>Тип</h4>
                    <div className="filter__type">
                        {
                            filterType && filterType.map((elem, index) => <button className={`filter__type-but ${elem.active ? 'filter__type-active' : ''}`} onClick={() => {
                                const updatedFilterType = [...filterType];
                                updatedFilterType[index] = { ...elem, active: elem.active ? false : true };
                                setFilterType(updatedFilterType);
                            }}>{elem.name}</button>)
                        }
                    </div>
                    <h4>Производитель</h4>
                    <div className="filter__manuf">
                        {
                            filterManuf && filterManuf.map((elem, index) => <img src={elem.src} className={`filter__manuf-img ${elem.active ? 'filter__element-active' : ''}`} alt={elem.alt} onClick={() => {
                                const updatedFilterManuf = [...filterManuf];
                                updatedFilterManuf[index] = { ...elem, active: elem.active ? false : true };
                                setFilterManuf(updatedFilterManuf);
                            }} />)
                        }
                    </div>
                    <h4>Дополнение</h4>
                    <div className="filter__dlc">
                        {
                            filterDLC && filterDLC.map((elem, index) => <button className={`filter__type-but ${elem.active ? 'filter__type-active' : ''}`} onClick={() => {
                                const updatedFilterDLC = [...filterDLC];
                                updatedFilterDLC[index] = { ...elem, active: elem.active ? false : true };
                                setFilterDLC(updatedFilterDLC);
                            }}>{elem.name}</button>)
                        }
                    </div>
                </div></CSSTransition>
        </div>
    );
}

export default Filter;