//Purpose: This function ensures that a cart exists in the browser's local storage
//Significance: If the cart doesn't already exist, it initializes it as an empty array ([]). This prevents errors when other functions try to access the cart. The localStorage API is used to store data that persists even after the browser is closed
function initializeCart() {
    if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

//The addToCart function retrieves the current cart, adds a new product, and saves it back to localStorage.
//Purpose: Adds a product to the cart
//Retrieves the current cart from localStorage and parses it from a JSON string to a JavaScript array.
//Adds the new product to this array.
//Converts the updated cart back to a JSON string and saves it in localStorage.
//This function demonstrates how to manipulate arrays and use the localStorage API for data persistence
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//Purpose: Removes a product from the cart based on its ID
//Retrieves and parses the current cart.
//Uses the filter method to create a new array excluding the product with the specified productId
//Saves the updated cart back to localStorage.
//This function illustrates array manipulation techniques and the importance of immutability (creating a new array rather than modifying the existing one).

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//The displayCart function logs the current cart to the console
//Retrieves and parses the current cart.
//Logs the cart array to the console.
//Useful for debugging and visual confirmation of cart contents.
//Demonstrates simple data retrieval and console logging for debugging purposes.
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
}

//Calls the initializeCart function to ensure the cart is initialized when the script runs
//Ensures that the cart exists in localStorage before any operations are performed on it
initializeCart();


//Handles the form submission for adding a product to the cart.
//Retrieves the product name and price from the form inputs.
//Generates a unique ID for the product using the current timestamp (Date.now()).
//Creates a product object with the gathered information.
//Calls the addToCart function to add the new product to the cart.
//Resets the form fields using this.reset().
//Demonstrates handling form events, retrieving and processing form data, and interacting with other functions.

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

    //Resets the form fields using this.reset().
    this.reset();
});

//Sets up an event listener to display the cart contents when a button is clicked.
//Attaches a click event listener to the button with ID displayCartButton
//Calls the displayCart function when the button is clicked.
//Demonstrates event handling for user interactions and linking UI elements to functionality
document.getElementById('displayCartButton').addEventListener('click', displayCart); 
