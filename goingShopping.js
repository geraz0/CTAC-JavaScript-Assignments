let shoppingList = ['pop tarts' , 'ramen noodles' , 'chips' , 'salsa' , 'coffee'];

shoppingList.push('fruit loops');
shoppingList[4]= 'fair trade coffee';
shoppingList.splice[2,2, 'rice' , 'beans'];

let shoppingCart =[]

shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 0) {
shoppingCart.push(shoppingList.pop());
}

shoppingCart.sort();
shoppingCart.reverse();


shoppingCart.toString();

console.log ( shoppingList);
console.log (shoppingCart.join (', '));