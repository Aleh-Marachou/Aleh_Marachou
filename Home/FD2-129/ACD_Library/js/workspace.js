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

//import {addRcsList} from './rcs7ListBuildingCode.js';
// addRcsList ();
