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

export default modal;
export {closeModal};
export {openModal};