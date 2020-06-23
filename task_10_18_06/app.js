// 1. 
// Є такий код:
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [/* Ваш код */] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]
// Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.==============================================
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); 
console.log(y);
console.log(z);


// 2. 
// Є такий код:
// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let /* Ваш код */ = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
//     Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях
//==============================================
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {
   names:[name1, name2, name3, name4],
   ages:[age1,age2,age3,age4]
   } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

/*3. 
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
	Якщо параметри типу Number відсутні, повертає число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.
==============================================*/
function mul(...str) {
   let arrNum = [];
   let mult = 1;

   for (el of str) {
      if (/^\d*$/g.test(el)) {
         arrNum.push(el);
        }
   }
   for (let i = 0; i < arrNum.length; i++) {
         mult *= arrNum[i]; 
   }
   if (arrNum.length > 0) {
      return mult;
   } else {
      return 0;
   }
}
console.log(mul(5,5,"gfg",5,5));
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

console.log(mul(true, true, true, true));
console.log(mul(1, true, true, true));
console.log(mul(1, "str", false, true));

/*4. 
Є такий код:
let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
Змініть код використовуючи стрілочні функції, щоб в коді не використовувалися методи bind().
==============================================*/
let server = {
   data: 0,
   convertToString: callback => callback(() => server.data + "")
};
let client = {
   server: server,
   result: "",
   calc: data => {
      server.data = data;
      server.convertToString(client.notification());
   },
   notification: () => callback => client.result = callback()
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

/*5. 
Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
Приклади використання функції:
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"
==============================================*/
function mapBuilder (keysArray, valuesArrays) {
   const a = new Map()
   for (i=0; i<keysArray.length; i++) {
      a.set(keysArray[i], valuesArrays[i])
   }
   return a
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"