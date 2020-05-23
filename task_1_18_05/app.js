/*2.  
Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
Підключіть створений файл до HTML-документу*/
console.log("Андрій");

/*3. 
a) оголосіть дві змінні;
b) запишіть у змінні будь-які значення;
c) виведіть на екран значення змінних;
d) скопіюйте значення однієї змінної в іншу;
e) виведіть на екран значення змінних.*/
let a = 123;
let b = "something";
document.write(a +'<br/>');
document.write(b +'<br/>');
a = b;
document.write(a);

/*4. 
Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/
let c;
let d = null;

 covid_19 = {
     bornPlace: "China",
     infected: 4913000,
     isGrowing: true,
     copletion: c,
     nullPatient: d
};
console.log(typeof covid_19); //"object"
console.log(typeof covid_19.bornPlace); //“String”
console.log(typeof covid_19.infected); //“Number”
console.log(typeof covid_19.isGrowing); //“Boolean”
console.log(typeof covid_19.copletion); //“Undefined”
console.log(typeof covid_19.nullPatient); //"object" but in fact “Null”

/*5. 
Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.*/
let isAdult = confirm("Hi! Are you already 18 years old?");
console.log(isAdult);

/*6. continuation...-->  /andrew.js */

/*7. 
За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/
let login = prompt("Hi! Write your login", "User");
let email = prompt("And now write your email", "usermale@gmail.com");
let password = prompt("Would you risk writing your password?", "qwerty");
let resul = "Dear " + login + ", your email is " + email + ", your password is " + password +".";
alert(resul);
document.write('<br/>' + resul);

/*8. 
Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.*/
let sec_hour = 60 * 60;
let sec_day = 24 * sec_hour;
let sec_month_30 = 30 * sec_day;

alert("Do you know how many seconds are in 1 hour or in a day?");
alert("...or month?");
alert("This is a rhetorical question!!  :)  ");

let hour = prompt("One hour it's 360 seconds.\nHow many hours are you interested in?", 12);
let use_hour = sec_hour * hour;
alert(use_hour);
document.write('<br/>' + hour + " hours = " + use_hour + " seconds");

let day = prompt("One day it's 8640 seconds.\nHow many days are you interested in (1 week = 168 hours)?", 7);
let use_day = sec_day * day;
alert(use_day);
document.write('<br/>' + day + " days = " + use_day + " seconds");

let month = prompt("One month it's 259200 seconds (provideed 1 month = 30 days).\nHow many months are you interested in (provideed 1 month = 30 days)?", 12);
let use_month = sec_month_30 * month;
alert(use_month);
document.write('<br/>' + month + " months = " + use_month + " seconds");