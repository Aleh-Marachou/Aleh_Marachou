// ---catalog - start---
const CATALOG = document.createElement('nav');
document.querySelector('.menu').appendChild(CATALOG);

// ---корневой элемент

const UL_SUBMENU = document.createElement('ul');
UL_SUBMENU.classList.add('listree-submenu-items');
CATALOG.append(UL_SUBMENU);

const LI_SUBMENU_RCS4 = document.createElement('li');
UL_SUBMENU.append(LI_SUBMENU_RCS4);

const CATALOG_DIV_SUBMENU_RCS4 = document.createElement('div');
CATALOG_DIV_SUBMENU_RCS4.classList.add('listree-submenu-heading');
CATALOG_DIV_SUBMENU_RCS4.textContent = 'КЖ.4';
LI_SUBMENU_RCS4.append(CATALOG_DIV_SUBMENU_RCS4);

const LI_SUBMENU_RCS6 = document.createElement('li');
UL_SUBMENU.append(LI_SUBMENU_RCS6);

const CATALOG_DIV_SUBMENU_RCS6 = document.createElement('div');
CATALOG_DIV_SUBMENU_RCS6.classList.add('listree-submenu-heading');
CATALOG_DIV_SUBMENU_RCS6.textContent = 'КЖ.6';
LI_SUBMENU_RCS6.append(CATALOG_DIV_SUBMENU_RCS6);

const LI_SUBMENU_RCS7 = document.createElement('li');
UL_SUBMENU.append(LI_SUBMENU_RCS7);

const CATALOG_DIV_SUBMENU_RCS7 = document.createElement('div');
CATALOG_DIV_SUBMENU_RCS7.classList.add('listree-submenu-heading');
CATALOG_DIV_SUBMENU_RCS7.textContent = 'КЖ.7';
LI_SUBMENU_RCS7.append(CATALOG_DIV_SUBMENU_RCS7);

const LI_SUBMENU_RCS11 = document.createElement('li');
UL_SUBMENU.append(LI_SUBMENU_RCS11);

const CATALOG_DIV_SUBMENU_RCS11 = document.createElement('div');
CATALOG_DIV_SUBMENU_RCS11.classList.add('listree-submenu-heading');
CATALOG_DIV_SUBMENU_RCS11.textContent = 'КЖ.11';
LI_SUBMENU_RCS11.append(CATALOG_DIV_SUBMENU_RCS11);

const LI_SUBMENU_RCS12 = document.createElement('li');
UL_SUBMENU.append(LI_SUBMENU_RCS12);

const CATALOG_DIV_SUBMENU_RCS12 = document.createElement('div');
CATALOG_DIV_SUBMENU_RCS12.classList.add('listree-submenu-heading');
CATALOG_DIV_SUBMENU_RCS12.textContent = 'КЖ.12';
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
    Array.from(subMenuHeadings).forEach(function (subMenuHeading) {
        subMenuHeading.classList.add("collapsed");
        subMenuHeading.nextElementSibling.style.display = "none";
        subMenuHeading.addEventListener('click', function (event) {
            event.preventDefault();
            const subMenuList = event.target.nextElementSibling;
            if (subMenuList.style.display == "none") {
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

// console.log('Произошло событие');

LI_SUBMENU_SECOND_ROOT_RCS4_GD.addEventListener('click', () => {
    document.querySelector('.od-table').style.display = 'none';
    document.querySelector('.od-RCS4').style.display = 'block';
    document.querySelector('.od-RCS6').style.display = 'none';
    document.querySelector('.od-RCS7').style.display = 'none';
    document.querySelector('.od-RCS11').style.display = 'none';
    document.querySelector('.od-RCS12').style.display = 'none';
});

LI_SUBMENU_SECOND_ROOT_RCS6_GD.addEventListener('click', () => {
    document.querySelector('.od-table').style.display = 'none';
    document.querySelector('.od-RCS4').style.display = 'none';
    document.querySelector('.od-RCS6').style.display = 'block';
    document.querySelector('.od-RCS7').style.display = 'none';
    document.querySelector('.od-RCS11').style.display = 'none';
    document.querySelector('.od-RCS12').style.display = 'none';
});

// --работает - замена на стрелочные функции--
// LI_SUBMENU_SECOND_ROOT_RCS7_GD.addEventListener('click', function () {
//     document.querySelector('.od-table').style.display = 'none';
//     document.querySelector('.od-RCS4').style.display = 'none';
//     document.querySelector('.od-RCS6').style.display = 'none';
//     document.querySelector('.od-RCS7').style.display = 'block';
// })

LI_SUBMENU_SECOND_ROOT_RCS7_GD.addEventListener('click', () => {
    document.querySelector('.od-table').style.display = 'none';
    document.querySelector('.od-RCS4').style.display = 'none';
    document.querySelector('.od-RCS6').style.display = 'none';
    document.querySelector('.od-RCS7').style.display = 'block';
    document.querySelector('.od-RCS11').style.display = 'none';
    document.querySelector('.od-RCS12').style.display = 'none';
});

LI_SUBMENU_SECOND_ROOT_RCS4_WATER_WELL_TWO_PIPES.addEventListener('click', createMenuSearchRCS4Pipe2());

function createMenuSearchRCS4Pipe2() {
    // document.querySelector('.search > div').style.visibility = 'visible';

    const BOX_MENU_SEARCH = document.createElement('div');
    document.querySelector('.search').appendChild(BOX_MENU_SEARCH);

    const LABEL_OBJECT_NUNBER = document.createElement('label');
    BOX_MENU_SEARCH.append(LABEL_OBJECT_NUNBER);

    const P_OBJECT_NUNBER = document.createElement('p');
    P_OBJECT_NUNBER.textContent += 'Номер объекта';
    LABEL_OBJECT_NUNBER.append(P_OBJECT_NUNBER);

    const INPUT_OBJECT_NUNBER = document.createElement('input');
    INPUT_OBJECT_NUNBER.setAttribute('type', 'text');
    INPUT_OBJECT_NUNBER.setAttribute('placeholder', '15.6.20');
    LABEL_OBJECT_NUNBER.append(INPUT_OBJECT_NUNBER);

    const LABEL_DIAMETER_PIPE_INCOMING = document.createElement('label');
    BOX_MENU_SEARCH.append(LABEL_DIAMETER_PIPE_INCOMING);
    BOX_MENU_SEARCH.append(LABEL_DIAMETER_PIPE_INCOMING);

    const P_LABEL_DIAMETER_PIPE_INCOMING = document.createElement('p');
    P_LABEL_DIAMETER_PIPE_INCOMING.textContent += 'Диаметр подводящей трубы';
    LABEL_DIAMETER_PIPE_INCOMING.append(P_LABEL_DIAMETER_PIPE_INCOMING);

    //--СПИСОК ПОДВОДЯЩИХ ТРУБ--
    const SELECT_DIAMETER_PIPE_INCOMING = document.createElement('select');
    SELECT_DIAMETER_PIPE_INCOMING.setAttribute('size', '1');
    LABEL_DIAMETER_PIPE_INCOMING.append(SELECT_DIAMETER_PIPE_INCOMING);

    //--СПИСОК ПЭ ТРУБ--
    const OPTGROUP_DIAMETER_PIPE_INCOMING_PE = document.createElement('optgroup');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.setAttribute('label', 'Трубы ПЭ');
    SELECT_DIAMETER_PIPE_INCOMING.append(OPTGROUP_DIAMETER_PIPE_INCOMING_PE);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_225 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_225.textContent += 'ф225';
    OPTION_DIAMETER_PIPE_INCOMING_PE_225.setAttribute('value', 'PE_225');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_225);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_315 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_315.textContent += 'ф315';
    OPTION_DIAMETER_PIPE_INCOMING_PE_315.setAttribute('value', 'PE_315');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_315);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_400 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_400.textContent += 'ф400';
    OPTION_DIAMETER_PIPE_INCOMING_PE_400.setAttribute('value', 'PE_400');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_400);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_500 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_500.textContent += 'ф500';
    OPTION_DIAMETER_PIPE_INCOMING_PE_500.setAttribute('value', 'PE_500');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_500);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_600 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_600.textContent += 'ф600';
    OPTION_DIAMETER_PIPE_INCOMING_PE_600.setAttribute('value', 'PE_600');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_600);

    const OPTION_DIAMETER_PIPE_INCOMING_PE_800 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_PE_800.textContent += 'ф800';
    OPTION_DIAMETER_PIPE_INCOMING_PE_800.setAttribute('value', 'PE_800');
    OPTGROUP_DIAMETER_PIPE_INCOMING_PE.append(OPTION_DIAMETER_PIPE_INCOMING_PE_800);

    //--СПИСОК СТЛЬНЫХ ТРУБ--
    const OPTGROUP_DIAMETER_PIPE_INCOMING_ST = document.createElement('optgroup');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.setAttribute('label', 'Трубы стальные');
    SELECT_DIAMETER_PIPE_INCOMING.append(OPTGROUP_DIAMETER_PIPE_INCOMING_ST);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_219 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_219.textContent += 'ф219';
    OPTION_DIAMETER_PIPE_INCOMING_ST_219.setAttribute('value', 'ST_219');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_219);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_325 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_325.textContent += 'ф325';
    OPTION_DIAMETER_PIPE_INCOMING_ST_325.setAttribute('value', 'ST_325');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_325);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_426 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_426.textContent += 'ф426';
    OPTION_DIAMETER_PIPE_INCOMING_ST_426.setAttribute('value', 'ST_426');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_426);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_530 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_530.textContent += 'ф530';
    OPTION_DIAMETER_PIPE_INCOMING_ST_530.setAttribute('value', 'ST_530');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_530);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_630 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_630.textContent += 'ф630';
    OPTION_DIAMETER_PIPE_INCOMING_ST_630.setAttribute('value', 'ST_630');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_630);

    const OPTION_DIAMETER_PIPE_INCOMING_ST_820 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_ST_820.textContent += 'ф820';
    OPTION_DIAMETER_PIPE_INCOMING_ST_820.setAttribute('value', 'ST_820');
    OPTGROUP_DIAMETER_PIPE_INCOMING_ST.append(OPTION_DIAMETER_PIPE_INCOMING_ST_820);

    //--СПИСОК ЧУГУННЫХ ТРУБ--
    const OPTGROUP_DIAMETER_PIPE_INCOMING_CI = document.createElement('optgroup');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.setAttribute('label', 'Трубы чугунные');
    SELECT_DIAMETER_PIPE_INCOMING.append(OPTGROUP_DIAMETER_PIPE_INCOMING_CI);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_200 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_200.textContent += 'ф200';
    OPTION_DIAMETER_PIPE_INCOMING_CI_200.setAttribute('value', 'CI_200');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_200);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_300 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_300.textContent += 'ф300';
    OPTION_DIAMETER_PIPE_INCOMING_CI_300.setAttribute('value', 'CI_300');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_300);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_400 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_400.textContent += 'ф400';
    OPTION_DIAMETER_PIPE_INCOMING_CI_400.setAttribute('value', 'CI_400');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_400);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_500 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_500.textContent += 'ф500';
    OPTION_DIAMETER_PIPE_INCOMING_CI_500.setAttribute('value', 'CI_500');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_500);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_600 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_600.textContent += 'ф600';
    OPTION_DIAMETER_PIPE_INCOMING_CI_600.setAttribute('value', 'CI_600');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_600);

    const OPTION_DIAMETER_PIPE_INCOMING_CI_800 = document.createElement('option');
    OPTION_DIAMETER_PIPE_INCOMING_CI_800.textContent += 'ф800';
    OPTION_DIAMETER_PIPE_INCOMING_CI_800.setAttribute('value', 'CI_800');
    OPTGROUP_DIAMETER_PIPE_INCOMING_CI.append(OPTION_DIAMETER_PIPE_INCOMING_CI_800);

    const LABEL_DIAMETER_PIPE_OUTCOMING = document.createElement('label');
    BOX_MENU_SEARCH.append(LABEL_DIAMETER_PIPE_OUTCOMING);
    BOX_MENU_SEARCH.append(LABEL_DIAMETER_PIPE_OUTCOMING);

    const P_LABEL_DIAMETER_PIPE_OUTCOMING = document.createElement('p');
    P_LABEL_DIAMETER_PIPE_OUTCOMING.textContent += 'Диаметр отводящей трубы';
    LABEL_DIAMETER_PIPE_OUTCOMING.append(P_LABEL_DIAMETER_PIPE_OUTCOMING);

    //--СПИСОК ОТВОДЯЩИХ ТРУБ--
    const SELECT_DIAMETER_PIPE_OUTCOMING = document.createElement('select');
    SELECT_DIAMETER_PIPE_OUTCOMING.setAttribute('size', '1');
    LABEL_DIAMETER_PIPE_OUTCOMING.append(SELECT_DIAMETER_PIPE_OUTCOMING);

    //--СПИСОК ПЭ ТРУБ--
    const OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE = document.createElement('optgroup');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.setAttribute('label', 'Трубы ПЭ');
    SELECT_DIAMETER_PIPE_OUTCOMING.append(OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_225 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_225.textContent += 'ф225';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_225.setAttribute('value', 'PE_225');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_225);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_315 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_315.textContent += 'ф315';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_315.setAttribute('value', 'PE_315');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_315);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_400 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_400.textContent += 'ф400';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_400.setAttribute('value', 'PE_400');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_400);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_500 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_500.textContent += 'ф500';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_500.setAttribute('value', 'PE_500');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_500);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_600 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_600.textContent += 'ф600';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_600.setAttribute('value', 'PE_600');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_600);

    const OPTION_DIAMETER_PIPE_OUTCOMING_PE_800 = document.createElement('option');
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_800.textContent += 'ф800';
    OPTION_DIAMETER_PIPE_OUTCOMING_PE_800.setAttribute('value', 'PE_800');
    OPTGROUP_DIAMETER_PIPE_OUTCOMING_PE.append(OPTION_DIAMETER_PIPE_OUTCOMING_PE_800);
}
