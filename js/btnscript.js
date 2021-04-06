window.addEventListener('DOMContentLoaded', () => {
        const  btnAboute = document.querySelector('#aboute'),
               btnProject = document.querySelector('#project'),
        //        parent = document.querySelector('.header__links'),
               form = document.querySelector('.offer'),
               formP = document.querySelector('.offer__slider');

       btnAboute.addEventListener('click', (e) => { 
        e.preventDefault(); 
        btnAboute.classList.add('header__link:after');
        btnAboute.classList.remove('header__link');      
        form.scrollIntoView();
        console.log(form);
       });
       btnProject.addEventListener('click', (e) => { 
        e.preventDefault();                             //отменяем стандартное поведение эллемента
        btnProject.classList.add('header__link:after');
        btnProject.classList.remove('header__link');
        formP.scrollIntoView();
        console.log(formP);
       });

//        parent.addEventListener('click', (item) => {
//         item.preventDefault();
//         if (item.id === 'btnAboute') {
//                 btnAboute.classList.add('header__link:after');
//                 btnAboute.classList.remove('header__link');      
//                 form.scrollIntoView();
//         }
//         // if (e.target === 'btnProject') {
//         //         btnProject.classList.add('header__link:after');
//         //         btnProject.classList.remove('header__link');
//         //         formP.scrollIntoView();   
//         // }

//         });

});