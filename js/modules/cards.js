import {getResource} from '../services/services';

function cards() {
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


    //Заполнение карточек через запрос к серверу fetch и db.json !!!

    // const getResource = async (url) => {          //связка операторов async/await для синхронизации кода
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url} ${res.status}`); //метод избежать невидимой ошибки, когда promise из фетч не реагирует на http ошибки
    //     }
    //     return await res.json();
    // };

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {     //внимательно читать документацию data.data !!!
            new MenuCard(img, altimg, title, descr, price,'.menu .container').render()
        });
    });
}

export default cards;