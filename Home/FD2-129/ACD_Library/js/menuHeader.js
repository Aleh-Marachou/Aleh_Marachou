// 1. Описываем структуру меню в виде массива данных
const menuData = [
    {
        title: "КЖ.3",
        submenu: [
            { text: "Общие данные", url: "acdLibrary.html" },
            { text: "Фундаменты", url: "kzh3_foundations.html" },
            { text: "Экспертиза", url: "kzh3_expertise.html" }
        ]
    },
    {
        title: "КЖ.4",
        submenu: [
            { text: "Общие данные", url: "acdLibrary.html" },
            { text: "Камеры", url: "kzh4_chambers.html" },
            { text: "Колодцы", url: "kzh4_wells.html" },
            { text: "Крышки деревянные", url: "kzh4_covers.html" },
            { text: "Лестницы", url: "kzh4_ladders.html" },
            { text: "Неподвижные опоры", url: "kzh4_supports_fixed.html" },
            { text: "Упоры", url: "kzh4_stops.html" },
            { text: "Экспертиза", url: "kzh4_expertise.html" }
        ]
    },
    {
        title: "КЖ.6",
        submenu: [
            { text: "Общие данные", url: "kzh6_general.html" },
            { text: "Камеры", url: "kzh6_chambers.html" },
            { text: "Колодцы", url: "kzh6_wells.html" },
            { text: "Экспертиза", url: "kzh6_expertise.html" }
        ]
    },
    {
        title: "КЖ.7",
        submenu: [
            { text: "Общие данные", url: "kzh7_general.html" },
            { text: "Камеры", url: "kzh7_chambers.html" },
            { text: "Колодцы смотровые", url: "kzh7_wells_view.html" },
            { text: "Колодцы дождеприемные", url: "kzh7_wells_rain.html" },
            { text: "Экспертиза", url: "kzh7_expertise.html" }
        ]
    },
    {
        title: "КЖ.8",
        submenu: [
            { text: "Общие данные", url: "kzh8_general.html" },
            { text: "Камеры", url: "kzh8_chambers.html" },
            { text: "Опоры неподвижные", url: "kzh8_supports_fixed.html" },
            { text: "Опоры скользящие", url: "kzh8_supports_sliding.html" },
            { text: "Углы поворота", url: "kzh8_angles.html" },
            { text: "Узлы выхода", url: "kzh8_exit_nodes.html" },
            { text: "Узлы герметизации", url: "kzh8_sealing_nodes.html" },
            { text: "Экспертиза", url: "kzh8_expertise.html" }
        ]
    },
    {
        title: "КЖ.10",
        submenu: [
            { text: "Общие данные", url: "kzh10_general.html" },
            { text: "Камеры", url: "kzh10_chambers.html" },
            { text: "Колодцы", url: "kzh10_wells.html" },
            { text: "Плиты фундаментные", url: "kzh10_slabs.html" },
            { text: "Экспертиза", url: "kzh10_expertise.html" }
        ]
    },
    {
        title: "КЖ.11",
        submenu: [
            { text: "Общие данные", url: "kzh11_general.html" },
            { text: "Фундаменты", url: "kzh11_foundations.html" },
            { text: "Стойки", url: "kzh11_posts.html" },
            { text: "Дверца", url: "kzh11_doors.html" },
            { text: "Экспертиза", url: "kzh11_expertise.html" }
        ]
    },
    {
        title: "КЖ.12",
        submenu: [
            { text: "Общие данные", url: "kzh12_general.html" },
            { text: "Фундаменты (поиск)", url: "RCS12BaseSearch.html" },
            { text: "Фундаменты (расчет)", url: "RCS12CalcLightingSupport.html" },
            { text: "Стойки", url: "kzh12_posts.html" },
            { text: "Дверца", url: "kzh12_doors.html" },
            { text: "Экспертиза", url: "kzh12_expertise.html" }
        ]
    },
    {
        title: "Нормы",
        submenu: [
            { text: "Беларусь" },
            { text: "Россия" },
            { text: "Казахстан" },
            { text: "Азейбарджан" },
            { text: "Армения" },
            { text: "Кыргыстан" },
            { text: "Таджикистан" },
            { text: "Туркменистан" },
            { text: "Узбекистан" }
        ]
    }
];

// --мое меню 20261106
const HEADER_CONTAINER = document.createElement('div');
HEADER_CONTAINER.classList.add('menu');
document.querySelector('header').appendChild(HEADER_CONTAINER);

// 2. Находим контейнер .menu на странице
const menuContainer = document.querySelector('.menu');

if (menuContainer) {
    const menuWrap = document.createElement('div');
    menuWrap.className = 'menu_wrap';

    // Создаем блок логотипа
    const logoDiv = document.createElement('div');
    logoDiv.innerHTML = `
        <a href="acdLibrary.html">
            <img src="img/logoMIP.jpeg" alt="МИНСКИНЖПРОЕКТ" class="mip-logo">
        </a>
    `;
    menuWrap.appendChild(logoDiv);

    // Создаем блок навигации
    const navDiv = document.createElement('div');
    const nav = document.createElement('nav');
    const topMenuUl = document.createElement('ul');
    topMenuUl.className = 'topmenu';

    // Генерируем HTML на основе массива menuData
    menuData.forEach(item => {
        const li = document.createElement('li');

        // Ссылка главного пункта (например, КЖ.3) — обычно оставляют #, если это просто раскрывашка
        const mainLink = document.createElement('a');
        mainLink.href = '#';
        mainLink.textContent = item.title;
        li.appendChild(mainLink);

        if (item.submenu && item.submenu.length > 0) {
            const subMenuUl = document.createElement('ul');
            subMenuUl.className = 'submenu';

            item.submenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');

                // Вставляем РЕАЛЬНУЮ ССЫЛКУ из свойства url объекта
                subLink.href = subItem.url;
                subLink.textContent = subItem.text;

                subLi.appendChild(subLink);
                subMenuUl.appendChild(subLi);
            });

            li.appendChild(subMenuUl);
        }

        topMenuUl.appendChild(li);
    });

    nav.appendChild(topMenuUl);
    navDiv.appendChild(nav);
    menuWrap.appendChild(navDiv);

    // Очищаем старое меню и вставляем новое
    menuContainer.innerHTML = '';
    menuContainer.appendChild(menuWrap);
}

function adjustContentOffset() {
    const header = document.querySelector('header');
    const wrap = document.querySelector('main');

    if (header && wrap) {
        // Измеряем реальную высоту шапки + 10px верхнего отступа
        const headerHeight = header.offsetHeight;
        // Задаем этот отступ контенту автоматически
        wrap.style.marginTop = `${headerHeight}px`;
    }
}
