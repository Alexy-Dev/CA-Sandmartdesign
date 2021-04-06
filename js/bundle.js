/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    const result = document.querySelector('.calculating__result span'),
    inputBlocks = document.querySelectorAll('input');

    let name,
        input,
        ratio,
        i = 0;

//       if (localStorage.getItem('name')) {               //работа с локальным хранилищем
//         name = localStorage.getItem('name'); 
//         } else {
//         name = 'nameHave';
//         localStorage.setItem('name', 'nameHave');
//         }

      
//       if (localStorage.getItem('ratio')) {
//         ratio = localStorage.getItem('ratio'); 
//         } else {
//         ratio = 2;
//         localStorage.setItem('ratio', 2);
//         }

//         function initLocalSettings(selector, activeClass){
//             const elements = document.querySelectorAll(selector);

//             elements.forEach(elem => {
//                 elem.classList.remove(activeClass);
//                 if (elem.getAttribute('id') === localStorage.getItem('name')) {
//                     elem.classList.add(activeClass);
//                 }
//                 if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
//                     elem.classList.add(activeClass);
//                 }
//             })
//         }

// initLocalSettings('#name div', 'calculating__choose-item_active');
// initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active');


function calcTotal() {
  if (name === 'nameHave') {
      result.textContent = --i;
  } if (name === 'nameNeed') {
      result.textContent = ++i;
  } if(input === 'assortChoose, assortPack') {
      result.textContent = ++input.value;
  } else {
      result.textContent = '__';
  }
}
calcTotal(i);

function getStaticInformation(selector, activeClass) {            //получение данных со статичных объектов
  const elements = document.querySelectorAll(selector);

  elements.forEach(elem => {                          //перебираем массив, с целью избавиться от ошибок делегирования, которые распространяются на весь див

      elem.addEventListener('click', (e) => {
          if (e.target.getAttribute('data-ratio')) {
              ratio = +e.target.getAttribute('data-ratio');   //если в диве несколько объектов, то обращаемся к data-ratio
              localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));    //запись данных в локальное хранилище
          }  else {
              name = e.target.getAttribute('id');            //если в диве 2 объекта, то обращаемся к уникальному 'id'
              localStorage.setItem('name', +e.target.getAttribute('id'));             //запись данных в локальное хранилище
          }


          elements.forEach(elem => {
              elem.classList.remove(activeClass);
          });

          e.target.classList.add(activeClass);
          if (e.target.id === 'nameNeed') {
              result.textContent = ++i;                    
          } 
          if (e.target.id === 'nameHave') {
              result.textContent = --i;                    
          } 
          if (e.target.id === 'logoNeed') {
              result.textContent = ++i;  
          }
          if (e.target.id === 'logoHave') {
              result.textContent = --i;                    
          } 
          if (e.target.id === 'tmNeed') {
              result.textContent = ++i;  
          }
          if (e.target.id === 'tmHave') {
              result.textContent = --i;                    
          } 
          if (e.target.id === 'styleNeed') {
              result.textContent = ++i;  
          }
          if (e.target.id === 'styleHave') {
              result.textContent = --i;                    
          } 
          if (e.target.id === 'siteNeed') {
              result.textContent = ++i;  
          }
          if (e.target.id === 'siteHave') {
              result.textContent = --i;                                      
          } 
          if (e.target.id === 'packNeed') {
              result.textContent = ++i;  
          }                              
          if (e.target.id === 'packHave') {
              result.textContent = --i;                    
          } 
            
      });

      calcTotal();

  });

  }

getStaticInformation('#name div', 'calculating__choose-item_active');
getStaticInformation('#logo div', 'calculating__choose-item_active');
getStaticInformation('#tm div', 'calculating__choose-item_active');
getStaticInformation('#style div', 'calculating__choose-item_active');
getStaticInformation('#site div', 'calculating__choose-item_active');
getStaticInformation('#pack div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

function getDynamicInformation(selector) {
  const input = document.querySelector(selector);

  input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {     //если содержимое инпута не число
          input.style.border = '1px solid red';  //добавляем инлайн стили
      } else {
          input.style.border = 'none';                              
      }
      switch(input.getAttribute('id')) {
          case 'assortPack':
              assortPack = +this.input.value;
              break;
          case 'assortChoose':
              assortChoose = +this.input.value;
              break;
      } 
      calcTotal();        
  });
  
} 
getDynamicInformation('#assortPack');
getDynamicInformation('#assortChoose');
}

//module.exports = calc;   //ComonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);        //ES6

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;

        }

        render(){
            const element = document.createElement('div');
            if(this.classes.length === 0) {                 //для подставления значений по умолчанию прописываем условия для анализа массива, если 0, то чначение по умолчанию
                this.element = 'menu__item';                //значение по умолчанию
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));  //чтобы присвоить создаваемому элементу все будущие классы
            }
            
            element.innerHTML = `            
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }


    //Заполнение карточек через запрос к серверу fetch и db.json !!!

    // const getResource = async (url) => {          //связка операторов async/await для синхронизации кода
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url} ${res.status}`); //метод избежать невидимой ошибки, когда promise из фетч не реагирует на http ошибки
    //     }
    //     return await res.json();
    // };

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {     //внимательно читать документацию data.data !!!
            new MenuCard(img, altimg, title, descr, price,'.menu .container').render()
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const message = {                            //формируем сообщение для пользователя
        //loading: 'Загрузка',
        loading: 'img/form/spinner.svg',         //для добавления спинера или картинки просто прописываем путь
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {  //присваиваем функцию postData на все формы
        bindpostData(item);
    });

    // const postData = async (url, data) => {          //связка операторов async/await для синхронизации кода
    //     const res = await fetch(url, {           
    //          method: "POST",
    //          headers: {
    //              'Content-type': 'application/json'
    //          },                
    //          body: data     //если формат json            
    //     });
    //     return await res.json();
    // };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {      //навешиваем обработчик события 'submit' - которое срабатывает по клику на мышку или клавишу энтер. кнопка "button" - по умолчанию реализует событие "submit", но при этом перезагружает страницу// не интересно
             e.preventDefault(); //отменяем стандартное поведение объекта

            const statusMessage = document.createElement('img');    //если картинка
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `
             display: block;
             margin: 0 auto
             `;
             
             form.insertAdjacentElement('afterend', statusMessage); //вставляем спинер после еллемента, на котором он вызывается, чтобы не двигать флексверстку
                 
             const formData = new FormData(form);  //formData - напрямую не конвертируется в json
             const json = JSON.stringify(Object.fromEntries(formData.entries()));   //более изящная форма работы с json
             
             (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
             // .then(data => data.text())        //переводим значения в текст
             .then(data => {
                 console.log(data);                        //если в консоли не видно, то надо проверить Network
                 showThanksModal(message.success);                    
                 statusMessage.remove();             //удалить спиннер

             }).catch(() => {                        //полученные промисы не покажут http ошибку, а только поменяют свойство status на false 
                 showThanksModal(message.failure);       //показать в случае ошибки
             }).finally(() => {
                 form.reset();        //очистить форму после отправки
             });
                              
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide'); //скрываем эллемент
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); //подвязываем функцию открытие модалки

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `        
             <div class="modal__content">
                 <div class="modal__close" data-close>×</div>
                 <div class="modal__title">${message}</div>        
             </div>
        `;
        document.querySelector('.modal').append(thanksModal); //отображаем эллемент на странице
        setTimeout(() => {               //возвращаем первичное состояние по прошествии времени
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }       
fetch('http://localhost:3000/menu')                 //получаем объект
.then(data => data.json());
// .then(res => console.log(res));

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {                 //чтобы не повторяться, засовываем алгоритм закрывания в функцию
  modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
    
  document.body.style.overflow = ''; 
}

function openModal(modalSelector, modalTimerId) {                  //чтобы не повторяться, засовываем алгоритм открывания в функцию
  modal = document.querySelector(modalSelector);
  modal.classList.add('show');   
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);
  if (modalTimerId) {
  clearInterval(modalTimerId);      //если окно уже было открыто, то повторного показа не будет
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),  //обращаемся ко всем эллементам, которым мы назначили класс data-modal, если эл. один, то querySelector
    modal = document.querySelector(modalSelector);
 
modalTrigger.forEach(btn => {           //если однe и тe же модалку вызывают разные кнопки, помеченные нами data-modal, то псевдомассив перебираем forEach
  btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));  //прием как передать селектор и не сделать функцию самовызывающейся
});


modal.addEventListener('click',  (e) => {    //не забываем передавать аргумент события event(e)
      if (e.target === modal || e.target.getAttribute('data-close') == "") {          //добавляем второе условие e.target.getAttribute('data-close') == ''
          closeModal(modalSelector);                   //при выполнении условия вызываем функцию
      }    
  });

  document.addEventListener('keydown', (e) => {   //закрытие модалки по клавише клавиатуры
      if (e.code === "Escape" && modal.classList.contains('show')) {    //escape, и при открытой модалке
      closeModal(modalSelector);           
      }
  });

  // const modalTimerId = setTimeout(openModal, 500000);

  function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
          openModal(modalSelector, modalTimerId);
          window.removeEventListener('scroll', showModalByScroll);
      }
  }
  window.addEventListener('scroll', showModalByScroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scroll() {
    const  btnAboute = document.querySelector('#aboute'),
    btnProject = document.querySelector('#project'),        
    form = document.querySelector('.offer'),
    formP = document.querySelector('.offer__slider');

btnAboute.addEventListener('click', (e) => { 
e.preventDefault(); 
btnAboute.classList.add('header__link:after');
btnAboute.classList.remove('header__link');      
form.scrollIntoView({
 behavior: 'smooth'
});        
});

btnProject.addEventListener('click', (e) => { 
e.preventDefault();                             //отменяем стандартное поведение эллемента
btnProject.classList.add('header__link:after');
btnProject.classList.remove('header__link');
formP.scrollIntoView({
 behavior: 'smooth'
});        
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
  const prev = document.querySelector(prevArrow),
        slider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        slides = document.querySelectorAll(slide),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;


let slideIndex = 1; //чтобы не начинать нумерацию с 0
let offset = 0;

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${slideIndex}`;
} else {
  total.textContent = slides.length;
  current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
  slide.style.width = width;
});

slider.style.position = 'relative';    //добавляем слайдер и привязываем его к окружению

const indicators = document.createElement('ol'), //создаем эллемент
    dots = [];                                //создаем массив из точек
indicators.classList.add('carousel-indicators'); //помещаем эллемент на страницу

slider.append(indicators);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('li');
  dot.setAttribute('data-slide-to', i + 1);
  dot.classList.add('dot');
  if (i == 0) {
      dot.style.opacity = 1;
  }
  indicators.append(dot);
  dots.push(dot);        //помещаем каждую созданную в результате цикла точку в массив
}

const Dotactive = function() {
  dots.forEach(dot => dot.style.opacity = '.5');
  dots[slideIndex - 1].style.opacity = 1;
}

const Chekindex = function() {
  if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
  } else {
      current.textContent = slideIndex;
  }
}

function deleteWord(str) {
  return +str.replace(/\D/g, '');         //регулярное выражение, вынесенное в функцию
}


next.addEventListener('click', () => {
  //if(offset == +width.slice(0, width.length - 2)) * (slides.length - 1)) { //width.length ('500px') - 2, чтобы убрать px при приведении к числу
  if(offset == deleteWord(width) * (slides.length - 1)) {  //через регулярное выражение, вынесенное в функцию
      offset = 0;
  } else {
      offset += deleteWord(width);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == slides.length) {
      slideIndex = 1;
  } else {
      slideIndex++;
  }

  Chekindex();
  Dotactive();
});

prev.addEventListener('click', () => {
  if (offset == 0){
      offset = deleteWord(width) * (slides.length - 1);
      
  } else {
      offset -= deleteWord(width);
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  
  if (slideIndex == 1) {
      slideIndex = slides.length;
  } else {
      slideIndex--;
  }

  Chekindex();
  Dotactive();
  
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteWord(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
          
      Chekindex();
      Dotactive();

  });
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

function hideTabContent() {
  tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
      
  });
  
  tabs.forEach(item => {
      item.classList.remove(activeClass);
  });

}

function showTabContent(i = 0) {      
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add(activeClass);
}

hideTabContent();
showTabContent();      

tabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
          if (target == item) {
              hideTabContent();
              showTabContent(i);
          }
      });
  }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadLine) {
        
// const deadLine = '2021-08-01';

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

        days.innerHTML = getZero(t.days);                //помещаем значения на страницу c добавлением 0 к одинарным значениям
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {                     //добавляем условие остановки для закончевшегося таймера
            clearInterval(timeInterval);
        }
    }
}

setClock(id, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {          //связка операторов async/await для синхронизации кода
    const res = await fetch(url, {           
         method: "POST",
         headers: {
             'Content-type': 'application/json'
         },                
         body: data     //если формат json            
    });
    return await res.json();
};

async function getResource(url) {          //связка операторов async/await для синхронизации кода
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url} ${res.status}`); //метод избежать невидимой ошибки, когда promise из фетч не реагирует на http ошибки
    }
    return await res.json();
}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ "./js/modules/scroll.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
                  //ES6









window.addEventListener('DOMContentLoaded', () => {

//    const tabs = require('./modules/tabs'),           //ComonJS синтаксиси
//          modal = require('./modules/modal'),
//          scroll = require('./modules/scroll'),
//          slider = require('./modules/slider'),
//          calc = require('./modules/calc'),
//          cards = require('./modules/cards'),
//          forms = require('./modules/forms'),
//          timer = require('./modules/timer');

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 500000);



    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');  //передаем конкретные настройки через аргументы
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerId);
    (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__.default)({
        container: '.offer__slider',            //деструктуризируем объект
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_5__.default)();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__.default)('form', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_7__.default)('.timer', '2021-08-01');

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map