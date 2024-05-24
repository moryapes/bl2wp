import maliwan from "./../../images/manufacturers/maliwan.png";
import dahl from "./../../images/manufacturers/dahl.png";
import hyperion from "./../../images/manufacturers/hyperion.png";
import tediore from "./../../images/manufacturers/tediore.png";
import torgue from "./../../images/manufacturers/torgue.png";
import vladof from "./../../images/manufacturers/vladof.png";
import bandit from "./../../images/manufacturers/bandit.png";

function CatalogGrenades() {
    return(
        <main className="main">
            <div className="catalog_top">
                <h2>Гранаты</h2>
                <a href="/catalog?type=grenade">Все гранаты</a>
            </div>
            <h3>По редкости</h3>
            <div className="catalog__category">
                <a href="/catalog?rarity=rare&type=grenade"><div className="category__card rare-c">Уникальные</div></a>
                <a href="/catalog?rarity=violet&type=grenade"><div className="category__card very_rare-c">Очень редкие</div></a>
                <a href="/catalog?rarity=legendary&type=grenade"><div className="category__card legendary-c">Легендарные</div></a>
                <a href="/catalog?rarity=seraphim&type=grenade"><div className="category__card seraphim-c">Серафимские</div></a>
                <a href="/catalog?rarity=rainbow&type=grenade"><div className="category__card rainbow-c">Радужные</div></a>
            </div>
            <h3>По DLC</h3>
            <div className="catalog__category">
                <a href="/catalog?type=grenade&dlc=none"><div className="category__card">Без DLC</div></a>
                <a href="/catalog?type=grenade&dlc=torgue"><div className="category__card">Мистер Торрг устраивает месилово</div></a>
                <a href="/catalog?type=grenade&dlc=tina"><div className="category__card">Крошка Тина штурмует Обитель Дракона</div></a>
                <a href="/catalog?type=grenade&dlc=lilith"><div className="category__card">Командир Лилит и битва за Убежище</div></a>
                <a href="/catalog?type=grenade&dlc=booty"><div className="category__card">Капитан Скарлетт и ее пиратское сокровище</div></a>
            </div>
            <h3>По производителю</h3>
            <div className="catalog__category">
                <a href="/catalog?type=grenade&manuf=maliwan"><div className="category__card"><img className="manufacturer" src={maliwan} alt="maliwan"/></div></a>
                <a href="/catalog?type=grenade&manuf=dahl"><div className="category__card"><img className="manufacturer" src={dahl} alt="dahl"/></div></a>
                <a href="/catalog?type=grenade&manuf=hyperion"><div className="category__card"><img className="manufacturer" src={hyperion} alt="hyperion"/></div></a>
                <a href="/catalog?type=grenade&manuf=tediore"><div className="category__card"><img className="manufacturer" src={tediore} alt="tediore"/></div></a>
                <a href="/catalog?type=grenade&manuf=torgue"><div className="category__card"><img className="manufacturer" src={torgue} alt="torgue"/></div></a>
                <a href="/catalog?type=grenade&manuf=bandit"><div className="category__card"><img className="manufacturer" src={bandit} alt="bandit"/></div></a>
                <a href="/catalog?type=grenade&manuf=vladof"><div className="category__card"><img className="manufacturer" src={vladof} alt="vladof"/></div></a>
            </div>
        </main>
    );   
}

export default CatalogGrenades;