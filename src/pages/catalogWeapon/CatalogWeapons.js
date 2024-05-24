import "./style.css";

import maliwan from "./../../images/manufacturers/maliwan.png";
import dahl from "./../../images/manufacturers/dahl.png";
import hyperion from "./../../images/manufacturers/hyperion.png";
import jakobs from "./../../images/manufacturers/jakobs.png";
import tediore from "./../../images/manufacturers/tediore.png";
import torgue from "./../../images/manufacturers/torgue.png";
import vladof from "./../../images/manufacturers/vladof.png";
import bandit from "./../../images/manufacturers/bandit.png";

function CatalogWeapons() {
    return(
        <main className="main">
            <div className="catalog_top">
                <h2>Оружия</h2>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol">Все оружия</a>
            </div>
            <h3>По редкости</h3>
            <div className="catalog__category">
                <a href="/catalog?rarity=rare&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card rare-c">Уникальные</div></a>
                <a href="/catalog?rarity=etech&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card e_tech-c">E-tech</div></a>
                <a href="/catalog?rarity=violet&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card very_rare-c">Очень редкие</div></a>
                <a href="/catalog?rarity=legendary&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card legendary-c">Легендарные</div></a>
                <a href="/catalog?rarity=seraphim&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card seraphim-c">Серафимские</div></a>
                <a href="/catalog?rarity=perlamutr&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card perlamutr-c">Перламут-ровые</div></a>
                <a href="/catalog?rarity=rainbow&type=smg,rocket,riffle,shotgun,sniper,pistol"><div className="category__card rainbow-c">Радужные</div></a>
            </div>
            <h3>По типу</h3>
                <div className="catalog__category">
                <a href="/catalog?type=pistol"><div className="category__card">Пистолет</div></a>
                <a href="/catalog?type=smg"><div className="category__card">Пистолет-пулемет</div></a>
                <a href="/catalog?type=shotgun"><div className="category__card">Дробовик</div></a>
                <a href="/catalog?type=riffle"><div className="category__card">Штурмовая винтовка</div></a>
                <a href="/catalog?type=sniper"><div className="category__card">Снайперская винтовка</div></a>
                <a href="/catalog?type=rocket"><div className="category__card">Ракетомет</div></a>
            </div>
            <h3>По DLC</h3>
                <div className="catalog__category">
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=none"><div className="category__card">Без DLC</div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=torgue"><div className="category__card">Мистер Торрг устраивает месилово</div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=hammer"><div className="category__card">Сэр Хаммерлок открывает сезон охоты</div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=tina"><div className="category__card">Крошка Тина штурмует Обитель Дракона</div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=lilith"><div className="category__card">Командир Лилит и битва за Убежище</div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&dlc=booty"><div className="category__card">Капитан Скарлетт и ее пиратское сокровище</div></a>
            </div>
            <h3>По производителю</h3>
                <div className="catalog__category">
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=maliwan"><div className="category__card"><img className="manufacturer" src={maliwan} alt="maliwan"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=dahl"><div className="category__card"><img className="manufacturer" src={dahl} alt="dahl"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=hyperion"><div className="category__card"><img className="manufacturer" src={hyperion} alt="hyperion"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=jakobs"><div className="category__card"><img className="manufacturer" src={jakobs} alt="jakobs"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=tediore"><div className="category__card"><img className="manufacturer" src={tediore} alt="tediore"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=torgue"><div className="category__card"><img className="manufacturer" src={torgue} alt="torgue"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=bandit"><div className="category__card"><img className="manufacturer" src={bandit} alt="bandit"/></div></a>
                <a href="/catalog?type=smg,rocket,riffle,shotgun,sniper,pistol&manuf=vladof"><div className="category__card"><img className="manufacturer" src={vladof} alt="vladof"/></div></a>
            </div>
        </main>
    );   
}

export default CatalogWeapons;