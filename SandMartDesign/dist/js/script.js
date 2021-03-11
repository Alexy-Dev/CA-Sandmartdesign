window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            
        });
        
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {      
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();      
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//Timer
const deadLine = '2021-08-01';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), //вычисляем разницу между дедлайном и текущей датой
          days = Math.floor(t / (1000 * 60 * 60 * 24)), //метод получения целых частей (дней) с округлением
          hours = Math.floor((t / (1000 * 60 * 60) % 24)), //% дает возможность получить хвостик отбросив целые части, которые уходят к дням
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,             //возвращаем наружу полученные ранее значения
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {             //функция для добавления 0 к одинарным значениям
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),  //распределяем значения по селекторам
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); //обновление каждую секкунду

    updateClock(); //убираем моргание экрана, когда мы видим то что было в верстке в течении 1 сек
    function updateClock() {
        const t = getTimeRemaining(endtime);    //расчет оставшегося времени

        // days.innerHTML = t.days;                //помещаем значения на страницу
        // hours.innerHTML = t.hours;
        // minutes.innerHTML = t.minutes;
        // seconds.innerHTML = t.seconds;
        days.innerHTML = getZero(t.days);                //помещаем значения на страницу c добавлением 0 к одинарным значениям
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {                     //добавляем условие остановки для закончевшегося таймера
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadLine);

//Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),  //обращаемся ко всем эллементам, которым мы назначили класс data-modal, если эл. один, то querySelector
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {           //если однe и тe же модалку вызывают разные кнопки, помеченные нами data-modal, то псевдомассив перебираем forEach
    btn.addEventListener('click', () => {
    // modal.classList.add('show');     //включаем 
    // modal.classList.remove('hide');  //и отключаем свойство display: none; класса .modal
    modal.classList.toggle('show');   //та же логика, но через toggle
    document.body.style.overflow = 'hidden';  //убираем прокрутку на время работы модалки
    });
});

function closeModal() {                 //чтобы не повторяться, засовываем алгоритм закрывания в функцию
    modal.classList.toggle('show');  
    document.body.style.overflow = ''; 
}

modalCloseBtn.addEventListener('click', closeModal); //указываем функцию closeModal в качестве аргумента
// modalCloseBtn.addEventListener('click', () => {
//     // modal.classList.add('hide');
//     // modal.classList.remove('show');
//     modal.classList.toggle('show');   //та же логика, но через toggle
//     document.body.style.overflow = '';      //возвращаем прокрутку в дефолтное состояние
// });

modal.addEventListener('click',  (e) => {    //не забываем передавать аргумент события event(e)
        if (e.target === modal) {
            closeModal();                   //при выполнении условия вызываем функцию
        }   
// modal.addEventListener('click', (e) => {    //не забываем передавать аргумент событию
//     if (e.target === modal) {               //способ выключения модалки при клике на экран
//         // modal.classList.add('hide');
//         // modal.classList.remove('show');
//         modal.classList.toggle('show');
//         document.body.style.overflow = ''; 
//     }
    });

    document.addEventListener('keydown', (e) => {   //закрытие модалки по клавише клавиатуры
        if (e.code === "Escape" && modal.classList.contains('show')) {    //escape, и при открытой модалке
        closeModal();           
        }
    });
});