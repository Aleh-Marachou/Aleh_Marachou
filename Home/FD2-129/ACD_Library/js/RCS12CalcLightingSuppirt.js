let supportMass = 100;
let H = 10;
let b_f = 1.2;
let l_f = 1.2;
let d_f = 2.6;
let gama_II = 17.6;
let fee_II_Enter = 0;
let q_q = 19.62;

let fee_II = fee_II_Enter > 0 ? fee_II_Enter : 30;

// let tanFee_II_Square = Math.pow(Math.tan((Math.PI / 4) + 0.5 * (fee_II * (Math.PI / 180))), 2);

let sigma_a = gama_II * d_f * Math.pow(Math.tan((Math.PI / 4) - 0.5 * (fee_II * (Math.PI / 180))), 2);
let Ea = 0.5 * sigma_a * d_f * b_f;

let sigma_p = gama_II * d_f * Math.pow(Math.tan((Math.PI / 4) + 0.5 * (fee_II * (Math.PI / 180))), 2);
let Ep = 0.5 * sigma_p * d_f * b_f;

let Eq = q_q * d_f * b_f * Math.pow(Math.tan((Math.PI / 4) - 0.5 * (fee_II * (Math.PI / 180))), 2);

// округляем полученные результаты до 3-х знаков
let sigma_a_Exit = + sigma_a.toFixed(3);
let Ea_Exit = + Ea.toFixed(3);

let sigma_p_Exit = + sigma_p.toFixed(3);
let Ep_Exit = + Ep.toFixed(3);

let Eq_Exit = + Eq.toFixed(3);

console.log('Сигма_а = ' + sigma_a);
console.log('Сигма_а (округление) = ' + sigma_a_Exit);
console.log('Ea = ' + Ea);
console.log('Eа (округление) = ' + Ea_Exit);

console.log('Сигма_p = ' + sigma_p);
console.log('Сигма_p (округление) = ' + sigma_p_Exit);
console.log('Ep = ' + Ep);
console.log('Ep (округление) = ' + Ep_Exit);

function replaceVariables(valueOfVariable, classOfVariable) {
    let arrayOfClasses = document.querySelectorAll(classOfVariable);
    for (let elem of arrayOfClasses) {
        // console.log(elem.textContent);
        elem.textContent = valueOfVariable;
    };
};
replaceVariables(d_f, '.d_f');
replaceVariables(b_f, '.b_f');
replaceVariables(q_q, '.q_q');

replaceVariables(gama_II, '.gama_II');
replaceVariables(fee_II, '.fee_II');

replaceVariables(sigma_a_Exit, '.sigma_a');
replaceVariables(Ea_Exit, '.Ea');
replaceVariables(sigma_p_Exit, '.sigma_p');
replaceVariables(Ep_Exit, '.Ep');
replaceVariables(Eq_Exit, '.Eq');
// createTableList();
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
