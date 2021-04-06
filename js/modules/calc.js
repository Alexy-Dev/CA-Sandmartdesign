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
export default calc;        //ES6