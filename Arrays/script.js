"use strict";
/*let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Slice and splice are used to axtract part from array, differance is slice does not change original array and splice is change original array
// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE method mutate original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:     You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/
// const lang = ['english', 'hindi', 'gujarati'];
// for(const [key, value] of lang.entries()) {
//   console.log(key, value);
// }
const transactions = [100, 200, -100, 1000, -200];
// Map Method
const mapData = transactions.map((val) => {
  return val * 2;
});
// Filter Method
const filterData = transactions.filter((val) => {
  return val > 0;
});
console.log(filterData);
// Reduce Method
const reduceData = transactions.reduce((acc, cur) => acc + cur);
console.log("reduce method--" + reduceData, transactions);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const isCherries = ({ name }) => {
  return name === "cherries";
};

console.log(inventory.find(isCherries));

const squar = transactions.map((val) => val * val);
console.log(squar);
// transactions.forEach((val) => console.log(val));
// Includes method: check element is in entries of array or not
//  console.log(transactions.includes(100)); // return true or false

const person = {
  firstName: "Vivek",
  lastName: "Bhimani",
  birthYear: 2001,
  job: "web developer",
  hasLicense: true,
  calAge: function () {
    return 2024 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calAge()}-year old, he has ${
      this.hasLicense ? "a" : "no"
    } driver licence`;
  },
};
// console.log(Object.values(person));
console.log(person.getSummary());
