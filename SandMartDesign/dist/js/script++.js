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
        // tabsContent[i].style.display = 'block';
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
});

const sliders = document.querySelectorAll(".offer__slider"),
      sliderLeft = document.querySelector(".offer__slider-prev, button"),
      sliderRight = document.querySelector(".offer__slider-next, button"),
      sliderNum = document.getElementById("span#total"),
      sliderNumUp = document.getElementById("span#current"),
      sliderParent = document.querySelector(".offer__slider-counter"),
      slideContent = document.querySelectorAll(".offer__slide"),
      slideWrapper = document.querySelectorAll(".offer__slider-wrapper");
      

  

    //   function toggleSlider() {
    //       if (i = 0, i < 4, i++) {
    //           sliderRight.classList.add('current');
              
    //       }          
    //   }

      function hideSlideContent() {
        slideContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        // sliders.forEach(item => {
        //     item.classList.remove('offer__slider-counter');
        // });

    }

    function showSlideContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        slideContent[i].classList.add('show', 'fade');
        slideContent[i].classList.remove('hide');
    }

    

    hideSlideContent();
    showSlideContent(); 
    // toggleSlider();     

        // sliders.addEventListener('click', (event) => {
        //     if (i = 0, i < 4, i++) {
        //         sliderNum.classList.add('current');   
        //   }
        // });

    //   sliderRight.event = 'click';
    
    // slideTabParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__item')) {
    //         sliders.forEach((item, i) => {
    //             if (target == item) {
    //                 hideSlideContent();
    //                 showSlideContent(i);
    //             }
    //         });
    //     }
    // }
    
    sliderParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('offer__slider-prev')) {
            sliderLeft.forEach((item, i) => {
                if (target == item) {
                    hideSlideContent();
                    showSlideContent(i--);
                }
                
            });
        }
        else if (target && target.classList.contains('offer__slider-next')) {
            sliders.forEach((item, i) => {
                if (target == item) {
                    hideSlideContent();
                    showSlideContent(i++);
                }
                
            });
        }
    });
    
