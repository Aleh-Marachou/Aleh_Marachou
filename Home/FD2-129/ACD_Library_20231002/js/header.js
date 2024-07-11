const DIV_ZERO = document.createElement("div");
DIV_ZERO.classList.add('zero');
document.body.append(DIV_ZERO);

const HEADER = document.createElement('header');
HEADER.classList.add('header');
DIV_ZERO.append(HEADER);

const HEADER_CONTAINER = document.createElement('div');
HEADER_CONTAINER.classList.add('header-container');
HEADER.append(HEADER_CONTAINER);

    const MIP_LOGO = document.createElement('img');
    MIP_LOGO.src = 'img/logoMIP.jpeg';
    MIP_LOGO.setAttribute('alt', 'МИНСКИНЖПРОЕКТ');
    HEADER_CONTAINER.append(MIP_LOGO);

//---search---
const FORM_SEARCH_OBJECT_CONTAINER = document.createElement('div');
FORM_SEARCH_OBJECT_CONTAINER.classList.add('search-container');
HEADER_CONTAINER.append(FORM_SEARCH_OBJECT_CONTAINER);

    const FORM_SEARCH_OBJECT = document.createElement('form');
    FORM_SEARCH_OBJECT.setAttribute('name', 'form-search-object');
    FORM_SEARCH_OBJECT_CONTAINER.append(FORM_SEARCH_OBJECT);

    const SEARCH_LINE = document.createElement('input');
    SEARCH_LINE.setAttribute('type', 'text');
    SEARCH_LINE.setAttribute('name', 'objectSearch');
    SEARCH_LINE.setAttribute('placeholder', 'Поиск объекта. Например: "15.6.35"');
    FORM_SEARCH_OBJECT.append(SEARCH_LINE);

    const BUTTON_SEARCH_OBJECT = document.createElement('button');
    BUTTON_SEARCH_OBJECT.setAttribute('type', 'submit');
    BUTTON_SEARCH_OBJECT.textContent += 'ПОИСК';
    FORM_SEARCH_OBJECT.append(BUTTON_SEARCH_OBJECT);

    const SEARCH_OBJECT_RCS4 = document.createElement('input');
    SEARCH_OBJECT_RCS4.setAttribute('type', 'radio');
    SEARCH_OBJECT_RCS4.setAttribute('name', 'search-object');
    SEARCH_OBJECT_RCS4.setAttribute('value', 'RCS4');
    SEARCH_OBJECT_RCS4.setAttribute('id', 'search_object_RCS4');
    FORM_SEARCH_OBJECT.append(SEARCH_OBJECT_RCS4);

    const LABEL_SEARCH_OBJECT_RCS4 = document.createElement('label');
    LABEL_SEARCH_OBJECT_RCS4.setAttribute('for', 'search_object_RCS4');
    LABEL_SEARCH_OBJECT_RCS4.textContent = 'КЖ.4';
    FORM_SEARCH_OBJECT.append(LABEL_SEARCH_OBJECT_RCS4);

    const SEARCH_OBJECT_RCS6 = document.createElement('input');
    SEARCH_OBJECT_RCS6.setAttribute('type', 'radio');
    SEARCH_OBJECT_RCS6.setAttribute('name', 'search-object');
    SEARCH_OBJECT_RCS6.setAttribute('value', 'RCS6');
    SEARCH_OBJECT_RCS6.setAttribute('id', 'search_object_RCS6');
    FORM_SEARCH_OBJECT.append(SEARCH_OBJECT_RCS6);

    const LABEL_SEARCH_OBJECT_RCS6 = document.createElement('label');
    LABEL_SEARCH_OBJECT_RCS6.setAttribute('for', 'search_object_RCS6');
    LABEL_SEARCH_OBJECT_RCS6.textContent = 'КЖ.6';
    FORM_SEARCH_OBJECT.append(LABEL_SEARCH_OBJECT_RCS6);

    const SEARCH_OBJECT_RCS7 = document.createElement('input');
    SEARCH_OBJECT_RCS7.setAttribute('type', 'radio');
    SEARCH_OBJECT_RCS7.setAttribute('name', 'search-object');
    SEARCH_OBJECT_RCS7.setAttribute('value', 'RCS7');
    SEARCH_OBJECT_RCS7.setAttribute('id', 'search_object_RCS7');
    FORM_SEARCH_OBJECT.append(SEARCH_OBJECT_RCS7);

    const LABEL_SEARCH_OBJECT_RCS7 = document.createElement('label');
    LABEL_SEARCH_OBJECT_RCS7.setAttribute('for', 'search_object_RCS7');
    LABEL_SEARCH_OBJECT_RCS7.textContent = 'КЖ.7';
    FORM_SEARCH_OBJECT.append(LABEL_SEARCH_OBJECT_RCS7);

    const SEARCH_OBJECT_RCS11 = document.createElement('input');
    SEARCH_OBJECT_RCS11.setAttribute('type', 'radio');
    SEARCH_OBJECT_RCS11.setAttribute('name', 'search-object');
    SEARCH_OBJECT_RCS11.setAttribute('value', 'RCS11');
    SEARCH_OBJECT_RCS11.setAttribute('id', 'search_object_RCS11');
    FORM_SEARCH_OBJECT.append(SEARCH_OBJECT_RCS11);

    const LABEL_SEARCH_OBJECT_RCS11 = document.createElement('label');
    LABEL_SEARCH_OBJECT_RCS11.setAttribute('for', 'search_object_RCS11');
    LABEL_SEARCH_OBJECT_RCS11.textContent = 'КЖ.11';
    FORM_SEARCH_OBJECT.append(LABEL_SEARCH_OBJECT_RCS11);

    const SEARCH_OBJECT_RCS12 = document.createElement('input');
    SEARCH_OBJECT_RCS12.setAttribute('type', 'radio');
    SEARCH_OBJECT_RCS12.setAttribute('name', 'search-object');
    SEARCH_OBJECT_RCS12.setAttribute('value', 'RCS12');
    SEARCH_OBJECT_RCS12.setAttribute('id', 'search_object_RCS12');
    FORM_SEARCH_OBJECT.append(SEARCH_OBJECT_RCS12);

    const LABEL_SEARCH_OBJECT_RCS12 = document.createElement('label');
    LABEL_SEARCH_OBJECT_RCS12.setAttribute('for', 'search_object_RCS12');
    LABEL_SEARCH_OBJECT_RCS12.textContent = 'КЖ.12';
    FORM_SEARCH_OBJECT.append(LABEL_SEARCH_OBJECT_RCS12);
        
// ---кнопка для входа на сайт---
const BUTTON_ENTRANCE = document.createElement('button');
BUTTON_ENTRANCE.setAttribute('type', 'button');
BUTTON_ENTRANCE.textContent += 'Вход';
HEADER_CONTAINER.append(BUTTON_ENTRANCE);