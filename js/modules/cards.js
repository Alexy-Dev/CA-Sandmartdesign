window.addEventListener('DOMContentLoaded', () => {

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
        if(this.classes.length === 0) {
            this.element = 'menu__item'; 
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
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
    '.menu .container',
    'menu__item'
   

 ).render();

 new MenuCard(
    "img/tabs/pack2.jpg",
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

});
// export default cards;