"use strict";
//  Default parameter
const sum = (a = 2, b = 3) => a + b;
// console.log(sum());

const flight = "LH234";
const vivek = {
  name: "Vivek Bhimani",
  passport: 24739479284,
};

function checkIn(flightNum, passenger) {
  flightNum = "LL111";
  passenger.name = "John Wick";
}

// here flight value will not change but object value will change because it referance same object in memory
checkIn(flight, vivek);
// console.log(flight);
// console.log(vivek);

// Higher Order Function
// ////// Pass function as argument
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transfer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`converted string: ${fn(str)}`);
  console.log(fn.name);
};
// transfer("hello My Name is Vivek", upperFirstWord);
// transfer("hello My Name is Vivek", oneWord);

// //////return function from a function

// with arrow function
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const Hey = greet("hello");
Hey("vb");
// greet("hello")("vb");

// ////////// Call Method
const airIndia = {
  name: "airindia",
  code: "IN",
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.name}  flight ${this.code}${flightNum}`
    );
  },
};

// airIndia.book(112, "vivek bhimani");
const indigo = {
  name: "Indiogo Airline",
  code: "INDI",
};

const book = airIndia.book;
// here we set indigo object in  this in book
// same in apply just pass agrument in array like [876, 'john carlo']
// book.call(indigo, 876, "john carlo");
// console.log(book);

// // Bind Method
// bind method return new function
const bookWithBind = book.bind(indigo);
bookWithBind(254, "sara");

// const demo = {
//   name: "test",
//   printName() {
//     console.log(this, this.name);
//   },
// };

// const pname = demo.printName;

// const test = {
//   name: "vivek himmatbhai bhimani",
// };

// const abc = pname.bind(test);
// console.log(abc());
// pname.call(test);

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// const bookEW = book.bind(eurowings);
// bookEW(23, "Steven Williams");

// IIFE Function

(function () {
  console.log("hello from IIFE Function");
})();
