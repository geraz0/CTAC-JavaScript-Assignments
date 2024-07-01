//The initializeCart function checks if there is a cart in localStorage. If not, it initializes an empty cart.
function initializeCart() {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

//The addToCart function retrieves the current cart, adds a new product, and saves it back to localStorage.
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//The removeFromCart function filters out the product with the specified productId and updates the cart.
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//The displayCart function logs the current cart to the console
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
}

initializeCart();

document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    const itemId = Date.now().toString();

    const item = {
        id: itemId,
        name: productName,
        price: productPrice
    };

    addToCart(item);

    this.reset();
});

//sets up an event listener for displaying the cart
document.getElementById('displayCartButton').addEventListener('click', displayCart); 


this.document.getElementById('addItemForm').reset();
});

document.getElementById('displayCartButton').addEventListener('click', displayCart); 
