window.addEventListener('DOMContentLoaded', () => {

   const tabs = require('./modules/tabs'),
         modal = require('./modules/modal'),
         scroll = require('./modules/scroll'),
         slider = require('./modules/slider'),
         calc = require('./modules/calc'),
         cards = require('./modules/cards'),
         forms = require('./modules/forms'),
         timer = require('./modules/timer');

    tabs();
    modal();
    scroll();
    slider();
    calc();
    cards();
    forms();
    timer();

});