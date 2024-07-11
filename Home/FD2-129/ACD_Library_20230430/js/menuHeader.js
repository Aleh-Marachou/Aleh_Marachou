const DIV_ZERO = document.createElement("div");
DIV_ZERO.classList.add('zero');
document.body.append(DIV_ZERO);

const NEW_HEADER = document.createElement('header');
NEW_HEADER.classList.add('header');
DIV_ZERO.append(NEW_HEADER);

const MENU_CONTAINER = document.createElement('div');
MENU_CONTAINER.classList.add('header-container');
NEW_HEADER.append(MENU_CONTAINER);

const MIP_LOGO = document.createElement('img');
MIP_LOGO.src = 'img/mipLogo.gif';
MENU_CONTAINER.append(MIP_LOGO);

// ---catalog - start---
const CATALOG = document.createElement('nav');
MENU_CONTAINER.append(CATALOG);

    // ---корневой элемент
    const CATALOG_UL_ROOT = document.createElement('ul');
    MENU_CONTAINER.classList.add('listree');
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



//---search---
const FORM_SEARCH_CONTAINER = document.createElement('div');
MENU_CONTAINER.append(FORM_SEARCH_CONTAINER);

const FORM_SEARCH = document.createElement('input');
