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

export default scroll;