function initializeCart() {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
}

initializeCart();

document.getElementById('addProductForm'),addEventListener('submit', function(event) {
    event.preventDefault();

const productName = document.getElementById('productName').value;
const productPrice = parseFloat(document.getElementById('productPrice').value);

const itemId = Date.now().toString();

const item = {
    id: productId,
    name: productName,
    price: productPrice
};

addproduct(product);

this.document.getElementById('addProductForm').reset();
});
