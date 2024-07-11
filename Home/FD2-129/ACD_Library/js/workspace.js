const RCS4_LIST_BUILDING_CODE = [
    {
        designation: '3.900.1-14, в. 1',
        name: 'Изделия железобетонные для круглых колодцев водопровода и канализации',
        note: ''
    },
    {
        designation: '3.006.1-2.87',
        name: 'Сборные железобетонные каналы и тоннели из лотковых элементов',
        note: ''
    },
    {
        designation: 'Б1.016.1-3.21',
        name: 'Блоки бетонные для стен подвалов зданий и сооружений',
        note: ''
    },
    {
        designation: '3.017-3 в.1',
        name: 'Ограждения площадок и участков предприятий, зданий и сооружений',
        note: ''
    },
    {
        designation: '3.001.1-3',
        name: 'Упоры для наружных напорных трубопроводов водопровода и канализации',
        note: ''
    }
]
// --WORKSPACE--
const MAIN = document.createElement('main');
DIV_ZERO.append(MAIN);

const WORKSPACE = document.createElement('div');
WORKSPACE.classList += 'workspace';
MAIN.append(WORKSPACE);

// ---catalog - start---
const CATALOG = document.createElement('nav');
WORKSPACE.append(CATALOG);

    // ---корневой элемент
    const CATALOG_UL_ROOT = document.createElement('ul');
    CATALOG_UL_ROOT.classList.add('listree');
    CATALOG.append(CATALOG_UL_ROOT);

        const CATALOG_LI_ROOT = document.createElement('li');
        CATALOG_UL_ROOT.append(CATALOG_LI_ROOT);

            const CATALOG_DIV_ROOT = document.createElement('div');
            CATALOG_DIV_ROOT.classList.add('listree-submenu-heading');
            CATALOG_DIV_ROOT.textContent = 'Каталог';
            CATALOG_LI_ROOT.append(CATALOG_DIV_ROOT);

            // ---выпадающее меню 1-го порядка
            const UL_SUBMENU = document.createElement('ul');
            UL_SUBMENU.classList.add('listree-submenu-items');
            CATALOG_LI_ROOT.append(UL_SUBMENU);

                const LI_SUBMENU_RCS4 = document.createElement('li');
                UL_SUBMENU.append(LI_SUBMENU_RCS4);

                    const CATALOG_DIV_SUBMENU_RCS4 = document.createElement('div');
                    CATALOG_DIV_SUBMENU_RCS4.classList.add('listree-submenu-heading');
                    CATALOG_DIV_SUBMENU_RCS4.textContent = 'Хоз-питьевой водопровод';
                    LI_SUBMENU_RCS4.append(CATALOG_DIV_SUBMENU_RCS4);

                const LI_SUBMENU_RCS6 = document.createElement('li');
                UL_SUBMENU.append(LI_SUBMENU_RCS6);

                    const CATALOG_DIV_SUBMENU_RCS6 = document.createElement('div');
                    CATALOG_DIV_SUBMENU_RCS6.classList.add('listree-submenu-heading');
                    CATALOG_DIV_SUBMENU_RCS6.textContent = 'Хоз-бытовая канализация';
                    LI_SUBMENU_RCS6.append(CATALOG_DIV_SUBMENU_RCS6);

                const LI_SUBMENU_RCS7 = document.createElement('li');
                UL_SUBMENU.append(LI_SUBMENU_RCS7);

                    const CATALOG_DIV_SUBMENU_RCS7 = document.createElement('div');
                    CATALOG_DIV_SUBMENU_RCS7.classList.add('listree-submenu-heading');
                    CATALOG_DIV_SUBMENU_RCS7.textContent = 'Дождевая канализация';
                    LI_SUBMENU_RCS7.append(CATALOG_DIV_SUBMENU_RCS7);

                const LI_SUBMENU_RCS11 = document.createElement('li');
                UL_SUBMENU.append(LI_SUBMENU_RCS11);

                    const CATALOG_DIV_SUBMENU_RCS11 = document.createElement('div');
                    CATALOG_DIV_SUBMENU_RCS11.classList.add('listree-submenu-heading');
                    CATALOG_DIV_SUBMENU_RCS11.textContent = 'Контактная сеть';
                    LI_SUBMENU_RCS11.append(CATALOG_DIV_SUBMENU_RCS11);

                const LI_SUBMENU_RCS12 = document.createElement('li');
                UL_SUBMENU.append(LI_SUBMENU_RCS12);

                    const CATALOG_DIV_SUBMENU_RCS12 = document.createElement('div');
                    CATALOG_DIV_SUBMENU_RCS12.classList.add('listree-submenu-heading');
                    CATALOG_DIV_SUBMENU_RCS12.textContent = 'Наружное освещение';
                    LI_SUBMENU_RCS12.append(CATALOG_DIV_SUBMENU_RCS12);


                    // ---выпадающее меню 2-го порядка
                    // ----для RCS4
                    const UL_SUBMENU_SECOND_ROOT_RCS4 = document.createElement('ul');
                    UL_SUBMENU_SECOND_ROOT_RCS4.classList.add('listree-submenu-items');
                    LI_SUBMENU_RCS4.append(UL_SUBMENU_SECOND_ROOT_RCS4);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_GD = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_GD.textContent = 'Общие данные';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_GD);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_TWO_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_TWO_PIPES.textContent = 'Камеры (2 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_TWO_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_THREE_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_THREE_PIPES.textContent = 'Камеры (3 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_THREE_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES.textContent = 'Камеры (4 трубы без упоров)';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES_TWO_STOP = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES_TWO_STOP.textContent = 'Камеры (4 трубы с 2-мя упорами)';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_FOUR_PIPES_TWO_STOP);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_HORIZONTAL_STOP = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_HORIZONTAL_STOP.textContent = 'Горизонтальные упоры';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_HORIZONTAL_STOP);

                        const LI_SUBMENU_SECOND_ROOT_RCS4_FIXED_SUPPORT = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS4_FIXED_SUPPORT.textContent = 'Неподвижные опоры';
                        UL_SUBMENU_SECOND_ROOT_RCS4.append(LI_SUBMENU_SECOND_ROOT_RCS4_FIXED_SUPPORT);

                    // ----для RCS6
                    const UL_SUBMENU_SECOND_ROOT_RCS6 = document.createElement('ul');
                    UL_SUBMENU_SECOND_ROOT_RCS6.classList.add('listree-submenu-items');
                    LI_SUBMENU_RCS6.append(UL_SUBMENU_SECOND_ROOT_RCS6);

                        const LI_SUBMENU_SECOND_ROOT_RCS6_GD = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS6_GD.textContent = 'Общие данные';
                        UL_SUBMENU_SECOND_ROOT_RCS6.append(LI_SUBMENU_SECOND_ROOT_RCS6_GD);

                        const LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_TWO_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_TWO_PIPES.textContent = 'Камеры (2 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS6.append(LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_TWO_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_THREE_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_THREE_PIPES.textContent = 'Камеры (3 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS6.append(LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_THREE_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_FOUR_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_FOUR_PIPES.textContent = 'Камеры (4 трубы без упоров)';
                        UL_SUBMENU_SECOND_ROOT_RCS6.append(LI_SUBMENU_SECOND_ROOT_RCS6_DOMESTIC_SEWERAGE_FOUR_PIPES);

                    // ----для RCS7
                    const UL_SUBMENU_SECOND_ROOT_RCS7 = document.createElement('ul');
                    UL_SUBMENU_SECOND_ROOT_RCS7.classList.add('listree-submenu-items');
                    LI_SUBMENU_RCS7.append(UL_SUBMENU_SECOND_ROOT_RCS7);

                        const LI_SUBMENU_SECOND_ROOT_RCS7_GD = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS7_GD.textContent = 'Общие данные';
                        UL_SUBMENU_SECOND_ROOT_RCS7.append(LI_SUBMENU_SECOND_ROOT_RCS7_GD);

                        const LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_TWO_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_TWO_PIPES.textContent = 'Камеры (2 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS7.append(LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_TWO_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_THREE_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_THREE_PIPES.textContent = 'Камеры (3 трубы)';
                        UL_SUBMENU_SECOND_ROOT_RCS7.append(LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_THREE_PIPES);

                        const LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_FOUR_PIPES = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_FOUR_PIPES.textContent = 'Камеры (4 трубы без упоров)';
                        UL_SUBMENU_SECOND_ROOT_RCS7.append(LI_SUBMENU_SECOND_ROOT_RCS7_RAINWATER_DRAINAGE_FOUR_PIPES);

                    // ----для RCS11
                    const UL_SUBMENU_SECOND_ROOT_RCS11 = document.createElement('ul');
                    UL_SUBMENU_SECOND_ROOT_RCS11.classList.add('listree-submenu-items');
                    LI_SUBMENU_RCS11.append(UL_SUBMENU_SECOND_ROOT_RCS11);

                        const LI_SUBMENU_SECOND_ROOT_RCS11_GD = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS11_GD.textContent = 'Общие данные';
                        UL_SUBMENU_SECOND_ROOT_RCS11.append(LI_SUBMENU_SECOND_ROOT_RCS11_GD);

                        const LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_SUPPORTS = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_SUPPORTS.textContent = 'Опоры';
                        UL_SUBMENU_SECOND_ROOT_RCS11.append(LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_SUPPORTS);

                        const LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION.textContent = 'Фундаменты';
                        UL_SUBMENU_SECOND_ROOT_RCS11.append(LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION);

                        const LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_RINGS = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_RINGS.textContent = 'Фундаменты в кольцах';
                        UL_SUBMENU_SECOND_ROOT_RCS11.append(LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_RINGS);

                        const LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_CALCULATION = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_CALCULATION.textContent = 'Расчет фундамента';
                        UL_SUBMENU_SECOND_ROOT_RCS11.append(LI_SUBMENU_SECOND_ROOT_RCS11_TRANSPORT_NETWORK_FOUNDATION_CALCULATION);

                    // ----для RCS12
                    const UL_SUBMENU_SECOND_ROOT_RCS12 = document.createElement('ul');
                    UL_SUBMENU_SECOND_ROOT_RCS12.classList.add('listree-submenu-items');
                    LI_SUBMENU_RCS12.append(UL_SUBMENU_SECOND_ROOT_RCS12);

                        const LI_SUBMENU_SECOND_ROOT_RCS12_GD = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS12_GD.textContent = 'Общие данные';
                        UL_SUBMENU_SECOND_ROOT_RCS12.append(LI_SUBMENU_SECOND_ROOT_RCS12_GD);

                        const LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION.textContent = 'Фундаменты';
                        UL_SUBMENU_SECOND_ROOT_RCS12.append(LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION);

                        const LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_RINGS = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_RINGS.textContent = 'Фундаменты в кольцах';
                        UL_SUBMENU_SECOND_ROOT_RCS12.append(LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_RINGS);

                        const LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_CALCULATION = document.createElement('li');
                        LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_CALCULATION.textContent = 'Расчет фундамента';
                        UL_SUBMENU_SECOND_ROOT_RCS12.append(LI_SUBMENU_SECOND_ROOT_RCS12_LIGHTING_FOUNDATION_CALCULATION);

// ---open and close catalog
function listree() {
    const subMenuHeadings = document.getElementsByClassName("listree-submenu-heading");
    Array.from(subMenuHeadings).forEach(function(subMenuHeading){
        subMenuHeading.classList.add("collapsed");
        subMenuHeading.nextElementSibling.style.display = "none";
        subMenuHeading.addEventListener('click', function(event){
            event.preventDefault();
            const subMenuList = event.target.nextElementSibling;
            if(subMenuList.style.display=="none"){
                subMenuHeading.classList.remove("collapsed");
                subMenuHeading.classList.add("expanded");
                subMenuList.style.display = "block";
            }
            else {
                subMenuHeading.classList.remove("expanded");
                subMenuHeading.classList.add("collapsed");
                subMenuList.style.display = "none";
            }
            event.stopPropagation();
        });
    });
}
listree();
// ---catalog - end---

// ---VIEWPORT - start---
const VIEWPORT = document.createElement('div');
// VIEWPORT.classList = 'viewport';
WORKSPACE.append(VIEWPORT);

function createTableList() {
    const TABLE_RCS_LIST = document.createElement('table');
    VIEWPORT.append(TABLE_RCS_LIST);

    const TITLE_TABLE_RCS_LIST = document.createElement('caption');
    TITLE_TABLE_RCS_LIST.textContent = 'Ведомость сслылочных документов';
    TABLE_RCS_LIST.append(TITLE_TABLE_RCS_LIST);

    const THEAD = document.createElement('thead');
    TABLE_RCS_LIST.append(THEAD);

    const TR = document.createElement('tr');
    THEAD.append(TR);

    const TH_Designation = document.createElement('th');
    TH_Designation.textContent = 'Обозначение';
    TR.append(TH_Designation);

    const TH_NAME = document.createElement('th');
    TH_NAME.textContent = 'Наименование';
    TR.append(TH_NAME);

    const TH_NOTE = document.createElement('th');
    TH_NOTE.textContent = 'Примечание';
    TR.append(TH_NOTE);

    const TBODY = document.createElement('tbody');
    TABLE_RCS_LIST.append(TBODY);

    for (let rcsList of RCS4_LIST_BUILDING_CODE) {

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = rcsList.designation;
        tr.append(td1);

        let td2 = document.createElement('td');
        td2.textContent = rcsList.name;
        tr.append(td2);

        let td3 = document.createElement('td');
        td3.textContent = rcsList.note;
        tr.append(td3);

        TBODY.append(tr);
    }
}

createTableList();
// --container for RCS4_GD
/*
const CONTAINER_FOR_RCS4_GD = document.createElement('div');
VIEWPORT.append(CONTAINER_FOR_RCS4_GD);

function addSectionList () {
    const TYTLE_OF_SECTION_LIST = document.createElement('h1');
    TYTLE_OF_SECTION_LIST.textContent = 'Ведомость основных комплектов марки КЖ';
    CONTAINER_FOR_RCS4_GD.append(TYTLE_OF_SECTION_LIST);
    const SECTION_DESIGNATION = document.createElement('div');
    SECTION_DESIGNATION.textContent = 'Обозначение';
}
addSectionList();
*/

// ---element search - start---

// document.querySelector('form').addEventListener('click', (event) => {
//     event.preventDefault(); //- не отправляем данные из формы на сервер
//     let radio = document.querySelector("input[name='search-object']");
//     for (let i = 0; i < radio.length; i++) {
//         if (radio[i].checked) {
//             let a = document.querySelector('input[type="text"]').value;
//             let data = radio[i].value;
//             break;
//         }
//     }
//     console.log(a);
//     console.log(data);
//     form.reset(); //- очищаем форму
// });

// function searchObjectSection(){
//     if(input[type="text"].value == object_RCS4){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(input[type="text"].value == object_RCS4){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(input[type="text"].value == object_RCS6){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(input[type="text"].value == object_RCS7){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(input[type="text"].value == object_RCS11){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(input[type="text"].value == object_RCS12){
//         let a = document.querySelector('input[type="text"]').value;
//     }
//     console.log(a);
// }

// SEARCH_OBJECT_SECTION.addEventListener('click', searchObjectSection);
// function myClick(){
//     if(value == object_RCS4){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(value == object_RCS6){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(value == object_RCS7){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(value == object_RCS11){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(value == object_RCS12){
//         let a = document.querySelector('input[type="text"]').value;
//     } else if(value == object_RCS12){
//         let a = document.querySelector('input[type="text"]').value;
//     }
//     console.log(a);
// }

// document.querySelector('button').onclick = myClick;
// function myClick(){
//     let a = document.querySelector('input').value;
//     console.log(a);
// }

// document.querySelector('input[type="text"]') = ;

// input.addEventListener('keydown', function(e){
//     let a = document.querySelector('input').value;
//     console.log(a);
// }

// ---VIEWPORT - end---

// ---menu to search for items - start---

import {addRcsList} from './rcs7ListBuildingCode.js';
// addRcsList ();
