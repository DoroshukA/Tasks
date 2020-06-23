// if (true) {
//     var name1 = "Ben";
//     let name2 = "Nick";
// }
// console.log(name1);
// console.log(name2);

// console.log(name1);
// var name1 = "Ben";

// var array = [];
// for (var i = 0; i < 10; i++) {
//     array[i] = function () {
//         console.log(i);
//     };
// }
// array[0]
// array[4]

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = function () {
//         alert(i);
//     };
// }
// array[0]();
// array[4]();

// const newString = `text in backtick`;

// let name = "John";
// let job = `engineer`;
// let str = `${name} works at factory as an ${job}`;
// console.log(str);

// let salary = 900;
// let bonus = 400;
// const income = `Your monthly income will be ${salary + bonus}`;
// console.log(income);

// console.log(`Example 
// multiline 
// lines`);

// чи можутьзворотні лапки повністю замінити стандартні???

/*Arrow fuction*/

// let reflect = value => value;
// let reflect = function() {
//     return value;
// };

// let sum = (a,b) => a + b;
// //  ES5 analog
// //  let sum = function(a,b) { return a + b;};
// alert( sum(1,2) );

// const arr = [5, 8, 3];
// const sorted = arr.sort( (a,b) => a - b );
// alert(sorted);

// function Person() {
//     let self = this;
//     this.age = 0;

//     setInterval(function growUp() {
//         self.age++;
//     }, 1000);
// }
// let p = new Person();
// console.log(p.age)
// console.log(p.age)
// console.log(p.age)


// function Person() {
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//     }, 1000);
// }
// let p = new Person;

// const numbers = [11, 8, 44, 87];
// const minimum = Math.min(...numbers);
// console.log(minimum);

// const arr1 = [7, 3, 9, 12, 21];
// const arr2 = [22, 7, 15, 18, 33];
// const concatArray = [...arr1, ...arr2];
// console.log(concatArray);

// const func = (arg1, ...rest) => {
//     console.log(arg1);
//     console.log(rest);
// }
// func("First", "Second", "Third", "Fourth");

// function func(arg1, arg2, arg3) {
//     console.log(arg1 + " " + arg2 + " " + arg3);
// }
// let data = ["First", "Second", "Third", "Fourth"];
// func(data);
// func(...data);

// let colors = ["red", "green", "blue"];
// let [firstColor, secondColor] = colors;
// console.log(firstColor);
// console.log(secondColor);

// let colors = ["red", "green", "blue"];
// let [,,thirdColor] = colors;
// console.log(thirdColor);

// let [,firstColor, ...rest] = ["red", "green", "blue", "brown"];
// console.log(firstColor);
// console.log(rest);

// const direction = {
//     type: "web",
//     name: "JavaScript"
// };
// const { type, name } = direction;
// console.log(type);
// console.log(name);

// let cities = {
//     first: "Lviv",
//     second: "Kyiv",
//     third: {p1:"Berlin", p2:"Hamburg"}
// };
// let {first: f, second: s, third: {p1, p2}} = cities;
// console.log(f);
// console.log(s);
// console.log(p1);
// console.log(p2);

// function func ({first, second, third}) {
//     console.log(first + " " + second + " " + third);
// }
// let cities = {
//     first: "Lviv",
//     second: "Kyiv",
//     third: "Dnipro"
// };
// func(cities);

// let sym = Symbol();
// alert( Symbol("name") == Symbol("name"));

// let data1 = Symbol.for("data");
// let data2 = Symbol.for("data");
// console.log(data1 === data2);

// let key = Symbol("key");
// let person = {
//     position: "webDev",
//     experience: 3,
//     [key]: 100
// };
// for (let props in person) {
//     console.log(props);
// }
// console.log(person[key]);

// let text = "DOM";
// for (let elem of text) {
//     console.log(elem);
// }

// let text = "DOM";
// let iterator = text[Symbol.iterator]();
// while (true) {
//     let res = iterator.next();
//     if (res.done) break;
//     console.log(res.value);
// }

// const newSet = new Set( [args] );

// let cities = new Set();
// let kyiv = "Kyiv";
// let rome = "Roma";
// let berlin = "Berlin";
// let madrid = "Madrid";
// cities.add(kyiv);
// cities.add(rome);
// cities.add(berlin);
// cities.add(madrid);
// cities.add(kyiv);
// console.log(cities.size);
// console.log(cities.has(berlin));
//  for (let city of cities) {
//      console.log(city);
//  }

// let newMap = new Map( [args] );

// let map = new Map();
// map.set("name", "Nicolas");
// map.set("age", 25);
// console.log(map.size);
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.has("age"));
// console.log(map.get("age"));
// map.delete("name");
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.size);
// map.clear();
// console.log(map.has("name"));
// console.log(map.get("name"));
// console.log(map.size);

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);
// }
// for (let amount of recipeMap.values()) {
//     console.log(amount);
// }
// for (let entry of recipeMap()) {
//     console.log(entry); //the same as of recipeMap.entries()
// }
