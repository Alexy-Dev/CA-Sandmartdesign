import tabs from './modules/tabs';                  //ES6
import modal from './modules/modal';
import scroll from './modules/scroll';
import slider from './modules/slider';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

//    const tabs = require('./modules/tabs'),           //ComonJS синтаксиси
//          modal = require('./modules/modal'),
//          scroll = require('./modules/scroll'),
//          slider = require('./modules/slider'),
//          calc = require('./modules/calc'),
//          cards = require('./modules/cards'),
//          forms = require('./modules/forms'),
//          timer = require('./modules/timer');

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);



    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');  //передаем конкретные настройки через аргументы
    modal('[data-modal]', '.modal', modalTimerId);
    scroll();
    slider({
        container: '.offer__slider',            //деструктуризируем объект
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();
    cards();
    forms('form', modalTimerId);
    timer('.timer', '2021-08-01');

});