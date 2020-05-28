/*1. 
Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.
=====================================================================*/
let Arr1 = [2, 3, 4, 5];
let sumF = 1;

for (let i = 0; i < Arr1.length; i++) {
    sumF *= Arr1[i];
}
console.log(sumF);


let Arr2 = [2, 3, 4, 5];
let sumW = 1;
let i = 0;

while (i < Arr2.length) {
    sumW *= Arr2[i];
    i++;
}
console.log(sumW);

/*2.
Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" 
=====================================================================*/
for (let i = 0; i <= 15; i++) {
    if 
    (i % 2 === 0) {
        console.log(i + " is even");
    } else if (i % 2 === 1) {
        console.log(i + " is odd");
    }
}

/*3.
Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40
=====================================================================*/
function randArray(k) {
    let r = [];
    let i = 0;

    while (i < k) {
        r[i] = parseInt(Math.random()*500);
        i++;
    }
    console.log(r.join());
}
randArray(5);

/*4. 
Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81
=====================================================================*/
function raiseToDegree(a, b) {
    if (a === undefined) {
        a = prompt("Write an integer a ");
        if (a != parseFloat(a)) {
            alert("I said integers! Try again");
            raiseToDegree();
        }
    }
    if (b === undefined) {
        b = prompt("Write an integer b ");
        if (b != parseFloat(b)) {
            alert("I said integers! Try again")
            raiseToDegree();
        }
    }
    /*simpler option
    let a = prompt("Write an integer a ");
    let b = prompt ("Write an integer b ");
    if (a != parseFloat(a) || b != parseFloat(b)) {
        alert("I said integers! Try again");
        raiseToDegree();
    };*/
    let result = a ** b;
    console.log(result);
}
raiseToDegree(3, 4);
raiseToDegree();

/*5. 
Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість цілих аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4
=====================================================================*/
function findMin() {
    console.log(Math.min.apply(null, arguments))
 }
 findMin(12, 14, 4, -4, 0.2, 11)

/*6. 
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
=====================================================================*/
function findUnique(arr) {
    let a = [];

    for (let num of arr) {
        if (!a.includes(num)) {
            a.push(num);
        }
    }
    console.log(a.length >= arr.length);
}
findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);

/*7. 
Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]
=====================================================================*/
function lastElem(arr, x) {
    if (x === undefined) {
        x = 1;
    }
    console.log(arr.slice(arr.length - x, arr.length));
}
lastElem([3, 4, 10, -5]);
lastElem([3, 4, 10, -5],2);
lastElem([3, 4, 10, -5],8);

/*8.
Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script'
=====================================================================*/
function FirstLetCap(UsLine) {
    let Us = UsLine.split(" ");

    for (i = 0; i < Us.length; i++) {
        let a = Us[i].charAt(0).toUpperCase();
        Us[i] = a + Us[i].slice(1).toLowerCase();
    }
    console.log(Us.join(" "));

    // Us = UsLine.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    // console.log(Us); --???? не зрозумів ????--
}
FirstLetCap("i love java script");