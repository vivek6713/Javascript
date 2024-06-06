'use strict';

// oop in javascript
// implement oops with constructure function

const User = function(id, name) {
    // instance property
    this.id = id,
    this.name = name
}
/**
 * when we call constructor function 4 things happen
 * 1.empty object {} created
 * 2.call function and empty object set to this keyword 
 * 3.object link to prototype
 * 4.function automatically return {}
 */
// object created from constructur function called instance
const vb = new User(1, 'vb');
// console.log(vb instanceof User); // it give return boolean, if it is instance of user then return true

// define method for user constructor also we can define properties 
User.prototype.fullDetail = function() {
    console.log(`${this.name} has id is ${this.id}`);
}
console.log(vb);
vb.fullDetail();

// object.prototype which is top in prototype chain and it's prototype is null
console.log(vb.__proto__); // return constructure prototype
console.log(vb.__proto__.__proto__); // return object.prototype
console.log(vb.__proto__.__proto__.__proto__); // return null

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

//1:
const Car = function(speed) {
    this.speed = speed
}
// 2:
Car.prototype.accelerate = function() {
    this.speed = this.speed + 10;
    console.log(this.speed);
}
// 3:
Car.prototype.brake = function(){
    this.speed = this.speed - 5
    console.log(this.speed);
}
// 4:
const BMW = new Car(120);
const Mercedes = new Car(95);
BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();

// ES6 Classes
// same as constructor function just change syntax
// note: class are not hoisted(can not use before declare)
// class declaration
class PersonalInfo {
    constructor(name, byear) {
        this.name = name;
        this.byear = byear;
    }

    // declare in prototype property not in object
    age() {
        console.log(2024 - this.byear);
    }
}

const tylor = new PersonalInfo('tylor', 2001);
console.log(tylor);
tylor.age();

//==============object.create===========//
const PersonProto = {
    detail(fname, age) {
        this.fname = fname;
        this.age = age;
    }
}

const jessica = Object.create(PersonProto);
jessica.detail('Jessica', 20);

// ========== inheritance between classes and constructor ========
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person.prototype.calAge = function(){
    console.log(2024 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    // use same parameter from person
    Person.call(this, firstName, birthYear);
    this.course = course
}

// student is also a persona so we link to person prototype
Student.prototype = Object.create(Person.prototype);

const walter = new Student('Walter', 2000, 'BCA');
// call method from person constructor
walter.calAge();

// student prototype constructor should point to student constructor
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ======== inheritance in classes ========//
class PersonCL {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    #printBirth() {
        console.log(`${this.firstName} birth year is ${this.birthYear}`);
    }
}

// const mira = new PersonCL('Mira', 2001);
// mira.printBirth()
// console.log(mira); 

class StudentCl extends PersonCL {
    constructor(firstName, birthYear, course){
        super(firstName, birthYear)
        this.course = course
    }
}

const john = new StudentCl('John', 2000, 'IT');

// call method from parent class
// john.#printBirth();

