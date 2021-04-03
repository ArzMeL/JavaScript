class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.priceSum();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
    //       block.innerHTML += productObj.render();
        }
    }

       priceSum(){
            let sum = 0;
            for(let product of this.goods){
                sum += product.price;
            }
            console.log('Сумма товаров равна ' + sum);
        } 
}


class ProductItem{
	constructor(product, img = 'https://kayanhouse.com/assets/backend/custom/images/placeholder.jpg'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

class Cart{
    //добавить товар
    addItem(){

    }
    //удалить товар
    removeItem(){

    }
    //удалить все товары
    removeAllItem(){

    }
    //отрисовка товаров
    render(){

    }
}

class cartItem {
    //отрисовка товара
    render(){

    }
    //удалить товар
    removeItem(){

    }
}
let list = new ProductsList();
list.render();






    



