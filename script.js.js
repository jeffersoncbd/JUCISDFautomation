// ==UserScript==
// @name         JUCISDFautomation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatizador de inclusão de atividades da JUCIS DF
// @author       Jefferson Carlos
// @match        http://portalservicos.jucis.df.gov.br/viabilidade/pages/coleta/coletaAtividadeEconomica.jsf
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let atividades = localStorage.getItem('atividades')

    if (atividades !== '') {
        const array = atividades.split(',')
        let atividade = array.pop()
        localStorage.setItem('atividades', array)

        document.getElementById('j_idt61:0:j_idt70').click()
        document.getElementById('atividade').value = atividade
        document.querySelector('#coleta_ativeconomica .form-horizontal a').click()
    } else {
        console.log('Lista de atividades zerada')
        const quantidade = document.getElementsByClassName('box box-highlight-sm box-highlight-gray').length
        alert(`${quantidade} atividades foram adicionadas`)
    }
})();