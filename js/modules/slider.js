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

export default slider;