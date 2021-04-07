const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://kayanhouse.com/assets/backend/custom/images/placeholder.jpg'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
                
            </div>`
    }
}

class Basket {
    constructor(container = '.cart-menu'){
        this.container = container;
        this.cartGoods = [];//массив товаров
        this.allContents = [];//массив объектов
        this._getBasket()
            .then(basketContents => { 
                this.cartGoods = [...basketContents.contents];
                this.render()
            });
        }
        _getBasket(){
            return fetch(`${API}/getBasket.json`)
                .then(basketContents => basketContents.json())
                .catch(error => {
                    console.log(error);
                })
        }
        render(){
            const cartblock = document.querySelector(this.container);
            for (let contents of this.cartGoods){
                const contentObj = new BasketItem(contents);
                this.allContents.push(contentObj);
                cartblock.insertAdjacentHTML('afterbegin', contentObj.render());
            }
    
        }
}

class BasketItem {
    constructor(contents, img = 'https://kayanhouse.com/assets/backend/custom/images/placeholder.jpg'){
        this.title = contents.product_name;
        this.price = contents.price;
        this.id = contents.id_product;
        this.quantity = contents.quantity;
        this.img = img;
    }
render(){
    return `<div class="cart-elem" data-id="${this.id}">
            <img src="${this.img}" alt="Some img">
            <div class="cart-desc">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <p>Количество: ${this.quantity} шт.<p>
                <button class="cart-btn">Удалить товар</button>
                <button class="cart-btn">Добавить товар</button>
            </div>
            
        </div>`
}
}
let list = new ProductsList();
let basketList = new Basket();

function clickOnButton() {
    document.getElementById("cart-menu-dropdown").classList.toggle("show");
}
    window.onclick = function(event) {
        if (!event.target.matches('.btn-cart')) {
      
          let dropdowns = document.getElementsByClassName("basket");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }