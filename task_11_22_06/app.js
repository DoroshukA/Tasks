/*1. 
Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
=================================================*/
const http = require("http");


http.createServer(function (request, response) {
  const os = require("os");
  const path = require("path");

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>System information</h2>")
  
  response.write("<p></p>" + "Current user name: " + os.userInfo().username);
  response.write("<p></p>" + "OS type: " + os.type());
  response.write("<p></p>" + "System work time: " + os.uptime()/60 + " minutes");
  response.write("<p></p>" + "Current work directory: " + path.resolve(__dirname));
  response.write("<p></p>" + "Server file name: " + path.parse(__filename).name);

  response.end("<p>Testing NodeJS server</p>");
}).listen(5000);
console.log('Server running at http://localhost:5000/');
 


/*2. 
Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
	Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:
=================================================*/
 


