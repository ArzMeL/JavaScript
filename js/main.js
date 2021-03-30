const products = [
    {id: 1, image: 'img/notebook.jpg', alt:'Notebook',  title: 'Notebook', price: 2000},
    {id: 2, image: 'img/mouse.jpg', alt:'Mouse', title: 'Mouse', price: 20},
    {id: 3, image: 'img/keyboard.jpg', alt:'Keyboard', title: 'Keyboard', price: 200},
    {id: 4, image: 'img/gamepad.jpg', alt:'Gamepad', title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
    return `<div class="product-item">
                <img class="small-img" src="${item.image}" alt="${item.alt}">
                <h3 class="title">${item.title}</h3>
                <p class = "price">${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
