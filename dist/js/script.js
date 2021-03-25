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
      modal = document.querySelector('.modal');
    //   modalCloseBtn = document.querySelector('[data-close]');   //данный эллемент не будет работать в динамически созданных эллементах


modalTrigger.forEach(btn => {           //если однe и тe же модалку вызывают разные кнопки, помеченные нами data-modal, то псевдомассив перебираем forEach
    btn.addEventListener('click', openModal);
});

function closeModal() {                 //чтобы не повторяться, засовываем алгоритм закрывания в функцию
    modal.classList.add('hide');
    modal.classList.remove('show');
      
    document.body.style.overflow = ''; 
}

function openModal() {                  //чтобы не повторяться, засовываем алгоритм открывания в функцию
    // modal.classList.toggle('show'); //та же логика, но через toggle
    modal.classList.add('show');   
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);      //если окно уже было открыто, то повторного показа не будет
}

//modalCloseBtn.addEventListener('click', closeModal); //указываем функцию closeModal в качестве аргумента


modal.addEventListener('click',  (e) => {    //не забываем передавать аргумент события event(e)
        if (e.target === modal || e.target.getAttribute('data-close') == "") {          //добавляем второе условие e.target.getAttribute('data-close') == ''
            closeModal();                   //при выполнении условия вызываем функцию
        }    
    });

    document.addEventListener('keydown', (e) => {   //закрытие модалки по клавише клавиатуры
        if (e.code === "Escape" && modal.classList.contains('show')) {    //escape, и при открытой модалке
        closeModal();           
        }
    });

    const modalTimerId = setTimeout(openModal, 500000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    //menucard of class

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

     new MenuCard(
        "img/tabs/post.jpg",
        "vegy",
        "Упаковка для линии продукции",
        "Отличная возможность для тех у кого уже есть ТМ, создать новую линейку продукции. Как для уже известного бренда, так и для нового игрока рынка. За 1-1,5 месяца мы разработаем для Вас дизайн линейки продукции до 6 ас/позиций и сдадим файлы в производство. (*фото/иллюстрации оплачиваются отдельно)",
        3000,
        '.menu .container'
        //здесь забыли указать общий класс верстки 'menu__item", но он добавился по умолчанию

     ).render(); //усли надо использовать метод только один раз

     new MenuCard(
        "img/tabs/Pack2.jpg",
        "brandFool",
        "Бренд под ключ!",
        "Если у вас есть продукт, который нуждается в имени, упаковке и месте в сердцах покупателей, то это предложение для Вас!!! За 1,5-2 месяца мы разработаем FMCG бренд от названия и логотипа, до фирменного стиля и упаковки с 4-6 ассортиментными позициями. (*создание сайта оплачивается отдельно)",
        5000,
        '.menu .container',
        'menu__item'

     ).render();

     new MenuCard(
        "img/tabs/vegy.jpg",
        "post",
        "Быстрый старт!",
        "У Вас уже есть название (имя бренда), и необходимо разработать логотип + фирменный стиль (4-5 позиций), или логотип + упаковка (1-2 позиции), то это предложение отличный выбор. Время выполнения работы 3-4 недели, и вы получите готовые к производству файлы, для успешного рыночного старта продукта.",
        2000,
        '.menu .container',
        'menu__item'

     ).render();


    //sliders

    const prev = document.querySelector(".offer__slider-prev"),
          next = document.querySelector(".offer__slider-next"),
          slides = document.querySelectorAll(".offer__slide"),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');


    let slideIndex = 1; //чтобы не начинать нумерацию с 0
    
    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

  


        function showSlides(n) {
      
        if (n > slides.length) {
            slideIndex = 1; 
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
        // slides.classList.add('show', 'fade');
        // slides.classList.remove('hide');
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    

     prev.addEventListener('click', () => {
        plusSlides(1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });


    //CALCULATOR

    const result = document.querySelector('.calculating__result span'),
          inputBlocks = document.querySelectorAll('input');
       

    let name, input;


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
    calcTotal(i = 0);

    function getStaticInformation(parentSelector, activeClass) {            //получение данных со статичных объектов
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {                          //перебираем массив, с целью избавиться от ошибок делегирования, которые распространяются на весь див

            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');   //если в диве несколько объектов, то обращаемся к data-ratio
                }  else {
                    name = e.target.getAttribute('id');            //если в диве 2 объекта, то обращаемся к уникальному 'id'
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

    getStaticInformation('#name', 'calculating__choose-item_active');
    getStaticInformation('#logo', 'calculating__choose-item_active');
    getStaticInformation('#tm', 'calculating__choose-item_active');
    getStaticInformation('#style', 'calculating__choose-item_active');
    getStaticInformation('#site', 'calculating__choose-item_active');
    getStaticInformation('#pack', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

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
                    assortPack = +input.value;
                    break;
                case 'assortChoose':
                    assortChoose = +input.value;
                    break;
            } 
            calcTotal();        
        });
        
    } 
    getDynamicInformation('#assortPack');
    getDynamicInformation('#assortChoose');

    //кнопки scrollIntoView (прокрутка страницы до определенного эллемента)

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
       
       //forms (отправка данных на сервер)

       const forms = document.querySelectorAll('form');

       const message = {                            //формируем сообщение для пользователя
           loading: 'Загрузка',
           success: 'Спасибо! Скоро мы с Вами свяжемся',
           failure: 'Что-то пошло не так...'
       };

       forms.forEach(item => {  //присваиваем функцию postData на все формы
           postData(item);
       });

       function postData(form) {
           form.addEventListener('submit', (e) => {      //навешиваем обработчик события 'submit' - которое срабатывает по клику на мышку или клавишу энтер. кнопка "button" - по умолчанию реализует событие "submit", но при этом перезагружает страницу// не интересно
                e.preventDefault(); //отменяем стандартное поведение объекта

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.textContent = message.loading; //хранилище данных
                form.append(statusMessage);  //добавляем к форме одно из сообщений из подготовленных для пользователя в const message.
                
                const request = new XMLHttpRequest();
                request.open('POST', 'js/server.php');

                
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');  //если данные в формате json
                const formData = new FormData(form);  //formData - напрямую не конвертируется в json

                const object = {};                      //переведя в обычный объект, мы можем работать с форматом json
                formData.forEach(function(value, key){
                    object[key] = value;
                });

                const json = JSON.stringify(object);

                request.send(json);         //отправляем на сервер. 

                request.addEventListener('load', () => {    //отслеживаем загрузку
                    if (request.status === 200) {
                        console.log(request.response);                        
                        showThanksModal(message.success);
                        form.reset();        //очистить форму после отправки
                         setTimeout(() => {
                        statusMessage.remove();  //убрать сообщение через 2 сек
                        }, 2000);
                        
                    } else {
                        // statusMessage.textContent = message.failure;
                        showThanksModal(message.failure);
                    }
                });                                
           });
       }
       function showThanksModal(message) {
           const prevModalDialog = document.querySelector('.modal__dialog');
           prevModalDialog.classList.add('hide'); //скрываем эллемент
           openModal(); //подвязываем функцию открытие модалки

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
               closeModal();
           }, 4000);
       }         
});