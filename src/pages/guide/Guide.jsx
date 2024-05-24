import "./style.css";

import GuideCard from "../../components/guideCard/GuideCard";
import { guideCards } from "../../helpers/guideCardList";
import { useState } from "react";

function Guide() {
    const [currentTab, setCurrentTab] = useState('pistol');

    const [currentLeft, setCurrentLeft] = useState('barrel');

    console.log("guideCards[currentTab]:", guideCards[currentTab]);
    console.log("guideCards[currentLeft]:", guideCards[currentLeft]);

    return(
        <div className="wrapper wrapper__guide">
        <main className="main main__guide">
            <h2>Компоненты</h2>
            <div className="weapons">
                <div className="left-menu">
                    <button onClick={() => setCurrentLeft('barrel')} className={`left-menu-item ${currentLeft === 'barrel' && 'left-menu-item-active'}`}>Ствол</button >
                    <button onClick={() => setCurrentLeft('grip')} className={`left-menu-item ${currentLeft === 'grip' && 'left-menu-item-active'}`}>Рукоятка</button>
                    <button onClick={() => setCurrentLeft('stock')} className={`left-menu-item ${currentLeft === 'stock' && 'left-menu-item-active'}`}>Приклад</button >
                    <button onClick={() => setCurrentLeft('sight')} className={`left-menu-item ${currentLeft === 'sight' && 'left-menu-item-active'}`}>Прицел</button >
                    <button onClick={() => setCurrentLeft('accessory')} className={`left-menu-item ${currentLeft === 'accessory' && 'left-menu-item-active'}`}>Аксессуар</button >
                    <button onClick={() => setCurrentLeft('boby')} className={`left-menu-item ${currentLeft === 'boby' && 'left-menu-item-active'}`}>Корпус</button >
                </div>
                <div className="weapon__menu">
                    <button onClick={() => setCurrentTab('pistol')} className={`weapon__menu__item ${currentTab === 'pistol' && 'weapon__menu__item-active'}`}>Пистолет</button >
                    <button onClick={() => setCurrentTab('smg')} className={`weapon__menu__item ${currentTab === 'smg' && 'weapon__menu__item-active'}`}>Пистолет-пулемет</button>
                    <button onClick={() => setCurrentTab('shotgun')} className={`weapon__menu__item ${currentTab === 'shotgun' && 'weapon__menu__item-active'}`}>Дробовик</button >
                    <button onClick={() => setCurrentTab('rifle')} className={`weapon__menu__item ${currentTab === 'rifle' && 'weapon__menu__item-active'}`}>Штурмовая винтовка</button >
                    <button onClick={() => setCurrentTab('sniper')} className={`weapon__menu__item ${currentTab === 'sniper' && 'weapon__menu__item-active'}`}>Снайперская винтовка</button >
                    <button onClick={() => setCurrentTab('rocket')} className={`weapon__menu__item ${currentTab === 'rocket' && 'weapon__menu__item-active'}`}>Ракетомет</button >
                </div>
                <div className="weapon__desc">
                    <div className="guide__cards__container">
                    {guideCards[currentTab] && guideCards[currentTab][currentLeft].map((guideCard) => {
                            return <GuideCard 
                            key={guideCard.id} 
                                id={guideCard}
                                title={guideCard.title}
                                img={guideCard.img}
                                text={guideCard.text} />
                        }) }
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default Guide;