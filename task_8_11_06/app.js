/*1. 
Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character
======================================================*/
function upperCase(str) {
    regExp = /^[A-Z]/;
if (regExp.test(str)) {
    console.log("String's starts with uppercase character");
} else {
    console.log("String's not starts with uppercase character");
}
}
upperCase('regJexp');
upperCase('RegExp');

/*2. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
======================================================*/
function checkEmail1(em) {
	regExpM = /^(\w)+\@(\w)+\.(\w)+$/;
	d = regExpM.test(em)
    console.log(d)
}
checkEmail1("Qmail2@gmail.com");

/*3. 
Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:   
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]
======================================================*/
let str = "cdbBdbsbz";
arr = str.match(/b{2,}|d/gi);
arr[0] = str.match(/d{1}b+d{1}/gi).join();
console.log(arr);

/*4. 
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
======================================================*/
let strEx = "Java Script"
console.log(strEx.match(/\w+|\w+/g).reverse().join(", "))

/*5. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
======================================================*/
function validateCard(num) {
if (/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(num)) {
	console.log("Card valid. Enter your Pin!");
} else {
	console.log("Incorect card number!")
}
}
validateCard("9999-9999-9999-9999");

/*6. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct!
======================================================*/
function checkEmail(email) {
	if (/^[^-,_,#](\w)+(-{1})?(\w)+\@(\w)+(-{1})?(\w)+\.(\w)+$/.test(email)) {
		console.log("Email is correct!");
	} else {
		console.log("Email is not correct!")
	}
}
checkEmail('My_mail@gmail.com');
checkEmail('#my_mail@gmail.com');

/*7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee1.1ret3');
true 
1.1, 3

checkLogin('ee1*1ret3');
false 
1, 1, 3
======================================================*/
function checkLogin(login) {
	console.log(/^([^\d,_,*]\w)\w[^_,*]/.test(login));
	// console.log(/(\d\.?\d)|\d/g.test(login));
	console.log(login.match(/(\d\.?\d)|\d/g));
}

checkLogin('eeee1.uret3')
checkLogin('ee1*1ret3')

