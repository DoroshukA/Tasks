/*1. 
Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
Результат має бути 3.
=================================================*/
function propsCount(currentObject) {
   let i = 0;
   for (p in currentObject)
   if (currentObject.hasOwnProperty(p)) {
        i++;
   }
    console.log(i);
}
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
propsCount(mentor);

/*2. 
Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.
=================================================*/
function showProps(obj) {    
    let properties = [];//задаємо всі масиви і змінні
    let value = [];
    let i = 0; 

    for (let p in obj) // розбиваємо обєкт на частки р
    if (obj.hasOwnProperty(p)) { 
        //задаємо умову, якщо частка р має вміст, то додаємо цей вміст у масив properties
        properties.push(p);
    }
    while (i < properties.length) { 
        //задаємо цикл-лічильник, який має перебрати усі можливі варіанти в створениому нами, масиві properties
        value.push( obj[ properties[i++] ] ); 
        //додаємо значення властивості обєкта obj в масив value
    }
    console.log(properties);
    console.log(value);
}
let favorObj = {
    achievement: "family",
    vocation: "programming",
    hobby: "travel",
    skills: "sales",
    sports: "swimming"
}
showProps(favorObj);

/*3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 
	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
	Приклад результату:
var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
=================================================*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.surname + " " + this.name)
    }
}
class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        this.midleName = midleName;
        console.log(this.surname + " " + this.name + " " + this.midleName);
    }
    showCourse() {
        let date = new Date;
        let CurrYear = date.getFullYear();
        let goToUnYear = prompt("When did you go to university?", 2016);
        if ( goToUnYear >= CurrYear - 6 && goToUnYear < CurrYear ) {
            let result = CurrYear - goToUnYear;
            return result;
        } else {
            alert("Incorrect data!");
            location.reload()
        }
    }
}
let stud1 = new Student("Petro", "Petrenko")
stud1.showFullName("Petrovich");
console.log("Current course: " + stud1.showCourse());

/*4. 
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
	4) Вивести значення зарплати з новим experience.
	5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..

Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
. . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
. . . . . .

Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
……..

John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584
=================================================*/
class Worker {
    #experience = 1.2;
  set setExp(value) {
    this.#experience = value;
  }
  get showExp() {
    return this.#experience;
  }
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(salary);
        return salary;
    }
    showSalaryWithExperience() {
        let salaryExp = this.dayRate * this.workingDays * this.#experience;
        return salaryExp;
    }
    showNameSalary() {
        let nameSalaryValue = this.dayRate * this.workingDays * this.#experience;
        let nameSalary = this.fullName + ": " + nameSalaryValue;
        return nameSalary;
    }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

console.log(worker3.showNameSalary());
console.log(worker2.showNameSalary());
console.log(worker1.showNameSalary());


function filterSalary(arr) {
    function sortBySalary(array) {
        array.sort((a, b) => a.showSalaryWithExperience > b.showSalaryWithExperience ? 1 : -1);
    }

    arr[0] = {fullname: worker1.fullName, showSalaryWithExperience: worker1.showSalaryWithExperience()};
    arr[1] = {fullname: worker2.fullName, showSalaryWithExperience: worker2.showSalaryWithExperience()};
    arr[2] = {fullname: worker3.fullName, showSalaryWithExperience: worker3.showSalaryWithExperience()};

    let arr2 = [arr[0], arr[1], arr[2]];

    sortBySalary(arr2);

    k = 0;
    while (k < arr2.length) {
        console.log(arr2[k].fullname + ": " + arr2[k].showSalaryWithExperience);
        k++;
    }
}
filterSalary([worker1, worker2, worker3]);

/*5. 
Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
	 class GeometricFigure {
			getArea() {
	return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }
		Your code . . . 
	
	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
    	console.log(handleFigures(figures));

Приклад результату:
	Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area
=================================================*/
class GeometricFigure {
    getArea() {
        return 0;
}
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    getArea() {
        let result = (this.a * this.b)/2;
        return result;
    }
}
class Square extends GeometricFigure {
    constructor(d) {
        super();
        this.d = d;
    }
    getArea() {
        let result = this.d **2;
        return result;
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        let result = Math.PI * this.r **2;
        return result;
    }
}
function handleFigures(figures) {
    let i = 0;
    let arrForArea = [];

    while ( i < figures.length) {
        let figure = figures[i];
        let resulFigureArea = "Geometric figure: " + figure.toString() + " - area: " + figure.getArea();
        arrForArea[i] = figure.getArea();
        i++;
        console.log(resulFigureArea);
    }
    total = arrForArea.reduce(reduceFunc);
    function reduceFunc(processedValue, currentValue) {
        sum = processedValue + currentValue;
        return sum;
    }
    return total;
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures))
