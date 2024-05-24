import fire from '../images/elements/fire.png';
import corrosive from '../images/elements/corrosive.png';
import slag from '../images/elements/slag.png';
import explosive from '../images/elements/explosive.png';
import shock from '../images/elements/shock.png';
import none from '../images/elements/none.png';

import anshin from '../images/manufacturers/anshin.png';
import pangolin from '../images/manufacturers/pangolin.png';
import maliwan from '../images/manufacturers/maliwan.png';
import dahl from '../images/manufacturers/dahl.png';
import hyperion from '../images/manufacturers/hyperion.png';
import jakobs from '../images/manufacturers/jakobs.png';
import tediore from '../images/manufacturers/tediore.png';
import vladof from '../images/manufacturers/vladof.png';
import bandit from '../images/manufacturers/bandit.png';
import torgue from '../images/manufacturers/torgue.png';

import gunerang from '../images/stuff/weapons/Gunerang.webp';
import gunerangmap from '../images/maps/gunerang.png';
import godfinger from '../images/stuff/weapons/Godfinger.webp';
import pounder from '../images/stuff/weapons/12_Pounder.webp';
import actualizer from '../images/stuff/weapons/Actualizer.webp';
import ahab from '../images/stuff/weapons/Ahab.webp';
import gee from '../images/maps/gee.png';
import devastator from '../images/stuff/weapons/Devastator.webp';
import patriot from '../images/stuff/weapons/Patriot.webp';
import amigo_sincero from '../images/stuff/weapons/Amigo_Sincero.webp';
import avenger from '../images/stuff/weapons/Avenger.webp';
import omgwth from '../images/maps/omgwth.png';
import love_thumper from '../images/stuff/shields/Love_Thumper.webp';
import shield_1340 from '../images/stuff/shields/1340_Shield.webp';
import aequitas from '../images/stuff/shields/Aequitas.webp';
import antagonist from '../images/stuff/shields/Antagonist.webp';
import black_hole from '../images/stuff/shields/Black_Hole.webp';
import blackhole from '../images/maps/blackhole.png';
import pun_chee from '../images/stuff/shields/Pun-chee.webp';
import easy_mode from '../images/stuff/shields/Easy_Mode.webp';
import bouncing_bonny from '../images/stuff/grenades/Bouncing_Bonny.webp';
import contraband_sky_rocket from '../images/stuff/grenades/Contraband_Sky_Rocket.webp';
import crossfire from '../images/stuff/grenades/Crossfire.webp';
import fire_bee from '../images/stuff/grenades/Fire_Bee.webp';
import quasar from '../images/stuff/grenades/Quasar.webp';
import midnight_star from '../images/stuff/grenades/Midnight_Star.webp';

const elem = {
    fire: fire,
    corrosive: corrosive,
    slag: slag,
    explosive: explosive,
    shock: shock,
    none: none
}

const manuf = {
    anshin: anshin,
    pangolin: pangolin,
    maliwan: maliwan,
    dahl: dahl,
    hyperion: hyperion,
    jakobs: jakobs,
    tediore: tediore,
    vladof: vladof,
    bandit: bandit,
    torgue: torgue
}

const type = {
    smg: 'Пистолет-пулемет',
    pistol: 'Пистолет',
    riffle: 'Штурмовая винтовка',
    rocket: 'Ракетомет',
    shield: 'Щит',
    shotgun: 'Дробовик',
    sniper: 'Снайперская винтовка',
    grenade: 'Граната'
}

const dlc = {
    none: 'Без DLC',
    torgue: 'Мистер Торрг устраивает месилово',
    hammer: 'Сэр Хаммерлок открывает сезон охоты',
    tina: 'Крошка Тина штурмует Обитель Дракона',
    lilith: 'Командир Лилит и битва за Убежище',
    skarl: 'Капитан Скарлетт и ее пиратское сокровище'
}

const rarity = {
    rare: 'rare',
    etech: 'e-tech',
    violet: 'violet',
    legendary: 'legendary',
    seraphim: 'seraphim',
    perlamutr: 'perlamutr',
    rainbow: 'rainbow'
}

const cards = [
    {
        id: 'Gunerang',
        rarity: rarity['legendary'],
        name: 'Бумеранг (Gunerang)',
        desc: 'Попробуй вот это',
        descpon: '– при перезарядке выбрасывается, как бумеранг: летит вперед и либо наводится на врагов (при их наличии), либо возвращается назад. Обладает высоким основным уроном, увеличенным размером магазина и очень высоким уроном от перезарядки.',
        img: gunerang,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['none']],
        manuf: manuf['tediore'],
        type: type['pistol'],
        dlc: dlc['none'],
        map: gunerangmap,
        poluch: 'Выпадает из “Раккмена” на локации “Холодильник”',
    },
    {
        id: 'Godfinger',
        rarity: rarity['perlamutr'],
        name: 'Палец бога (Godfinger)',
        desc: 'Покажи им всем палец.',
        descpon: '– Усиленная оптика. Снижен основной урон. Пробивает врагов насквозь (подобно навыку Зер0 Дрель, но без дополнительного урона). Чем дольше летит пуля, тем больше её урон (может увеличиться вплоть до 14 раз). После попадания в цель пуля порождает "дочерние заряды" (до 5-6 штук).',
        img: godfinger,
        element: [elem['none']],
        manuf: manuf['jakobs'],
        type: type['sniper'],
        dlc: 'Величайший искатель Хранилища 2 - Арена на Цифровом Пике',
        map: '',
        poluch: 'Может выпасть только из пухлых врагов в режиме ВИХ, после достижения игроком 62 уровня',
    },

    {
        id: '12_Pounder',
        rarity: rarity['rare'],
        name: '12-фунтовик (12 Pounder)',
        desc: 'Nec Pluribus Impar, bitches.',
        descpon: '– стреляет натуральными 12-фунтовыми (отсюда и название) ядрами. Снаряды летят по параболе и отскакивают от поверхностей; взрываются, если попадают прямо во врага. Маленький размер магазина, ускоренная перезарядка и увеличенный урон. Выстреливаемое ядро может наносить критический урон.',
        img: pounder,
        element: [elem['explosive']],
        manuf: manuf['torgue'],
        type: type['rocket'],
        dlc: dlc['skarl'],
        map: '',
        poluch: 'Выпадает из “Мёртвого Сна” на локации “Хейтерс Фолли” появляется по ходу выполнения сюжетного задания "Две легких части"',
    },

    {
        id: 'Actualizer',
        rarity: rarity['seraphim'],
        name: 'Актуализатор (Actualizer)',
        desc: 'Нам нужно поговорить о твоих параметрах.',
        descpon: '– значительно увеличенный урон (примерно в 1.85 раз по сравнению с аналогичными моделями). Пониженные точность, скорость перезарядки и скорость полета пули. Увеличенная емкость магазина.',
        img: actualizer,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['none']],
        manuf: manuf['hyperion'],
        type: type['smg'],
        dlc: dlc['skarl'],
        map: '',
        poluch: 'Можно приобрести у Скупщика кристаллов Серафимов за 120 кристаллов серафимов в локации Оазис',
    },

    {
        id: 'ahab',
        rarity: rarity['seraphim'],
        name: 'Ахав (Ahab)',
        desc: 'Ненависти ради',
        descpon: '– вместо ракет выстреливает гарпунами с высоким уроном (примерно в два раза выше, чем у обычных аналогичных ракетометов) и небольшим радиусом взрыва. Гарпуны летят по баллистической траектории и либо взрываются при контакте с врагом, либо застревают в поверхности, а уже потом взрываются. У гарпунов небольшой радиус взрыва и наносят они нестихийный урон. Пониженный объем магазина.',
        img: ahab,
        element: [elem['none']],
        manuf: manuf['torgue'],
        type: type['rocket'],
        dlc: dlc['skarl'],
        map: gee,
        poluch: ['Можно приобрести у Скупщика кристаллов Серафимов за 120 кристаллов серафимов в локации Оазис', 'С некоторой вероятностью может выпасть из Мастера Джи Непобедимого в локации Хейтерс Фолли.'],
    },

    {
        id: 'Devastator',
        rarity: rarity['seraphim'],
        name: 'Разрушитель (Devastator)',
        desc: 'Хвала.',
        descpon: '– выстреливает дважды, повышенный урон. Пули вылетают с низкой скоростью, но сразу же ускоряются. Низкие точность и объем магазина, пониженная скорость перезарядки.',
        img: devastator,
        element: [elem['none']],
        manuf: manuf['torgue'],
        type: type['pistol'],
        dlc: dlc['skarl'],
        map: gee,
        poluch: ['Можно приобрести у Скупщика кристаллов Серафимов за 120 кристаллов серафимов в локации Оазис', 'С некоторой вероятностью может выпасть из Мастера Джи Непобедимого в локации Хейтерс Фолли.'],
    },

    {
        id: 'Patriot',
        rarity: rarity['seraphim'],
        name: 'Патриот (Patriot)',
        desc: 'Нам глотку не заткнуть!',
        descpon: '– стреляет медленно летящими снарядами с высоким уроном. Пониженные точность, скорострельность и скорость перезарядки. Малая емкость магазина.',
        img: patriot,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['none']],
        manuf: manuf['vladof'],
        type: type['sniper'],
        dlc: dlc['skarl'],
        map: gee,
        poluch: ['Можно приобрести у Скупщика кристаллов Серафимов за 120 кристаллов серафимов в локации Оазис', 'С некоторой вероятностью может выпасть из Мастера Джи Непобедимого в локации Хейтерс Фолли.'],
    },

    {
        id: 'Amigo_Sincero',
        rarity: rarity['legendary'],
        name: 'Искренний амиго (Amigo Sincero)',
        desc: 'Настоящий друг пройдет через все преграды.',
        descpon: '– пули проходят сквозь вражеский щит, сразу же отнимая здоровье. Увеличенный урон. Всегда с прицелом Джейкобс и клинком для ближнего боя.',
        img: amigo_sincero,
        element: [elem['none']],
        manuf: manuf['jakobs'],
        type: type['sniper'],
        dlc: dlc['lilith'],
        map: '',
        poluch: 'Является наградой за побочное задание “Друзья на всю жизнь” – выдаёт “Брик” на локации “Дожигатель”',
    },

    {
        id: 'Avenger',
        rarity: rarity['legendary'],
        name: 'Мститель (Avenger)',
        desc: 'Ужастная мстя. Час расплатицы.',
        descpon: '– высокие урон и емкость магазина, огромный урон от перезарядки (финального взрыва). При перезарядке оружие начинает невысоко подпрыгивать и кружиться, стреляя во все стороны, а потом взрывается. Медленно восстанавливает патроны.',
        img: avenger,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['none']],
        manuf: manuf['tediore'],
        type: type['smg'],
        dlc: 'Величайший искатель Хранилища',
        map: omgwth,
        poluch: 'Выпадает из “010011110100110101000111010101110101010001001000” на локации “Налет на Цифровой Пик”, при убийстве на 8 Уровне Превосходства имеется гарантированный шанс выпадения перламутровых предметов',
    },

    {
        id: 'Love_Thumper',
        rarity: rarity['violet'],
        name: 'Влюбленный толкатель (Love Thumper)',
        desc: 'Если дубасить тебя - это плохо, тогда я не хочу быть хорошим',
        descpon: '– чрезвычайно долгая задержка подзарядки, высокий стероидный урон. Помимо стероидного бонуса (когда щит на нуле) он высвобождает взрывную волну каждый раз, когда его носитель атакует врукопашную.',
        img: love_thumper,
        element: [elem['explosive']],
        manuf: manuf['bandit'],
        type: type['shield'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Является наградой за побочное задание “Лучший День матери” – выдаёт подарок “Таггарта” на локации “Нагорье”',
    },

    {
        id: '1340_Shield',
        rarity: rarity['rare'],
        name: 'Щит 1340 (1340 Shield)',
        desc: 'Если не можешь победить врага, переходи на его сторону',
        descpon: '– оснащен ИИ с уникальным голосовым модулем, который оповещает хозяина о своем состоянии при перезарядке или получении стихийного урона.',
        img: shield_1340,
        element: [elem['none']],
        manuf: manuf['vladof'],
        type: type['shield'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Является наградой за побочное задание “Астральные путешествия”, выдаёт “Грузчик” на локации “Крепость кровомесов”, если отнести полученный ИИ  “Доктору Зеду”',
    },

    {
        id: 'Aequitas',
        rarity: rarity['rare'],
        name: 'Aequitas',
        desc: 'Второе - лучше',
        descpon: '– каждый предмет Aequitas или «Veritas», используемый игроком или союзниками, на 10% увеличивает продолжительность Борьбы за жизнь.',
        img: aequitas,
        element: [elem['none']],
        manuf: manuf['vladof'],
        type: type['shield'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Является одной из наград за побочное задание “Война кланов: С добрым утром!” – выдаёт “Джимбо Реднек и Тектор Реднек” на локации “Пески”',
    },

    {
        id: 'Antagonist',
        rarity: rarity['seraphim'],
        name: 'Антагонист (Antagonist)',
        desc: 'Сам такой.',
        descpon: '– высокий шанс отражения вражеских пуль во врагов с повышенным уроном. Значительное снижение получаемого урона и увеличенный объём щита. При повреждении запускает шлаковые шары в атакующих вас противников.',
        img: antagonist,
        element: [elem['none']],
        manuf: manuf['maliwan'],
        type: type['shield'],
        dlc: dlc['tina'],
        map: '',
        poluch: 'Можно купить у “Скупщика кристаллов серафимов” на локации “Убежище Огненного камня”',
    },
    
    {
        id: 'Black_Hole',
        rarity: rarity['legendary'],
        name: 'Генератор черных дыр (Black Hole)',
        desc: 'Вы - центр Вселенной.',
        descpon: '– если щит разрядился, то сначала он притянет врагов к себе, а потом выпустит электрическую волну (наподобие сингулярных гранат).',
        img: black_hole,
        element: [elem['shock']],
        manuf: manuf['maliwan'],
        type: type['shield'],
        dlc: dlc['none'],
        map: blackhole,
        poluch: 'Выпадает из “Прораба Джаспера” на локации “Перспектива”, появляется по ходу выполнения побочного задания "Любовью за любовь"',
    },

    {
        id: 'Pun_chee',
        rarity: rarity['seraphim'],
        name: 'Кунь-Фу (Pun-chee)',
        desc: 'Нарываешься, кретин',
        descpon: '– повышенная скорость подзарядки, но уменьшенная задержка подзарядки. Может появляться с защитой от любой стихии или от взрывного урона, но как и у прочих серафимских щитов, его префикс никогда не меняется.',
        img: pun_chee,
        element: [elem['none']],
        manuf: manuf['bandit'],
        type: type['shield'],
        dlc: dlc['torgue'],
        map: '',
        poluch: 'Можно купить у “Скупщика кристаллов серафимов” на локации “Безбашенный кратер безбашенности”',
    },

    {
        id: 'Easy_Mode',
        rarity: rarity['rainbow'],
        name: 'Простой режим (Easy Mode)',
        desc: 'Держите давление, не получая повреждений',
        descpon: '– увеличивает урон от штурмовой винтовки Первооткрыватель, а при экипировке реликвии Тяжелая ноша увеличивает продолжительность режима борьбы за жизнь и максимальный уровень здоровья во время прохождения заданий локации Цифровой Пик.',
        img: easy_mode,
        element: [elem['shock']],
        manuf: manuf['bandit'],
        type: type['shield'],
        dlc: dlc['lilith'],
        map: '',
        poluch: 'Может быть найден в одном из сундуков после победы над “Хадераксом Непобедимым”',
    },

    {
        id: 'Bouncing_Bonny',
        rarity: rarity['legendary'],
        name: 'Попрыгунья (Bouncing Bonny)',
        desc: 'Твоя сестра - такая стерва',
        descpon: '– с каждым прыжком выпускает дочерние гранаты.',
        img: bouncing_bonny,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['explosive']],
        manuf: manuf['dahl'],
        type: type['grenade'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Имеет повышенные шансы выпадения из карликов, прячущихся в сундуках и ящиках',
    },

    {
        id: 'Contraband_Sky_Rocket',
        rarity: rarity['rare'],
        name: 'Контрабандная Ракета-шутиха (Contraband Sky Rocket)',
        desc: 'ПРЕДУПРЕЖДЕНИЕ: не использовать в закрытых помещениях',
        descpon: '– всегда огненной стихии. Ведет себя как фейерверк – после броска взлетает в воздух и разлетается на множество разноцветных взрывов.',
        img: contraband_sky_rocket,
        element: [elem['fire']],
        manuf: manuf['bandit'],
        type: type['grenade'],
        dlc: 'Collector`s Pack',
        map: '',
        poluch: 'В игре появляется при установке дополнения Collector`s Edition Pack',
    },

    {
        id: 'Crossfire',
        rarity: rarity['seraphim'],
        name: 'Шутиха (Crossfire)',
        desc: 'Найти, прижать, окружить, прикончить!',
        descpon: '– ведет себя как граната типа "лягушка", но помимо пуль выпускает дополнительные гранаты. ',
        img: crossfire,
        element: [elem['fire'], elem['corrosive'], elem['shock'], elem['slag'], elem['explosive']],
        manuf: manuf['dahl'],
        type: type['grenade'],
        dlc: dlc['torgue'],
        map: '',
        poluch: 'Можно купить у “Скупщика кристаллов серафимов” на локации “Безбашенный кратер безбашенности”',
    },

    {
        id: 'Fire_Bee',
        rarity: rarity['legendary'],
        name: 'Огненная пчела (Fire Bee)',
        desc: 'Пчелы летят!',
        descpon: '– всегда огненной стихии. Граната после взрыва крутится вокруг точки детонация и изрыгает 4 струи огня в горизонтальной плоскости. Кроме того, стреляет большим количеством неуправляемых миниатюрных огненных ракет в радиусе, превышающим радиус области огненного урона гранаты "Огненная вспышка". ',
        img: fire_bee,
        element: [elem['fire']],
        manuf: manuf['vladof'],
        type: type['grenade'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Не имеет конкретного места выпадения, с небольшой вероятностью может быть получено из любого подходящего источника добычи',
    },

    {
        id: 'Quasar',
        rarity: rarity['legendary'],
        name: 'Квазизвезда (Quasar)',
        desc: 'E=mc^(OMG)/wtf',
        descpon: '– всегда шоковой стихии. Во время притягивания врагов бьёт их электрическими зарядами, потом взрывается.',
        img: quasar,
        element: [elem['shock']],
        manuf: manuf['hyperion'],
        type: type['grenade'],
        dlc: dlc['none'],
        map: '',
        poluch: 'Выпадает из “Супербезбашенного” или “Максимально Безбашенного” “варкида”',
    },

    {
        id: 'Midnight_Star',
        rarity: rarity['rare'],
        name: 'Полночная звезда (Midnight Star)',
        desc: 'Тусоваться с тобой - совсем не торт',
        descpon: '– аномально высокий для разделяющейся гранаты урон, после взрыва дочерние гранаты летят во владельца, а не к врагам, как это делают обычные разделяющиеся гранаты.',
        img: midnight_star,
        element: [elem['explosive']],
        manuf: manuf['torgue'],
        type: type['grenade'],
        dlc: dlc['skarl'],
        map: '',
        poluch: 'Является наградой за побочное задание “Записка в бутылке” на локации “Маяк Магниса”',
    },
];

export {cards};