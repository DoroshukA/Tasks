/*6. 
В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення.
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/
let APPLICANT;
let NAME_APPLICANT = "Andrew";
let SURNAME_APPLICANT = "Doroshuk";
let STUDY_GROUP_APPLICANT = "510.JavaScript";
let YEAR_OF_BIRTH_APPLICANT = 1987;
let ESPOUSED_APPLICANT = true;
console.log(YEAR_OF_BIRTH_APPLICANT, ESPOUSED_APPLICANT, NAME_APPLICANT, SURNAME_APPLICANT, STUDY_GROUP_APPLICANT);
let DEPRESSION_APPLICANT = null;
console.log(typeof DEPRESSION_APPLICANT); //"Null"
console.log(typeof APPLICANT); //"Undefined"