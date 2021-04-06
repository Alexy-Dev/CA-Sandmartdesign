import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

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
             
             postData('http://localhost:3000/requests', json)
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
        openModal('.modal', modalTimerId); //подвязываем функцию открытие модалки

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
            closeModal('.modal');
        }, 4000);
    }       
fetch('http://localhost:3000/menu')                 //получаем объект
.then(data => data.json());
// .then(res => console.log(res));

}

export default forms;