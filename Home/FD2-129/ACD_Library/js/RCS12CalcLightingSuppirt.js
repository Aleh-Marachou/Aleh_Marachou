// import { COEF_M_FOR_CALC_R } from './Conn.js';
// console.log(COEF_M_FOR_CALC_R);


const formElement = document.getElementById('RCS12_INITIAL_DATA'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {

    e.preventDefault();
    const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь исходные данные
    let supportHigt = +formData.get('enteringHeightOfSupport');
    let supportDiametr = +formData.get('enteringDiametrOfSupport');
    let supportMass = +formData.get('enteringMassaOfSupport');         /*т*/

    let b_f = +formData.get('enteringLengthOfSupport');
    let l_f = +formData.get('enteringWidthOfSupport');
    let d_f = +formData.get('enteringDepthOfSupport');
    const RO_CONCR = +formData.get('enteringRoOfConcret'); /*плотность бетона в т/м3*/

    console.log(`масса опоры=${supportMass}т`);
    console.log(`высота опоры=${supportHigt}м`);
    console.log(`диаметр опоры=${supportDiametr}м`);
    console.log(`длина фунтамента=${b_f}м`);
    console.log(`ширина фунтамента=${l_f}м`);
    console.log(`глубина фунтамента=${d_f}м`);

    // Грунт в основании фундамента
    let nameOfSoilUnderFoundation = formData.get('soil_Under_Foundation');
    let gama_II = +formData.get('enteringGamaIIUnderFoundation');
    let c_II_Enter = +formData.get('enteringCIIUnderFoundation');         /*значение в кПа*/
    let fee_II_Enter = +formData.get('enteringFeeIIUnderFoundation');
    let Rnull_Enter = +formData.get('enteringRoUnderFoundation');       /*значение в кПа*/
    let E_under_foundation_Enter = +formData.get('enteringEUnderFoundation');

    // Грунт выше подошвы фундамента
    let gama_IIAboveFoundation = +formData.get('enteringGamaIIAboveFoundation');
    // let c_IIAboveFoundation_Enter = +formData.get('enteringCIIAboveFoundation');         /*значение в кПа*/
    // let fee_IIAboveFoundation_Enter = +formData.get('enteringFeeIIAboveFoundation');
    // let RnullAboveFoundation_Enter = +formData.get('enteringRoAboveFoundation');       /*значение в кПа*/
    // let E_above_foundation_Enter = +formData.get('enteringEAboveFoundation');


    let q_q = 2;                /*значение в т/м2*/

    // Коэффициенты сочетания нагрузок
    const GAMA_Q = 1.5;
    const PSI_0 = 0.7;
    const GAMA_Gsup = 1.1;
    const GAMA_Ginf = 0.9;

    // Коэффициент условия работы
    const GAMMA_C = 0.8;
    // коэффициент надежности по назначению сооружения
    const GAMMA_N = 1.1;

    replaceVariables(gama_II, '.gama_II');
    replaceVariables(nameOfSoilUnderFoundation, '.soilType');


    replaceVariables(GAMA_Q, '.gama_Q');
    replaceVariables(PSI_0, '.psi_0');
    replaceVariables(GAMA_Gsup, '.gama_Gsup');
    replaceVariables(GAMA_Ginf, '.gama_Ginf');

    replaceVariables(supportMass, '.supportMass');
    replaceVariables(supportHigt, '.supportHigt');

    replaceVariables(b_f, '.b_f');
    replaceVariables(l_f, '.l_f');
    replaceVariables(d_f, '.d_f');

    replaceVariables(q_q, '.q_q');

    replaceVariables(GAMMA_C, '.GAMMA_C');
    replaceVariables(GAMMA_N, '.GAMMA_N');

    let fee_II_Exit = get_fee_II(fee_II_Enter);
    let c_II_Exit = get_c_II(c_II_Enter);
    let Rnull_Exit = getRnull(Rnull_Enter);
    getEunderFoundation(E_under_foundation_Enter);

    let A_Exit = getA(b_f, l_f);
    let Gf_Exit = getGf(RO_CONCR, b_f, l_f, d_f);
    let W_Exit = getW(b_f, l_f);

    let sigma_a_Exit = getSigma_a(gama_II, fee_II_Exit, d_f);
    let sigma_p_Exit = getSigma_p(gama_II, fee_II_Exit, d_f);

    let N_Exit = getN(supportMass);

    let Ea_Exit = getEa(sigma_a_Exit, d_f, b_f);
    let Ep_Exit = getEp(sigma_p_Exit, d_f, b_f);
    let Eq_Exit = getEq(q_q, d_f, b_f, fee_II_Exit);
    let Fw_Exit = getWind(supportHigt, supportDiametr);

    let suma_Fsh_Exit = getFsh(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit);
    let suma_Fsp_Exit = getFsp(GAMA_Ginf, supportMass, Gf_Exit, fee_II_Exit, A_Exit, c_II_Exit, Ep_Exit);

    let Fsp_conclusion = GAMMA_C * suma_Fsp_Exit / GAMMA_N;
    let Fsp_conclusion_Fixed = + Fsp_conclusion.toFixed(3);

    replaceVariables(Fsp_conclusion_Fixed, '.Fsp_conclusion_Fixed');

    if (suma_Fsh_Exit < Fsp_conclusion) {

        replaceVariables('Условие выполняется. Устойчивость фундамента против сдвига обеспечена.', '.conclusion_Fs');
        replaceVariables('<', '.conclusion_Fs_sign');

    } else if (suma_Fsh_Exit === Fsp_conclusion) {

        replaceVariables('Условие выполняется. Устойчивость фундамента против сдвига обеспечена.', '.conclusion_Fs');
        replaceVariables('=', '.conclusion_Fs_sign');

    } else if (suma_Fsh_Exit > Fsp_conclusion) {

        replaceVariables('Условие не выполняется. Устойчивость фундамента против сдвига не обеспечена.', '.conclusion_Fs');
        replaceVariables('>', '.conclusion_Fs_sign');

    }

    getCoefOfStability(suma_Fsh_Exit, suma_Fsp_Exit, GAMMA_C, GAMMA_N, '.coefOfStability_Kf', '.coefOfStability_Kf0', '.coefOfStability_Kf_sign', '.coefOfStability_Kf_concl');

    let Mext_Exit = getMext(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit, supportHigt, d_f);
    let Mint_Exit = getMint(GAMA_Ginf, supportMass, Gf_Exit, b_f, d_f, Ep_Exit);

    let Mint_conclusion = GAMMA_C * Mint_Exit / GAMMA_N;
    let Mint_conclusion_Fixed = + Mint_conclusion.toFixed(3);

    replaceVariables(Mint_conclusion_Fixed, '.Mint_conclusion_Fixed');

    if (Mext_Exit < Mint_conclusion) {

        replaceVariables('Условие выполняется. Устойчивость фундамента против опрокидывания обеспечена.', '.conclusion_Mext');
        replaceVariables('<', '.conclusion_Mext_sign');

    } else if (Mext_Exit === Mint_conclusion) {

        replaceVariables('Условие выполняется. Устойчивость фундамента против опрокидывания обеспечена.', '.conclusion_Mext');
        replaceVariables('=', '.conclusion_Mext_sign');

    } else if (Mext_Exit > Mint_conclusion) {

        replaceVariables('Условие не выполняется. Устойчивость фундамента против опрокидывания не обеспечена.', '.conclusion_Mext');
        replaceVariables('>', '.conclusion_Mext_sign');
    }

    getCoefOfStability(Mext_Exit, Mint_Exit, GAMMA_C, GAMMA_N, '.coefOfStability_Km', '.coefOfStability_Km0', '.coefOfStability_Km_sign', '.coefOfStability_Km_concl');

    let Mcg_Exit = getMcg(Eq_Exit, Fw_Exit, Ea_Exit, Ep_Exit, supportHigt, d_f);

    let Gamma1 = (document.getElementById("Soil_Type1").checked) ? 1.4 :
        (document.getElementById("Soil_Type2").checked) ? 1.3 :
            (document.getElementById("Soil_Type3").checked) ? 1.25 :
                (document.getElementById("Soil_Type4").checked) ? 1.1 :
                    (document.getElementById("Soil_Type5").checked) ? 1.25 :
                        (document.getElementById("Soil_Type6").checked) ? 1.2 :
                            (document.getElementById("Soil_Type7").checked) ? 1.1 : 1.4;
    ;
    // console.log(`Gamma1=${Gamma1}`);

    let Gamma2 = (document.getElementById("Soil_Type1").checked) ? 1.4 :
        (document.getElementById("Soil_Type2").checked) ? 1.3 :
            (document.getElementById("Soil_Type3").checked) ? 1.2 :
                (document.getElementById("Soil_Type4").checked) ? 1.2 :
                    (document.getElementById("Soil_Type5").checked) ? 1.1 :
                        (document.getElementById("Soil_Type6").checked) ? 1.1 :
                            (document.getElementById("Soil_Type7").checked) ? 1 : 1.4;
    // console.log(`Gamma2=${Gamma2}`);

    let Mgama = (fee_II_Exit === 0) ? 0 :
        (fee_II_Exit === 1) ? 0.01 :
            (fee_II_Exit === 2) ? 0.03 :
                (fee_II_Exit === 3) ? 0.04 :
                    (fee_II_Exit === 4) ? 0.06 :
                        (fee_II_Exit === 5) ? 0.08 :
                            (fee_II_Exit === 6) ? 0.10 :
                                (fee_II_Exit === 7) ? 0.12 :
                                    (fee_II_Exit === 8) ? 0.14 :
                                        (fee_II_Exit === 9) ? 0.16 :
                                            (fee_II_Exit === 10) ? 0.18 :
                                                (fee_II_Exit === 11) ? 0.21 :
                                                    (fee_II_Exit === 12) ? 0.23 :
                                                        (fee_II_Exit === 13) ? 0.26 :
                                                            (fee_II_Exit === 14) ? 0.29 :
                                                                (fee_II_Exit === 15) ? 0.32 :
                                                                    (fee_II_Exit === 16) ? 0.36 :
                                                                        (fee_II_Exit === 17) ? 0.39 :
                                                                            (fee_II_Exit === 18) ? 0.43 :
                                                                                (fee_II_Exit === 19) ? 0.47 :
                                                                                    (fee_II_Exit === 20) ? 0.51 :
                                                                                        (fee_II_Exit === 21) ? 0.56 :
                                                                                            (fee_II_Exit === 22) ? 0.61 :
                                                                                                (fee_II_Exit === 23) ? 0.69 :
                                                                                                    (fee_II_Exit === 24) ? 0.72 :
                                                                                                        (fee_II_Exit === 25) ? 0.78 :
                                                                                                            (fee_II_Exit === 26) ? 0.84 :
                                                                                                                (fee_II_Exit === 27) ? 0.91 :
                                                                                                                    (fee_II_Exit === 28) ? 0.98 :
                                                                                                                        (fee_II_Exit === 29) ? 1.06 :
                                                                                                                            (fee_II_Exit === 30) ? 1.15 :
                                                                                                                                (fee_II_Exit === 31) ? 1.24 :
                                                                                                                                    (fee_II_Exit === 32) ? 1.34 :
                                                                                                                                        (fee_II_Exit === 33) ? 1.44 :
                                                                                                                                            (fee_II_Exit === 34) ? 1.55 :
                                                                                                                                                (fee_II_Exit === 35) ? 1.68 :
                                                                                                                                                    (fee_II_Exit === 36) ? 1.81 :
                                                                                                                                                        (fee_II_Exit === 37) ? 1.95 :
                                                                                                                                                            (fee_II_Exit === 38) ? 2.11 :
                                                                                                                                                                (fee_II_Exit === 39) ? 2.28 :
                                                                                                                                                                    (fee_II_Exit === 40) ? 2.46 :
                                                                                                                                                                        (fee_II_Exit === 41) ? 2.66 :
                                                                                                                                                                            (fee_II_Exit === 42) ? 2.88 :
                                                                                                                                                                                (fee_II_Exit === 43) ? 3.12 :
                                                                                                                                                                                    (fee_II_Exit === 44) ? 3.38 :
                                                                                                                                                                                        (fee_II_Exit === 45) ? 3.66 : 0;



    let Mq = (fee_II_Exit === 0) ? 1.0 :
        (fee_II_Exit === 1) ? 1.06 :
            (fee_II_Exit === 2) ? 1.12 :
                (fee_II_Exit === 3) ? 1.18 :
                    (fee_II_Exit === 4) ? 1.25 :
                        (fee_II_Exit === 5) ? 1.32 :
                            (fee_II_Exit === 6) ? 1.39 :
                                (fee_II_Exit === 7) ? 1.47 :
                                    (fee_II_Exit === 8) ? 1.55 :
                                        (fee_II_Exit === 9) ? 1.64 :
                                            (fee_II_Exit === 10) ? 1.73 :
                                                (fee_II_Exit === 11) ? 1.83 :
                                                    (fee_II_Exit === 12) ? 1.94 :
                                                        (fee_II_Exit === 13) ? 2.05 :
                                                            (fee_II_Exit === 14) ? 2.17 :
                                                                (fee_II_Exit === 15) ? 2.30 :
                                                                    (fee_II_Exit === 16) ? 2.43 :
                                                                        (fee_II_Exit === 17) ? 2.57 :
                                                                            (fee_II_Exit === 18) ? 2.73 :
                                                                                (fee_II_Exit === 19) ? 2.89 :
                                                                                    (fee_II_Exit === 20) ? 3.06 :
                                                                                        (fee_II_Exit === 21) ? 3.24 :
                                                                                            (fee_II_Exit === 22) ? 3.44 :
                                                                                                (fee_II_Exit === 23) ? 3.65 :
                                                                                                    (fee_II_Exit === 24) ? 3.87 :
                                                                                                        (fee_II_Exit === 25) ? 4.11 :
                                                                                                            (fee_II_Exit === 26) ? 4.37 :
                                                                                                                (fee_II_Exit === 27) ? 4.64 :
                                                                                                                    (fee_II_Exit === 28) ? 4.93 :
                                                                                                                        (fee_II_Exit === 29) ? 5.25 :
                                                                                                                            (fee_II_Exit === 30) ? 5.59 :
                                                                                                                                (fee_II_Exit === 31) ? 5.95 :
                                                                                                                                    (fee_II_Exit === 32) ? 6.34 :
                                                                                                                                        (fee_II_Exit === 33) ? 6.76 :
                                                                                                                                            (fee_II_Exit === 34) ? 7.22 :
                                                                                                                                                (fee_II_Exit === 35) ? 7.71 :
                                                                                                                                                    (fee_II_Exit === 36) ? 8.24 :
                                                                                                                                                        (fee_II_Exit === 37) ? 8.81 :
                                                                                                                                                            (fee_II_Exit === 38) ? 9.44 :
                                                                                                                                                                (fee_II_Exit === 39) ? 10.11 :
                                                                                                                                                                    (fee_II_Exit === 40) ? 10.85 :
                                                                                                                                                                        (fee_II_Exit === 41) ? 11.64 :
                                                                                                                                                                            (fee_II_Exit === 42) ? 12.51 :
                                                                                                                                                                                (fee_II_Exit === 43) ? 13.46 :
                                                                                                                                                                                    (fee_II_Exit === 44) ? 14.50 :
                                                                                                                                                                                        (fee_II_Exit === 45) ? 15.64 : 1;


    let Mc = (fee_II_Exit === 0) ? 3.14 :
        (fee_II_Exit === 1) ? 3.23 :
            (fee_II_Exit === 2) ? 3.32 :
                (fee_II_Exit === 3) ? 3.41 :
                    (fee_II_Exit === 4) ? 3.51 :
                        (fee_II_Exit === 5) ? 3.61 :
                            (fee_II_Exit === 6) ? 3.71 :
                                (fee_II_Exit === 7) ? 3.82 :
                                    (fee_II_Exit === 8) ? 3.93 :
                                        (fee_II_Exit === 9) ? 4.05 :
                                            (fee_II_Exit === 10) ? 4.17 :
                                                (fee_II_Exit === 11) ? 4.29 :
                                                    (fee_II_Exit === 12) ? 4.42 :
                                                        (fee_II_Exit === 13) ? 4.55 :
                                                            (fee_II_Exit === 14) ? 4.69 :
                                                                (fee_II_Exit === 15) ? 4.84 :
                                                                    (fee_II_Exit === 16) ? 4.99 :
                                                                        (fee_II_Exit === 17) ? 5.15 :
                                                                            (fee_II_Exit === 18) ? 5.31 :
                                                                                (fee_II_Exit === 19) ? 5.48 :
                                                                                    (fee_II_Exit === 20) ? 5.66 :
                                                                                        (fee_II_Exit === 21) ? 5.84 :
                                                                                            (fee_II_Exit === 22) ? 6.04 :
                                                                                                (fee_II_Exit === 23) ? 6.24 :
                                                                                                    (fee_II_Exit === 24) ? 6.45 :
                                                                                                        (fee_II_Exit === 25) ? 6.67 :
                                                                                                            (fee_II_Exit === 26) ? 6.90 :
                                                                                                                (fee_II_Exit === 27) ? 7.14 :
                                                                                                                    (fee_II_Exit === 28) ? 7.40 :
                                                                                                                        (fee_II_Exit === 29) ? 7.67 :
                                                                                                                            (fee_II_Exit === 30) ? 7.95 :
                                                                                                                                (fee_II_Exit === 31) ? 8.24 :
                                                                                                                                    (fee_II_Exit === 32) ? 8.55 :
                                                                                                                                        (fee_II_Exit === 33) ? 8.88 :
                                                                                                                                            (fee_II_Exit === 34) ? 9.22 :
                                                                                                                                                (fee_II_Exit === 35) ? 9.58 :
                                                                                                                                                    (fee_II_Exit === 36) ? 9.97 :
                                                                                                                                                        (fee_II_Exit === 37) ? 10.37 :
                                                                                                                                                            (fee_II_Exit === 38) ? 10.80 :
                                                                                                                                                                (fee_II_Exit === 39) ? 11.25 :
                                                                                                                                                                    (fee_II_Exit === 40) ? 11.73 :
                                                                                                                                                                        (fee_II_Exit === 41) ? 12.24 :
                                                                                                                                                                            (fee_II_Exit === 42) ? 12.79 :
                                                                                                                                                                                (fee_II_Exit === 43) ? 13.37 :
                                                                                                                                                                                    (fee_II_Exit === 44) ? 13.98 :
                                                                                                                                                                                        (fee_II_Exit === 45) ? 14.64 : 3.14;

    let R_Exit = getR(gama_II, fee_II_Exit, c_II_Exit, Rnull_Exit, b_f, d_f, gama_IIAboveFoundation, Gamma1, Gamma2, Mgama, Mq, Mc);
    let e_Exit = getEccentricity(Mcg_Exit, N_Exit, Gf_Exit);
    let eNull = getEccentricityNull(l_f);

    if (e_Exit < eNull) {

        replaceVariables('Условие выполняется, значит размеры подошвы фундамента следует принимать как для центрально нагруженного фундамента.', '.conclusion_e');
        replaceVariables('<', '.conclusion_e_sign');
        replaceVariables('Для центрально нагруженного фундамента расчет по деформациям выполним согласно п. 5.3.3', '.conclusion_e_for_p');

        document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

        let p_m_Exit = get_p_m(N_Exit, Gf_Exit, A_Exit);

        if (p_m_Exit < R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('<', '.conclusion_p_m_sign');
            replaceVariables('Условие выполняется. Размеры фундамента подобраны правильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');

        } else if (p_m_Exit === R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('=', '.conclusion_p_m_sign');
            replaceVariables('Условие выполняется. Размеры фундамента подобраны правильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');

        } else if (p_m_Exit > R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('>', '.conclusion_p_m_sign');
            replaceVariables('Условие не выполняется. Размеры фундамента подобраны неправильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');
        }

    } else if (e_Exit === eNull) {

        replaceVariables('Условие выполняется, значит размеры подошвы фундамента следует принимать как для центрально нагруженного фундамента.', '.conclusion_e');
        replaceVariables('=', '.conclusion_e_sign');
        replaceVariables('Для центрально нагруженного фундамента расчет по деформациям выполним согласно п. 5.3.3', '.conclusion_e_for_p');

        document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

        let p_m_Exit = get_p_m(N_Exit, Gf_Exit, A_Exit);

        if (p_m_Exit < R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('<', '.conclusion_p_m_sign');
            replaceVariables('Условие выполняется. Размеры фундамента подобраны правильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');

        } else if (p_m_Exit === R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('=', '.conclusion_p_m_sign');
            replaceVariables('Условие выполняется. Размеры фундамента подобраны правильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');

        } else if (p_m_Exit > R_Exit) {

            document.querySelectorAll(".p_offCenterLoadedFoundation").forEach(elements => elements.style.display = 'none');

            replaceVariables('>', '.conclusion_p_m_sign');
            replaceVariables('Условие не выполняется. Размеры фундамента подобраны неправильно.', '.conclusion_p_m');
            replaceVariables('.', '.signEndOfSentence');

        }

    } else if (e_Exit > eNull) {

        replaceVariables('Условие не выполняется, значит размеры подошвы фундамента следует принимать как для внецентренно нагруженного фундамента.', '.conclusion_e');
        replaceVariables('>', '.conclusion_e_sign');
        replaceVariables('Для внецентренно нагруженного фундамента расчет по деформациям выполним согласно п. 5.3.3', '.conclusion_e_for_p');

        let p_m_Exit = get_p_m(N_Exit, Gf_Exit, A_Exit);
        let p_max_Exit = get_p_max(N_Exit, Gf_Exit, Mcg_Exit, A_Exit, W_Exit);
        let p_min_Exit = get_p_min(N_Exit, Gf_Exit, Mcg_Exit, A_Exit, W_Exit);

        if (p_m_Exit < R_Exit) {

            replaceVariables('<', '.conclusion_p_m_sign');
            replaceVariables(',', '.signEndOfSentence');

        } else if (p_m_Exit === R_Exit) {

            replaceVariables('=', '.conclusion_p_m_sign');

        } else if (p_m_Exit > R_Exit) {

            replaceVariables('>', '.conclusion_p_m_sign');
        }

        if (p_min_Exit > 0) {

            replaceVariables('>', '.conclusion_p_min_sign');

        } else if (p_min_Exit === 0) {

            replaceVariables('=', '.conclusion_p_min_sign');

        } else if (p_min_Exit < 0) {

            replaceVariables('<', '.conclusion_p_min_sign');

        }

        let p_max_conclusion = 1.2 * R_Exit;
        let p_max_conclusion_Exit = + p_max_conclusion.toFixed(3);

        replaceVariables(p_max_conclusion_Exit, '.p_max_conclusion');

        if (p_max_Exit < p_max_conclusion) {

            replaceVariables('<', '.conclusion_p_max_sign');

        } else if (p_max_Exit === p_max_conclusion) {

            replaceVariables('=', '.conclusion_p_max_sign');

        } else if (p_max_Exit > p_max_conclusion) {

            replaceVariables('>', '.conclusion_p_max_sign');

        }

        if (p_m_Exit <= R_Exit && p_max_Exit <= p_max_conclusion && p_min_Exit >= 0) {

            replaceVariables('Условие выполняется. Размеры фундамента подобраны правильно.', '.conclusion_p_m');

        } else {

            replaceVariables('Условие не выполняется. Размеры фундамента подобраны неправильно.', '.conclusion_p_m');
        }
    }
});

// let tanFee_II_Square = Math.pow(Math.tan((Math.PI / 4) + 0.5 * (fee_II * (Math.PI / 180))), 2);

function get_fee_II(fee_II_Enter) {

    if (fee_II_Enter > 0) {

        let fee_II = fee_II_Enter;
        replaceVariables(fee_II, '.fee_II');
        return fee_II;

    } else {

        let fee_II = 0;
        return fee_II;
    }
};

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

function getRnull(Rnull_Enter) {

    let Rnull = Rnull_Enter / 9.81;   /*значение в т/м2*/
    let Rnull_Fixed = + Rnull.toFixed(3);
    replaceVariables(Rnull_Fixed, '.Rnull');

    return Rnull;
};

function getEunderFoundation(E_under_foundation_Enter) {

    if (E_under_foundation_Enter <= 0) {

        let E_under_foundation = 0;
        document.querySelectorAll(".without_soilDeformationModulus").forEach(elements => elements.style.display = 'none');
        return E_under_foundation;

    } else {

        let E_under_foundation = E_under_foundation_Enter;
        let E_under_foundation_Fixed = + E_under_foundation.toFixed(3);
        replaceVariables(E_under_foundation_Fixed, '.soilDeformationModulus');

        return E_under_foundation;
    }
};

function getN(supportMass) {

    const GAMA_Gsup = 1.35;

    let N = GAMA_Gsup * supportMass;
    let N_Fixed = + N.toFixed(3);
    replaceVariables(GAMA_Gsup, '.GAMA_Gsup_forN');
    replaceVariables(N_Fixed, '.N_Fixed');

    return N;
};

function getA(b_f, l_f) {

    let A = b_f * l_f;
    let A_Fixed = + A.toFixed(3);
    replaceVariables(A_Fixed, '.areaOfFoundation');

    return A;
};

function getW(b_f, l_f) {

    let W = l_f * Math.pow(b_f, 2) / 6;
    let W_Fixed = + W.toFixed(3);
    replaceVariables(W_Fixed, '.W_Fixed');

    return W;
};

function getGf(RO_CONCR, b_f, l_f, d_f) {

    let Gf = RO_CONCR * b_f * l_f * d_f;
    let Gf_Fixed = + Gf.toFixed(3);
    replaceVariables(Gf_Fixed, '.Gf');

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

    //для того, чтобы значения не выходили за пределы скобок и ширине знака деления
    // ХАК ДЛЯ MATHML: заставляем браузер перерисовать формулу целиком
    document.querySelectorAll('math').forEach(mathElem => {
        // Временное скрытие и показ элемента заставляет движок MathML
        // полностью пересчитать ширину всех дробей и высоту скобок
        const originalDisplay = mathElem.getAttribute('display') || 'block';
        mathElem.style.display = 'none';
        mathElem.offsetHeight; // чтение триггерит reflow
        mathElem.style.display = originalDisplay === 'block' ? 'block' : 'inline';
    });
    // добавлено 2026.30.10 по совету ИИ

    return Fw_translate;
}

function getFsh(GAMA_Q, PSI_0, GAMA_Gsup, Eq_Exit, Fw_Exit, Ea_Exit) {

    let suma_Fsh = GAMA_Q * PSI_0 * Eq_Exit + GAMA_Q * Fw_Exit + GAMA_Gsup * Ea_Exit;
    let suma_Fsh_Fixed = + suma_Fsh.toFixed(3);
    replaceVariables(suma_Fsh_Fixed, '.suma_Fsh');

    return suma_Fsh;
};


function getFsp(GAMA_Ginf, supportMass, Gf_Exit, fee_II, A, c_II, Ep_Exit) {

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

        let suma_Fsp = GAMA_Ginf * (supportMass + Gf_Exit) * COEF_FRICTION + A * c_II + GAMA_Ginf * Ep_Exit;

        let suma_Fsp_Fixed = + suma_Fsp.toFixed(3);
        let COEF_FRICTION_Fixed = COEF_FRICTION.toFixed(3);

        replaceVariables(COEF_FRICTION_Fixed, '.COEF_FRICTION');
        replaceVariables(suma_Fsp_Fixed, '.suma_Fsp');

        return suma_Fsp;

    } else if (fee_II <= 0 && c_II <= 0) {

        const COEF_FRICTION = 0.4;

        let suma_Fsp = GAMA_Ginf * (supportMass + Gf_Exit) * COEF_FRICTION + GAMA_Ginf * Ep_Exit;
        let suma_Fsp_Fixed = + suma_Fsp.toFixed(3);

        replaceVariables(GAMA_Ginf, '.gama_Ginf');
        replaceVariables(COEF_FRICTION, '.COEF_FRICTION');
        replaceVariables(suma_Fsp_Fixed, '.suma_Fsp');

        document.querySelectorAll(".without_cII").forEach(elements => elements.style.display = 'none');
        document.querySelectorAll(".without_feeII").forEach(elements => elements.style.display = 'none');

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

    replaceVariables(GAMA_Ginf, '.gama_Ginf');
    replaceVariables(Mint_Fixed, '.Mint');

    return Mint;
};

function replaceVariables(valueOfVariable, classOfVariable) {

    let arrayOfClasses = document.querySelectorAll(classOfVariable);
    for (let elem of arrayOfClasses) {
        elem.textContent = valueOfVariable;
    };
};

// Момент на подошве фундамента относительно оси симметрии
function getMcg(Eq, Fw, Ea, Ep, z, d_f) {

    const GAMA_Q_Mcg = 1.3;
    const PSI_0_Mcg = 0.7;
    const GAMA_Gsup_Mcg = 1.0;
    const GAMA_Ginf_Mcg = 1.0;

    let Mcg = 0.5 * GAMA_Q_Mcg * PSI_0_Mcg * Eq * d_f + GAMA_Q_Mcg * Fw * (d_f + 0.5 * z) + (GAMA_Gsup_Mcg * Ea * d_f / 3) - (GAMA_Ginf_Mcg * Ep * d_f / 3);

    let McgModul = (Mcg > 0) ? Mcg : -1 * Mcg;

    let McgModul_Fixed = + McgModul.toFixed(3);

    replaceVariables(GAMA_Q_Mcg, '.gama_Q_Mcg');
    replaceVariables(PSI_0_Mcg, '.psi_0_Mcg');
    replaceVariables(GAMA_Gsup_Mcg, '.gama_Gsup_Mcg');
    replaceVariables(GAMA_Ginf_Mcg, '.gama_Ginf_Mcg');
    replaceVariables(McgModul_Fixed, '.Mcg');

    return McgModul;
};

function getEccentricityNull(l_f) {

    let eNull = l_f / 30;
    let eNull_Fixed = + eNull.toFixed(3);
    replaceVariables(eNull_Fixed, '.eNull_Fixed');

    return eNull;
};

function getEccentricity(M, N, Gf) {

    let e = M / (N + Gf);
    let e_Fixed = + e.toFixed(3);
    replaceVariables(e_Fixed, '.e_Fixed');

    return e;
};

function get_p_m(N, Q, A) {

    let p_m = (N + Q) / A;
    let p_m_Fixed = + p_m.toFixed(3);

    replaceVariables(p_m_Fixed, '.p_m');

    return p_m;
};

function get_p_max(N, Q, M, A, W) {

    let p_max = ((N + Q) / A) + (M / W);

    let p_max_Fixed = + p_max.toFixed(3);
    replaceVariables(p_max_Fixed, '.p_max');

    return p_max;
};

function get_p_min(N, Q, M, A, W) {

    let p_min = ((N + Q) / A) - (M / W);

    let p_min_Fixed = + p_min.toFixed(3);
    replaceVariables(p_min_Fixed, '.p_min');

    return p_min;
};

function getR(gama_II, feeIIforR, cIIforR, Rnull, b_f, d_l, gama_II_backSoil, GAMA_ONE, GAMA_TWO, Mgama, Mq, Mc) {

    let fee_II = feeIIforR;
    let c_II = cIIforR;

    // const GAMA_ONE = 1;
    // const GAMA_TWO = 1;
    const k = 1;
    const k_z = 1;
    // const Mgama = 1.15;
    // const Mq = 5.59;
    // const Mc = 7.95;

    replaceVariables(GAMA_ONE, '.GAMA_ONE');
    replaceVariables(GAMA_TWO, '.GAMA_TWO');
    replaceVariables(k, '.kForR');
    replaceVariables(k_z, '.k_z');
    replaceVariables(Mgama, '.Mgama');
    replaceVariables(Mq, '.Mq');
    replaceVariables(Mc, '.Mc');
    replaceVariables(gama_II_backSoil, '.gama_II_backSoil');

    if (fee_II > 0 && c_II > 0) {

        document.querySelectorAll(".without_feeII").forEach(elements => elements.style.display = 'none');

        let R = GAMA_ONE * GAMA_TWO * (Mgama * k_z * b_f * gama_II + Mq * d_l * gama_II_backSoil + Mc * c_II);
        let R_Fixed = + R.toFixed(3);
        replaceVariables(R_Fixed, '.R');

        return R;

    } else if (fee_II > 0 && c_II <= 0) {

        document.querySelectorAll(".without_feeII").forEach(elements => elements.style.display = 'none');

        let R = GAMA_ONE * GAMA_TWO * (Mgama * k_z * b_f * gama_II + Mq * d_l * gama_II_backSoil);
        let R_Fixed = + R.toFixed(3);
        replaceVariables(R_Fixed, '.R');

        return R;

    } else if (fee_II <= 0 && c_II <= 0) {

        document.querySelectorAll(".with_feeII").forEach(elements => elements.style.display = 'none');

        let kOne = 0.050;
        let kTwo = 0.15;
        let bNull = 1;
        let dNull = 2;

        replaceVariables(kOne, '.kOne');
        replaceVariables(kTwo, '.kTwo');

        replaceVariables(bNull, '.bNull');
        replaceVariables(dNull, '.dNull');

        let d_f = d_l;

        if (d_f < 2) {

            document.querySelectorAll(".d_f_moreTwo").forEach(elements => elements.style.display = 'none');

            let R = Rnull * (1 + kOne * ((b_f - bNull) / bNull)) * ((d_f + dNull) / (2 * dNull));
            let R_Fixed = + R.toFixed(3);
            replaceVariables(R_Fixed, '.R');

            return R;

        } else if (d_f === 2) {

            document.querySelectorAll(".d_f_equalsTwo").forEach(elements => elements.style.display = 'none');
            document.querySelectorAll(".d_f_lessTwo").forEach(elements => elements.style.display = 'none');
            document.querySelectorAll(".d_f_moreTwo").forEach(elements => elements.style.display = 'none');

            let R = Rnull;
            let R_Fixed = + R.toFixed(3);
            replaceVariables(R_Fixed, '.R');

            return R;

        } else if (d_f > 2) {

            document.querySelectorAll(".d_f_lessTwo").forEach(elements => elements.style.display = 'none');

            let R = Rnull * (1 + kOne * ((b_f - bNull) / bNull)) + kTwo * gama_II_backSoil * (d_f - dNull);
            let R_Fixed = + R.toFixed(3);
            replaceVariables(R_Fixed, '.R');

            return R;
        }
    }
};

function getCoefOfStability(effortsExt, effortsInt, GAMMA_C, GAMMA_N, classOfVariableKf, classOfVariableKf0, classOfVariableSign, classOfVariableConcl) {

    let coefOfStability = effortsInt / effortsExt;
    let coefOfStabilityNull = GAMMA_N / GAMMA_C;

    let coefOfStability_Fixed = + coefOfStability.toFixed(3);
    let coefOfStabilityNull_Fixed = + coefOfStabilityNull.toFixed(3);

    replaceVariables(coefOfStability_Fixed, classOfVariableKf);
    replaceVariables(coefOfStabilityNull_Fixed, classOfVariableKf0);

    if (coefOfStability > coefOfStabilityNull) {

        replaceVariables('>', classOfVariableSign);
        replaceVariables('Устойчивость фундамента обеспечена', classOfVariableConcl);

    } else if (coefOfStability === coefOfStabilityNull) {

        replaceVariables('=', classOfVariableSign);
        replaceVariables('Устойчивость фундамента обеспечена', classOfVariableConcl);

    } else {

        replaceVariables('<', classOfVariableSign);
        replaceVariables('Устойчивость фундамента не обеспечена', classOfVariableConcl);
    }
}

// Кнопка для ПЗ (старт)
// 1. Находим обе кнопки в документе по их ID
const trigger = document.getElementById('CalcRCS12');
const target = document.querySelectorAll('.btnHidden');

// 2. Вешаем обработчик события "клик" на первую кнопку
trigger.addEventListener('click', () => {
    target.forEach(button => {
        button.style.visibility = 'visible';
    });
});
// Кнопка для ПЗ (финиш)
