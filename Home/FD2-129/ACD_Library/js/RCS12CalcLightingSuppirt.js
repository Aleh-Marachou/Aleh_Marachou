// Исходые данные
let supportMass = 0.1;
let supportHigt = 9;
let supportDiametr = 0.16;
let b_f = 1.0;
let l_f = 1.0;
let d_f = 1.0;
let gama_II = 1.8;
let c_II_Enter = 10;    /*значение в кПа*/
let fee_II_Enter = 32;
let q_q = 2;

// Коэффициенты для расчета массы фундамента
const RO_CONCR = 2.4;   /*плотность бетона в т/м2*/

// Коэффициенты сочетания нагрузок
const GAMA_Q = 1.5;
const PSI_0 = 0.7;
const GAMA_Gsup = 1.1;
const GAMA_Ginf = 0.9;

// let tanFee_II_Square = Math.pow(Math.tan((Math.PI / 4) + 0.5 * (fee_II * (Math.PI / 180))), 2);

function get_c_II(c_II_Enter) {
    if (c_II_Enter <= 0) {
        let c_II = 0;
        return c_II;
    } else {
        let c_II = c_II_Enter / 9.81;   /*значение в т/м2*/
        let c_II_Fixed = + c_II.toFixed(3);
        replaceVariables(c_II_Fixed, '.c_II');
        return c_II;
    }
};

function get_fee_II(fee_II_Enter) {
    if (fee_II_Enter <= 0) {
        let fee_II = 0;
        return fee_II;
    } else {
        let fee_II = fee_II_Enter;
        replaceVariables(fee_II, '.fee_II');
        return fee_II;
    }
};

function getN(supportMass) {
    const GAMA_Gsup = 1.35;

    let N = GAMA_Gsup * supportMass;
    let N_Fixed = + N.toFixed(3);
    replaceVariables(N_Fixed, '.N_Fixed');
    return N;
};

function getGf(RO_CONCR, b_f, l_f, d_f) {
    let Gf = RO_CONCR * b_f * l_f * d_f;
    replaceVariables(Gf, '.Gf');
    return Gf;
};

function getSigma_a(gama_II, fee_II, d_f) {
    if (fee_II > 0) {
        let sigma_a = gama_II * d_f * Math.pow(Math.tan((Math.PI / 4) - 0.5 * (fee_II * (Math.PI / 180))), 2);
        let sigma_a_Fixed = + sigma_a.toFixed(3);
        replaceVariables(sigma_a_Fixed, '.sigma_a');
        return sigma_a;
    } else {
        let sigma_a = gama_II * d_f * 0.33;
        let sigma_a_Fixed = + sigma_a.toFixed(3);
        replaceVariables('0.333', '.sigma_a_coefFriction');
        replaceVariables(sigma_a_Fixed, '.sigma_a');
        return sigma_a;
    }
};

function getSigma_p(gama_II, fee_II, d_f) {
    if (fee_II > 0) {
        let sigma_p = gama_II * d_f * Math.pow(Math.tan((Math.PI / 4) + 0.5 * (fee_II * (Math.PI / 180))), 2);
        let sigma_p_Fixed = + sigma_p.toFixed(3);
        replaceVariables(sigma_p_Fixed, '.sigma_p');
        return sigma_p;
    } else {
        let sigma_p = gama_II * d_f * 3;
        let sigma_p_Fixed = + sigma_p.toFixed(3);
        replaceVariables('3', '.sigma_p_coefFriction');
        replaceVariables(sigma_p_Fixed, '.sigma_p');
        return sigma_p;
    }
};

function getEa(sigma_a, d_f, b_f) {
    let Ea = 0.5 * sigma_a * d_f * b_f;
    let Ea_Fixed = + Ea.toFixed(3);
    replaceVariables(Ea_Fixed, '.Ea');
    return Ea;
};

function getEp(sigma_p, d_f, b_f) {
    let Ep = 0.5 * sigma_p * d_f * b_f;
    let Ep_Fixed = + Ep.toFixed(3);
    replaceVariables(Ep_Fixed, '.Ep');
    return Ep;
};

function getEq(q_q, d_f, b_f, fee_II) {
    if (fee_II > 0) {
        let Eq = q_q * d_f * b_f * Math.pow(Math.tan((Math.PI / 4) - 0.5 * (fee_II * (Math.PI / 180))), 2);
        let Eq_Fixed = + Eq.toFixed(3);
        replaceVariables(Eq_Fixed, '.Eq');
        return Eq;
    } else {
        let Eq = q_q * d_f * b_f * 0.333;
        let Eq_Fixed = + Eq.toFixed(3);
        replaceVariables('0.333', '.sigma_a_coefFriction');
        replaceVariables(Eq_Fixed, '.Eq');
        return Eq;
    }
};

function getWind(z, b) {
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

    let k_r = 0.19 * Math.pow(const_z_0 / const_z_0ji, 0.07);
    let v_b = const_c_dir * const_c_season * const_v_b0;
    let c_r_z = k_r * Math.log(z / const_z_0);
    let v_m_z = c_r_z * const_c_0_z * v_b;
    let I_v_z = const_k_i / (const_c_0_z * Math.log(z / const_z_0ji));
    let q_p_z_e = (1 + 7 * I_v_z) * 0.5 * const_ro * Math.pow(v_m_z, 2);
    let vz_e = Math.pow(2 * q_p_z_e / const_p, 0.5);
    let R_e = b * vz_e / KINEMATIC_VISCOSITY;
    let c_pe = const_c_p0 * PSI_LYAMDA_0;
    let w_e = q_p_z_e * c_pe;

    let Fw = 0.5 * w_e * z;

    // перевод в т/м2 (т)
    let q_p_z_e_translate = q_p_z_e / (1000 * 9.81);
    let w_e_translate = w_e / (1000 * 9.81);
    let Fw_translate = Fw / (1000 * 9.81);

    // перевод в степень
    let R_e_translate = R_e / 1000000;

    // округляем полученные результаты до 3-х знаков
    let k_r_Exit = + k_r.toFixed(3);
    let c_r_z_Exit = + c_r_z.toFixed(3);
    let v_m_z_Exit = + v_m_z.toFixed(3);
    let I_v_z_Exit = + I_v_z.toFixed(3);
    let q_p_z_e_Exit = + q_p_z_e.toFixed(3);
    let q_p_z_e_translate_Exit = + q_p_z_e_translate.toFixed(3);
    let vz_e_Exit = + vz_e.toFixed(3);
    let R_e_Exit = + R_e_translate.toFixed(3);

    // округление до 3-х знаков
    let w_e_translate_Exit = + w_e_translate.toFixed(3);
    let Fw_translate_Exit = + Fw_translate.toFixed(3);

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

    replaceVariables(z, '.supportHigt');
    replaceVariables(c_r_z_Exit, '.c_r_z');
    replaceVariables(k_r_Exit, '.k_r');
    replaceVariables(v_b, '.v_b');
    replaceVariables(v_m_z_Exit, '.v_m_z');
    replaceVariables(I_v_z_Exit, '.I_v_z');
    replaceVariables(q_p_z_e_Exit, '.q_p_z_e');
    replaceVariables(q_p_z_e_translate_Exit, '.q_p_z_e_translate_Exit');
    replaceVariables(vz_e_Exit, '.vz_e');
    replaceVariables(b, '.supportDiametr');
    replaceVariables(R_e_Exit, '.R_e');
    replaceVariables(c_pe, '.c_pe');
    replaceVariables(w_e_translate_Exit, '.w_e_translate_Exit');
    replaceVariables(Fw_translate_Exit, '.Fw_translate_Exit');

    return Fw_translate;
}

function getFsh(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit) {
    let suma_Fsh = GAMA_Q * PSI_0 * Eq_Exit + GAMA_Q * Fw_Exit + GAMA_Gsup * Ea_Exit;
    let suma_Fsh_Fixed = + suma_Fsh.toFixed(3);
    replaceVariables(suma_Fsh_Fixed, '.suma_Fsh');
    return suma_Fsh;
};


function getFsp(GAMA_Ginf, supportMass, Gf_Exit, fee_II, b_f, l_f, c_II, Ep_Exit) {
    if (fee_II > 0 && c_II <= 0) {
        const COEF_FRICTION = Math.tan(fee_II * (Math.PI / 180));

        let suma_Fsp = GAMA_Ginf * (supportMass + Gf_Exit) * COEF_FRICTION + GAMA_Ginf * Ep_Exit;

        let suma_Fsp_Fixed = + suma_Fsp.toFixed(3);
        let COEF_FRICTION_Fixed = COEF_FRICTION.toFixed(3);

        replaceVariables(COEF_FRICTION_Fixed, '.COEF_FRICTION');
        replaceVariables(suma_Fsp_Fixed, '.suma_Fsp');

        document.querySelectorAll(".without_cII").forEach(elements => elements.style.display = 'none');

        return suma_Fsp;
    } else if (fee_II > 0 && c_II > 0) {
        const COEF_FRICTION = Math.tan(fee_II * (Math.PI / 180));

        let A = b_f * l_f;
        let suma_Fsp = GAMA_Ginf * (supportMass + Gf_Exit) * COEF_FRICTION + A * c_II + GAMA_Ginf * Ep_Exit;

        let suma_Fsp_Fixed = + suma_Fsp.toFixed(3);
        let COEF_FRICTION_Fixed = COEF_FRICTION.toFixed(3);

        replaceVariables(COEF_FRICTION_Fixed, '.COEF_FRICTION');
        replaceVariables(A, '.areaOfFoundation');
        replaceVariables(suma_Fsp_Fixed, '.suma_Fsp');

        return suma_Fsp;
    }
    else {
        const COEF_FRICTION = 0.4;

        let suma_Fsp = GAMA_Ginf * (supportMass + Gf_Exit) * COEF_FRICTION + GAMA_Ginf * Ep_Exit;
        let suma_Fsp_Fixed = + suma_Fsp.toFixed(3);
        replaceVariables(COEF_FRICTION, '.COEF_FRICTION');
        replaceVariables(suma_Fsp_Fixed, '.suma_Fsp');
        document.querySelectorAll(".without_cII").forEach(elements => elements.style.display = 'none');
        return suma_Fsp;
    }
};

function getMext(GAMA_Q, PSI_0, GAMA_Gsup, Eq, Fw, Ea, z, d_f) {
    let Mext = 0.5 * GAMA_Q * PSI_0 * Eq * d_f + GAMA_Q * Fw * (d_f + 0.5 * z) + (GAMA_Gsup * Ea * d_f / 3);
    let Mext_Fixed = + Mext.toFixed(3);
    replaceVariables(Mext_Fixed, '.Mext');
    return Mext;
};

function getMint(GAMA_Ginf, supportMass, Gf, b_f, d_f, Ep) {
    let Mint = 0.5 * GAMA_Ginf * (supportMass + Gf) * b_f + (GAMA_Ginf * Ep * d_f / 3);
    let Mint_Fixed = + Mint.toFixed(3);
    replaceVariables(Mint_Fixed, '.Mint');
    return Mint;
};

function replaceVariables(valueOfVariable, classOfVariable) {
    let arrayOfClasses = document.querySelectorAll(classOfVariable);
    for (let elem of arrayOfClasses) {
        elem.textContent = valueOfVariable;
    };
};

function getEccentricity(M, N, Gf) {
    let e = M / (N + Gf);
    let e_Fixed = + e.toFixed(3);
    replaceVariables(e_Fixed, '.e_Fixed');
};
let e_Exit = getEccentricity(Mint_Exit, N_Exit, Gf_Exit);

let c_II_Exit = get_c_II(c_II_Enter);
let fee_II_Exit = get_fee_II(fee_II_Enter);

let sigma_a_Exit = getSigma_a(gama_II, fee_II_Exit, d_f);
let sigma_p_Exit = getSigma_p(gama_II, fee_II_Exit, d_f);

let Ea_Exit = getEa(sigma_a_Exit, d_f, b_f);
let Ep_Exit = getEp(sigma_p_Exit, d_f, b_f);
let Eq_Exit = getEq(q_q, d_f, b_f, fee_II_Exit);
let Fw_Exit = getWind(supportHigt, supportDiametr);
let N_Exit = getN(supportMass);
let Gf_Exit = getGf(RO_CONCR, b_f, l_f, d_f);

let suma_Fsh_Exit = getFsh(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit);
let suma_Fsp_Exit = getFsp(GAMA_Ginf, supportMass, Gf_Exit, fee_II_Exit, b_f, l_f, c_II_Exit, Ep_Exit);

let Mext_Exit = getMext(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit, supportHigt, d_f);
let Mint_Exit = getMint(GAMA_Ginf, supportMass, Gf_Exit, b_f, d_f, Ep_Exit);

function calcSupport(suma_Fsh, suma_Fsp, Mext, Mint) {
    const GAMMA_C = 0.8;
    const GAMMA_N = 1.1;

    let Fsp_conclusion = GAMMA_C * suma_Fsp / GAMMA_N;
    let Fsp_conclusion_Fixed = + Fsp_conclusion.toFixed(3);

    let Mint_conclusion = GAMMA_C * Mint / GAMMA_N;
    let Mint_conclusion_Fixed = + Mint_conclusion.toFixed(3);

    replaceVariables(GAMMA_C, '.GAMMA_C');
    replaceVariables(GAMMA_N, '.GAMMA_N');
    replaceVariables(Fsp_conclusion_Fixed, '.Fsp_conclusion_Fixed');
    replaceVariables(Mint_conclusion_Fixed, '.Mint_conclusion_Fixed');

    if (suma_Fsh < Fsp_conclusion) {
        replaceVariables('Условие выполняется. Устойчивость фундамента против сдвига обеспечена.', '.conclusion_Fs');
        replaceVariables('<', '.conclusion_Fs_sign');
    } else if (suma_Fsh === Fsp_conclusion) {
        replaceVariables('Условие выполняется. Устойчивость фундамента против сдвига обеспечена.', '.conclusion_Fs');
        replaceVariables('=', '.conclusion_Fs_sign');
    } else if (suma_Fsh > Fsp_conclusion) {
        replaceVariables('Условие не выполняется. Устойчивость фундамента против сдвига не обеспечена.', '.conclusion_Fs');
        replaceVariables('>', '.conclusion_Fs_sign');
    }

    if (Mext < Mint_conclusion) {
        replaceVariables('Условие выполняется. Устойчивость фундамента против опрокидывания обеспечена.', '.conclusion_Mext');
        replaceVariables('<', '.conclusion_Mext_sign');
    } else if (Mext === Mint_conclusion) {
        replaceVariables('Условие выполняется. Устойчивость фундамента против опрокидывания обеспечена.', '.conclusion_Mext');
        replaceVariables('=', '.conclusion_Mext_sign');
    } else if (Mext > Mint_conclusion) {
        replaceVariables('Условие не выполняется. Устойчивость фундамента против опрокидывания не обеспечена.', '.conclusion_Mext');
        replaceVariables('>', '.conclusion_Mext_sign');
    }
};
calcSupport(suma_Fsh_Exit, suma_Fsp_Exit, Mext_Exit, Mint_Exit);

replaceVariables(supportMass, '.supportMass');
replaceVariables(supportHigt, '.supportHigt');

replaceVariables(b_f, '.b_f');
replaceVariables(l_f, '.l_f');
replaceVariables(d_f, '.d_f');

replaceVariables(q_q, '.q_q');
replaceVariables(gama_II, '.gama_II');

replaceVariables(GAMA_Q, '.gama_Q');
replaceVariables(PSI_0, '.psi_0');
replaceVariables(GAMA_Gsup, '.gama_Gsup');
replaceVariables(GAMA_Ginf, '.gama_Ginf');
