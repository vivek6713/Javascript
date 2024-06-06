// import module is top level execution
// console.log('import module');
// import {addToCart, cart, totalPrice} from './shoppingCart.js';
// import add from './shoppingCart.js';

// addToCart('dhosa', 2);
// console.log(cart)
// console.log(totalPrice);
// add('meggie', 3);

// console.log("this is test");

// =========import common js module
// const test = require('./test.js'); // this will return object
// const { test } = require('./test.js'); // deconstruct object to import only test method


// import named and default export modules
import printMsg, {add, sum, welcomeMsg, substract} from './test.js';
add(2, 3);
substract(8, 3);
sum(4, 5);
console.log(welcomeMsg);
printMsg();
