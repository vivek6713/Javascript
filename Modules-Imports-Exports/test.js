// export common js module
// exports.test = () => {
//     console.log('hi');
// }
// this.test()

//============= export in function
function add(a, b) {
    return console.log(`Sum of a and b is: ${a + b}`);
}

function sum(a, b) {
    return console.log(`Sum of a and b is: ${a + b}`);
}

// default export
// export default function printMsg () {
//     console.log('welcome to js modules system');
// }
//============= export in arrow function
const substract = (a, b) => {
    return console.log(`Substraction of a and b is: ${a - b}`);
}

// default export in arrow function
const printMsg = () => console.log('export from arrow function');
export default printMsg;

const welcomeMsg = "welcome to js";

export {add, sum, welcomeMsg, substract};