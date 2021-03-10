window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
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
const deadLine = '2021-10-11';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60) % 24)), //% дает возможность получить хвостик отбросив целые части
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = querySelector('#days'),
          hours = querySelector('#hours'),
          minutes = querySelector('#minutes'),
          seconds = querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hour;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

}

setClock('.timer', deadLine);
// const sliders = document.querySelectorAll(".offer__slider"),
//       sliderLeft = document.querySelector(".offer__slider-prev, button"),
//       sliderRight = document.querySelector(".offer__slider-next, button"),
//       sliderNum = document.getElementById("span#total"),
//       sliderNumUp = document.getElementById("span#current"),
//       sliderParent = document.querySelector(".offer__slider-counter"),
//       slideContent = document.querySelectorAll(".offer__slide"),
//       slideWrapper = document.querySelectorAll(".offer__slider-wrapper");


//       function hideSlideContent() {
//         slideContent.forEach(item => {
//             // item.style.display = 'none';
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });
//     }

//     function showSlideContent(i = 0) {    
//         slideContent[i].classList.add('show', 'fade');
//         slideContent[i].classList.remove('hide');
//     }

//     hideSlideContent();
//     showSlideContent(); 

});