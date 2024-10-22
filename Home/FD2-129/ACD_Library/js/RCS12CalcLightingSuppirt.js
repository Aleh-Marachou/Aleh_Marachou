let supportMass = 0.981;
let H = 9;
let Dsupport = 0.20;
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
const const_z_0 = 0.3;
const const_z_0ji = 0.05;
const const_k_i = 1;
const const_c_0_z = 1;
const const_ro = 1.25;
const const_p = 0.2;
const KINEMATIC_VISCOSITY = 0.000015;
const const_c_p0 = 1.5;
const PSI_LYAMDA_0 = 1;

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
function getWind(supportHigt, supportDiametr) {
    let k_r = 0.19 * Math.pow(const_z_0 / const_z_0ji, 0.07);
    let v_b = const_c_dir * const_c_season * const_v_b0;
    let c_r_z = k_r * Math.log(supportHigt / const_z_0);
    let v_m_z = c_r_z * const_c_0_z * v_b;
    let I_v_z = const_k_i / (const_c_0_z * Math.log(supportHigt / const_z_0ji));
    let q_p_z_e = (1 + 7 * I_v_z) * 0.5 * const_ro * Math.pow(v_m_z, 2);
    let vz_e = Math.pow(2 * q_p_z_e / const_p, 0.5);
    let R_e = supportDiametr * vz_e / KINEMATIC_VISCOSITY;
    let c_pe = const_c_p0 * PSI_LYAMDA_0;
    let w_e = q_p_z_e * c_pe;

    // перевод из Па в кН/м2
    let q_p_z_e_translate = q_p_z_e / 1000; /* I dont't use*/

    // перевод в степень
    let R_e_translate = R_e / 1000000;

    // округляем полученные результаты до 3-х знаков
    let k_r_Exit = + k_r.toFixed(3);
    let c_r_z_Exit = + c_r_z.toFixed(3);
    let v_m_z_Exit = + v_m_z.toFixed(3);
    let I_v_z_Exit = + I_v_z.toFixed(3);
    let q_p_z_e_Exit = + q_p_z_e.toFixed(3);
    let q_p_z_e_translate_Exit = + q_p_z_e_translate.toFixed(3); /* I dont't use*/
    let vz_e_Exit = + vz_e.toFixed(3);
    let R_e_Exit = + R_e_translate.toFixed(3);
    let w_e_Exit = + w_e.toFixed(3);

    // перевод в степень
    let w_e_translate = w_e / 1000;
    let w_e_translate_Exit = + w_e_translate.toFixed(3);


    // выводим полученные результаты в HTML
    replaceVariables(const_c_dir, '.c_dir');
    replaceVariables(const_c_season, '.c_season');
    replaceVariables(const_v_b0, '.v_b0');
    replaceVariables(const_z_0, '.z_0');
    replaceVariables(const_z_0ji, '.z_0ji');
    replaceVariables(const_c_0_z, '.c_0_z');
    replaceVariables(const_k_i, '.k_i');
    replaceVariables(const_ro, '.ro');
    replaceVariables(const_p, '.p');
    replaceVariables(KINEMATIC_VISCOSITY, '.kinematic_viscosity');
    replaceVariables(const_c_p0, '.c_p0');
    replaceVariables(PSI_LYAMDA_0, '.psi_lyambda0');

    replaceVariables(supportHigt, '.supportHigt');
    replaceVariables(c_r_z_Exit, '.c_r_z');
    replaceVariables(k_r_Exit, '.k_r');
    replaceVariables(v_b, '.v_b');
    replaceVariables(v_m_z_Exit, '.v_m_z');
    replaceVariables(I_v_z_Exit, '.I_v_z');
    replaceVariables(q_p_z_e_Exit, '.q_p_z_e');
    replaceVariables(vz_e_Exit, '.vz_e');
    replaceVariables(supportDiametr, '.supportDiametr');
    replaceVariables(R_e_Exit, '.R_e');
    replaceVariables(c_pe, '.c_pe');
    replaceVariables(w_e_Exit, '.w_e');
    replaceVariables(w_e_translate_Exit, '.w_e_translate_Exit');

}
getWind(H, Dsupport)

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
