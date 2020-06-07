/*1. 
На HTML-сторінці є елемент div:
    <body>	
	<div id="test">First</div>
  </body>	
Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.
====================================================*/
document.getElementById("test").innerHTML = "Last";
document.getElementsByTagName("div")[0].innerHTML = "Last";
document.body.children[1].innerHTML = "Last";
document.body.childNodes[3].innerHTML = "Last";

/*2. 
На сторінці є елемент зображення:
     <body>
		   <img class="image" src="dog.jpg">
     </body>
Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням.
====================================================*/
overwriteImg = document.getElementsByClassName("image")[0];
overwriteImg.src = "cat.jpg";
alert(overwriteImg.outerHTML);

/*3. 
       <body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
	<p>Another text</p>
    </body>
На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph
====================================================*/
let allDesText = document.querySelectorAll("div#text")[0]; 
let DesText = allDesText.getElementsByTagName("p");

for ( i = 0; i < DesText.length; i++ ) {
  document.write("<p>Selector text " + i +": " + DesText[i].innerHTML + "</p>")
}

/*4.
 На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Зробіть завдання 2 різними способами.	
Приклад:
•	1
•	2
•	3
•	4
•	5
Результат виводу: 1, 5, 2, 4, 3
====================================================*/
let allList1 = document.querySelectorAll("#list")[0];
let onceList1 = allList1.getElementsByTagName("li");
alert(onceList1[0].innerHTML);
alert(onceList1[4].innerHTML);
alert(onceList1[1].innerHTML);
alert(onceList1[3].innerHTML);
alert(onceList1[2].innerHTML);

/*second option*/
let allList2 = document.getElementById("list").getElementsByTagName("li")
let allListArr2 = [];
allListArr2.push(allList2[0].innerHTML, allList2[4].innerHTML, allList2[1].innerHTML, allList2[3].innerHTML, allList2[2].innerHTML)

for (k = 0; k < allList2.length; k++) {
  alert(allListArr2[k])
}

/*third option*/
function OwnSequence(List) {
  let arrNew = [];

  arrNew[0] = List[0].innerHTML;
  arrNew[1] = List[4].innerHTML;
  arrNew[2] = List[1].innerHTML;
  arrNew[3] = List[3].innerHTML;
  arrNew[4] = List[2].innerHTML;

  for (c = 0; c < List.length; c++) {
    arrNew.push(List[c].innerHTML)
    alert(arrNew[c]);
}
}
let allList3 = document.getElementById("list").getElementsByTagName("li");
OwnSequence(allList3);

/*fourth option*/
let allList4 = document.getElementById("list");
alert(allList4.childNodes[1].innerHTML);
alert(allList4.children[4].innerHTML);
alert(allList4.childNodes[1].nextElementSibling.innerHTML);
alert(allList4.children[4].previousElementSibling.innerHTML);
alert(allList4.getElementsByTagName("li")[2].innerHTML);

/*5.
 Для сторінки
		  <body>
		       <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>horizontal!</li>
        </ul>
        <span>Make me invisible, please!</span>
	    </body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:
====================================================*/
let titleStyle = document.getElementsByTagName("h1")[1].style;
titleStyle.fontFamily = "TimesNewRoman";
titleStyle.background = "#90ee90";
titleStyle.fontSize = "26px";
titleStyle.color = "#000";

let parStyle = document.querySelectorAll("div#myDiv")[0].style;
parStyle.fontSize = "18px";
parStyle.fontFamily = "TimesNewRoman";
parStyle.color = "#000";

let firstParStyle = document.getElementById("myDiv").children[0].style;
firstParStyle.fontWeight = "700";

let secondParStyle = document.getElementById("myDiv").children[1].style;
secondParStyle.color = "#ff030a";

let thirdParStyle = document.getElementById("myDiv").children[2].style;
thirdParStyle.textDecoration  = "UnderLine";

let FourthParStyle = document.getElementById("myDiv").children[3].style;
FourthParStyle.fontStyle = "Italic";

document.getElementById("myList").lastElementChild.innerHTML = "vertical!";

let myListEl = document.getElementById("myList").children

document.getElementById("myList").replaceWith(myListEl[0].innerHTML + myListEl[1].innerHTML + myListEl[2].innerHTML);

document.querySelectorAll("span")[0].style.opacity = 0;

/*6.
 Задано HTML-сторінку:
    <body>
<input type="text" id="input1" value="Text1">
<input type="text" id="input2" value="Text2">
  </body>
1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
2)	Поміняти значення 1-го і 2-го інпутів місцями.
====================================================*/
let input1Value = document.getElementById("input1").value;
let input2Value = document.getElementById("input2").value;

let input1ValuePrompt = prompt("Enter your first message", input1Value);
let input2ValuePrompt = prompt("Enter your second message", input2Value);

input1Value = input1ValuePrompt;
input2Value = input2ValuePrompt;

document.getElementById("input2").value = input1ValuePrompt;
document.getElementById("input1").value = input2ValuePrompt;

/*7.
 Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.

		<body>
		  <main class="mainClass check item"> 	
		        <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main> 
	    </body>
====================================================*/
let TagMain = document.createElement("main");
TagMain.className = "mainClass";
TagMain.classList.add("check", "item");

let TagDiv = document.createElement("div");
TagDiv.id = "myDiv";

let TagP = document.createElement("p");
TagP.innerHTML = "First paragraph";

document.querySelectorAll("body")[0].appendChild(TagMain);
document.querySelectorAll("main")[0].appendChild(TagDiv);
document.getElementsByClassName("check")[0].children[0].appendChild(TagP);

