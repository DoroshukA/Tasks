/*1. 
Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
==================================================*/
function calcRectangleArea(width, height) {
    if (isNaN(height) || isNaN(width)) {
            console.log("Write the number please")
            return;
        }
        S = width * height;
        console.log(S);
}
calcRectangleArea(5, "g");
try {
    isNaN(S);
} catch (exception) {
    console.log(exception.name);
}

/*2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
==================================================*/
function checkAge() {
    age = prompt("How old are you? Please enter your age!");
    if (age === "") {
        throw new Error("The field is empty! Please enter your age!");
    } else if (age < 14) {
        throw new Error("You are still very young!");
    } else if (isNaN(age)) {
        throw new Error("Enter number please!");
    } else {
        alert("Pleasant viewing");

            // let video = document.getElementById("video"); //--?? не працює--??
            // video.classList.add("show");

            document.write('<a class="button" href="https://www.youtube.com/watch?v=J6pN-6wxeu4&feature=em-share_video_user">Приємного перегляду</a>');
    }
}
try {
    checkAge();
} catch (Error) {
    alert(Error.message);
    alert(Error.stack);
}

/*3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number
==================================================*/
// class MonthException {
// 	constructor(message) {
// 		this.name = message;
// 	}
// 	month() {
// 		console.log(this.name)
// 	}
// }
// let a = new MonthException("May")
// a.month()
//===========================

class MonthError {
	constructor(message) {
		this.name = message;
	}
	message() {
		console.log(this.name)
	}
}
let error = new MonthError ("Incorrect month number")

function showMonthName(month) {
	monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	if (month > 0 && month <= 12) {
		console.log(monthes[month - 1])
	} else if (isNaN(month) || month <= 0 || month > 12) {
		error.message()
	}
}
function func() {
	    try {
	        showMonthName(5);
	    } catch (error) {
	        if (error.name === "TypeError") {
	            console.log("Error handling TypeError type");
	            error.message()
	        } else {
	            throw error;
	        }
	    }
	}
	try {
	    func();
	} catch (error) {
	    console.log("Error handing of any type");
	    console.log(error.message);
	}

/*4. 
Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів де значеннями ключів є коректні елементи ids.

	Приклад роботи програми:
showUsers([7, -12, 44, 22])
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
==================================================*/
function showUser(id) {
	let idObj = {id}
	try {
		if (id < 0) {
			throw new Error("ID must not be negative: " + id);
		} else if (idObj.id > 0) {
			return idObj;
		}
		} catch (Error) {
			console.log(Error.name);
			console.log(Error.message)
		}	
}
function showUsers(ids) {
	let corrArr = [];
	let i = -1;
	while  (i < ids.length - 1) {
		i++;
		corrArr.push(showUser(ids[i]));
	}
	corrArr = corrArr.filter(function(arg) {
		return arg !== undefined; 
	});
	console.log(corrArr);
}
showUsers([7, -12, 44, 22]);
	