let supportMass = 0.981;
let H = 10;
let b_f = 1.2;
let l_f = 1.2;
let d_f = 2.6;
let gama_II = 17.6;
let fee_II_Enter = 0;
let q_q = 19.62;

// Коэффициенты для расчета ветровой нагрузки
const const_c_dir = 1;
const const_c_season = 1;
const const_v_b0 = 23;
const const_z_0ji = 0.05;
const const_c_0_z = 1;
const const_k_i = 1;

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

// Расчет ветровой нагрузки
function getWind(supportHigt) {
    let k_r = 0.19 * Math.pow(supportHigt / const_z_0ji, 0.07);
    let v_b = const_c_dir * const_c_season * const_v_b0;
    let c_r_z = k_r * Math.log(supportHigt / const_z_0ji);
    let v_m_z = c_r_z * const_c_0_z * v_b;

    // округляем полученные результаты до 3-х знаков
    let k_r_Exit = + k_r.toFixed(3);
    let c_r_z_Exit = + c_r_z.toFixed(3);
    let v_m_z_Exit = + v_m_z.toFixed(3);

    // выводим полученные результаты в HTML
    replaceVariables(const_c_dir, '.c_dir');
    replaceVariables(const_c_season, '.c_season');
    replaceVariables(const_v_b0, '.v_b0');
    replaceVariables(const_z_0ji, '.z_0ji');
    replaceVariables(const_c_0_z, '.c_0_z');
    replaceVariables(const_k_i, '.k_i');



    replaceVariables(supportHigt, '.supportHigt');
    replaceVariables(c_r_z_Exit, '.c_r_z');
    replaceVariables(k_r_Exit, '.k_r');
    replaceVariables(v_b, '.v_b');
    replaceVariables(v_m_z_Exit, '.v_m_z');
}
getWind(H)

// console.log('Сигма_а = ' + sigma_a);
// console.log('Сигма_а (округление) = ' + sigma_a_Exit);
// console.log('Ea = ' + Ea);
// console.log('Eа (округление) = ' + Ea_Exit);

// console.log('Сигма_p = ' + sigma_p);
// console.log('Сигма_p (округление) = ' + sigma_p_Exit);
// console.log('Ep = ' + Ep);
// console.log('Ep (округление) = ' + Ep_Exit);

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
