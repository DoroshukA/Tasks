
/*1. 
За допомогою методів об’єкта window створити:
	1) нове вікно розміром 300х300 пікселів.
	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
    4) із затримкою 2 сек закрийте вікно.
==================================================*/
let openWindowObj = window.open("about:blank", "clearWindow", "width=300,height=300,left=100,top=300");

function resizeW() {
    openWindowObj.resizeTo(500, 500);
    }
function moveW() {
    openWindowObj.moveTo(200, 200)
}
function closeW() {
    openWindowObj.close();
}

    setTimeout(resizeW, 2000);
    setTimeout(moveW, 4000);
    setTimeout(closeW, 6000);

/*2. 
Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p> 
<div>
	<button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".
==================================================*/
function changeCSS() {
    let obj = document.getElementById("text");
    obj.style.color = "orange";
    obj.style.fontFamily = 'Comic Sans MS';
    obj.style.fontSize = "20px";
}
document.querySelectorAll("button")[0].onclick = changeCSS;

/*Second option*/
function changeCSS() {
    document.getElementById("text").classList.add("obj");
}
document.querySelectorAll("button")[0].onclick = changeCSS;

/*3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
    Приклад – курсор наведений на лінку.
==================================================*/
function changeBackgroundB() {
    document.body.style.background = "blue";
}
document.getElementById("blue").onclick = changeBackgroundB;

function changeBackgroundP() {
    document.body.style.background = "pink";
}
document.getElementById("pink").ondblclick = changeBackgroundP;

function changeBackgroundBr() {
    document.body.style.background = "brown";
}
function changeBackgroundBrWh() {
    document.body.style.background = "white";
}
document.getElementById("brown").onmousedown = changeBackgroundBr;
document.getElementById("brown").onmouseup = changeBackgroundBrWh;

function changeBackgroundY() {
    document.body.style.background = "yellow";
}
function changeBackgroundYR() {
    document.body.style.background = "#f8f5f5";
}
document.getElementById("yellow").onmouseover = changeBackgroundY;
document.getElementById("yellow").onmouseout = changeBackgroundYR;

/*4. 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
==================================================*/
function f(){
    let el = document.getElementById('Listname').children[0];
    el.remove()
    }

/*5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

Приклад роботи:
==================================================*/
function onMe() {
    mouseHover.insertAdjacentHTML("afterend", "<p style='font-size: 16px'>Mouse on me!</p>");
}
function notOnMe() {
    mouseHover.insertAdjacentHTML("afterend", "<p style='font-size: 16px'>Mouse is not on me!</p>");
}
function press() {
    mouseHover.insertAdjacentHTML("afterend", "<p style='font-size: 16px'>I was pressed!</p>");
}
document.getElementById("mouseHover").onclick = press;
document.getElementById("mouseHover").onmouseover = onMe;
document.getElementById("mouseHover").onmouseup = notOnMe;

/*6.
Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
==================================================*/
let Obj = window.open("about:blank", "whiteWindow", "left=400,top=100");
let b = Obj.innerHeight;
let a = Obj.innerWidth;

Obj.document.write("Width: " + a + ", Height: " + b);
// window.location.reload()

// Доопрацювати !!!!!!!!!!!

/*7. 
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.

   

Код HTML-сторінки:
<select name="country" id="country">
	<option value="ger">Germany</option>
	<option value="usa">USA</option>
	<option value="ukr">Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p>
==================================================*/