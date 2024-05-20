// import module is top level execution
console.log('import module');
import {addToCart, cart, totalPrice} from './shoppingCart.js';
import add from './shoppingCart.js';

addToCart('dhosa', 2);
console.log(cart)
console.log(totalPrice);
add('meggie', 3);

console.log("this is test");
