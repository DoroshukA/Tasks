// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experiance: 4
// }
// employee.salary = 2000;
// employee["age"] = 30;
// console.log(employee);
// let salaryProperty = "salary";
// console.log(employee[salaryProperty]); //2000
// // console.log(employee.salaryProperty); // underfined
// // employee.extra salary = 500; // error
// employee["extra salary"] = 500;

// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experiance: 4,
//     fullName: function() {
//         return employee.firstName + " " + this.lastName;
//     }
// }
// console.log(employee.fullName());

// console.log(this)

// let a = this;
// console.log(a);

// function userFunction() {
//     return this; //Window
// }
// userFunction();

// "use strict";
// function userFunction() {
//     return this; // Undefined
// }

//  <button onclick = "this.style.display='none'">
//     Click to Remove Me!
// </button> 

// let dog = {
//     name: "Flint",
//     breed: "terrier",
//     age: 3
// }

// let employee = new Object();
// employee.firstName = "Peter";
// employee.lastName = "Peterson";
// employee.position = "developer";
// employee.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }
// console.log(employee);

// let employee = {};
// employee.firstName = "Peter";
// employee.lastName = "Peterson";
// employee.position = "developer";
// employee.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }
// console.log(employee);

// function Employee(firstName, lastName, position) {
//     this.firstName  = firstName;
//     this.lastName = lastName;
//     this.position = position;
//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// let devPetPeterson = new Employee("Peter", "Peterson", "dev");
// let testerJohnJohnson = new Employee("John", "Johnson","tester");
// console.log(devPetPeterson);
// console.log(testerJohnJohnson);

// let myObj = {
//     myProperty: 1000,
//     myProperty2:function() {
//         console.log("Hello!");
//     }
// }
// console.log(myObj.hasOwnProperty("myProperty"));
// console.log(myObj.hasOwnProperty("myProperty2"));
// console.log(myObj.hasOwnProperty("myProperty3"));

// class SomeClass {
//     constructor() {

//     }
// }
// let object = new SomeClass();

// class Student {
//     constructor(name) {
//         this.name = name
//     }
// }
// let student = new Student("Sam");
// console.log(student);
// alert(typeof Student) // function
// alert(typeof student) // object

// class Student {
//     constructor(name) {
//         this.name = name
//     }
//     showName() {
//         alert(this.name)
//     }
//     consolName() {
//         console.log(this.name)
//     }
// }
// let student = new Student("Sam");
// student.showName();
// student.consolName();

// /*OLDSCHOOL*/
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.showName = function() {
//     alert(this.name);
// }
// Student.prototype.consolName = function() {
//     console.log(this.name);
// }
// var student = new Student("Sam");
// student.showName();
// student.consolName();

// let Foo = class {
//     constructor() {}
//     bar() {
//         return "Hello World!";
//     }
// };
// let instance = new Foo();
// console.log(instance.bar());
// console.log(Foo.name);

// var Foo = class NamedFoo {
//     constructor() {}
//     whoIsThere() {
//         return NamedFoo.name;
//     }
// }
// var bar = new Foo();
// console.log(bar.whoIsThere());
// // console.log(NamedFoo.name);
// console.log(Foo.name);

// class Book{
//     constructor(author) {
//         this.bookname = author;
//     }
//     static readBook() {
//         return "You reading new book!";
//     }
// };
// let newbook = new Book("Dumas");
// // console.log(newbook.readBook()); //error
// console.log(Book.readBook());

// class Book {
//     static publishingYear = 2015;
// }
// console.log(Book.publishingYear);

// class User  {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             alert("Nameis too short");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User("Garry");
// alert(user.name);
// let user2 = new User("Bob");
// user2.name = "David";
// alert(user2.name);

// class Animal {
//     constructor(kind) {
//         this.kind = kind;
//     }
//     run() {
//         alert(this.kind + " runs!");
//     }
// }
// class Leopard extends Animal {
//     jump() {
//         alert(this.kind + " jump!");
//     }
// }
// let leopard = new Leopard("Sported leopard");
// leopard.jump();
// leopard.run();

// class Animal {
//     constructor(kind, weight) {
//         this.kind = kind;
//         this.weight = weight;
//     }
//     run() {
//         console.log(this.kind + " runs!");
//     }
// }
// class Leopard extends Animal {
//     constructor(kind, weight, speed) {
//         super(kind, weight);
//         this.speed = speed;
//     }
//     jump() {
//         console.log(this.kind + " jumps!")
//     }
// }
// let leopard = new Leopard("Spotted leopard",40,60);
// console.log(leopard.weight);
// console.log(leopard.speed);
// console.log(Leopard);
// leopard.jump()

// class Animal {
//     constructor(kind, weight) {
//         this.kind = kind;
//         this.weight = weight;
//     }
//     run() {
//         console.log(this.kind + " runs!");
//     }
// }
// class Leopard extends Animal {
//     constructor(kind, weight, speed) {
//         super(kind, weight);
//         this.speed = speed;
//     }
//     run() {
//         super.run();
//         console.log(this.kind + " getting ready to jump");
//     }
//     jump() {
//         console.log(this.kind + " jumps!");
//     }
// }
// let leopard = new Leopard("Spotted leopard",40,60);
// leopard.run();

// class CoffeMachine {
//     _waterAmount = 0;
//     constructor(power) {
//         this.power = power;
//         console.log('Created a coffe-machine, power: ' + power);
//     }
// }
// let coffeMachine = new CoffeMachine(100);
// coffeMachine.waterAmount = 200;
// console.log(coffeMachine);


// class CoffeMachine {
//     #waterLimit = 200;

//     checkWater(value) {
//         if (value < 0) throw new Error("Negative warer");
//         if (value > this.#waterLimit) throw new Error("To much water");
//     }
// }
// let coffeMachine = new CoffeMachine();
// coffeMachine.checkWater();
// coffeMachine.waterLimit;


// class CoffeeMachine {
//     _waterAmount = 0;
//     set waterAmount(value) {
//       if (value < 0) throw new Error("Negative water");
//       this._waterAmount = value;
//     }
//     get waterAmount() {
//       return this._waterAmount;
//     }
//     constructor(power) {
//       this._power = power;
//     }
//   }
//   let coffeeMachine = new CoffeeMachine(100);
//   coffeeMachine.waterAmount = -10; // Error: 					Negative water
  