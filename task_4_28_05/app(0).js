// <h1>28.05.2020 - Task #4</h1>

//     <p>Result of expresion calculation:</p>
//     <p id="CalcResult"></p>
//     <p>if the debugger is tuned onthe code stops execution at the start of the debugger</p>

//     <script>
//         let a = 10;
//         let b = 25;
//         let result = a - Math.sqrt(b);
//         // debugger;
//         document.getElementById("CalcResult").innerHTML = result;
//     </script>

// let a = 10;
// let b = 25;
// let result = a - Math.sqrt(b);
// // debugger;
// document.getElementById("CalcResult").innerHTML = result;

// try {
//     //Code to run
// } catch (exception) {
//     // Code to run if an exception occurs
// }

// try {
//     console.log ("Try block start");
//     // ... Code without errors
//     console.log("Try block end");
// } catch(error) {
//     console.log("Catch is ignored, because there are no errors");
// }
// console.log("Code after try..catch");

// try {
//     console.log("Try block start");
//     c = a + blur; //some logic in code
//     console.log("Try block end");
// } catch(error) {
//     console.log("Error has occurred!");
// }
// console.log("Code after try..catch");

// try {
//     console.log("Some text here");
// } catch(exception) {
//     console.log("try..catch does not work, the code is incorect");
// }

// try {
//     new User();
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

// function enterPin() {
//     let pin = prompt("Enter PIN-number (max lenght 4):", "");
//     if (pin.length > 4) {
//         throw new Error("Line lenght greater than 4 charaters");
//     }
//     return pin;
// }
// try {
//     let result = enterPIN();
//     console.log(result);
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

// function func() {
//     try {
//         someVar;
//     } catch (error) {
//         if (error.name === "TypeError") {
//             console.log("Error handling TypeError type");
//             console.log(error.message);
//         } else {
//             throw error;
//         }
//     }
// }
// try {
//     func();
// } catch (error) {
//     console.log("Error handing of any type");
//     console.log(error.message);
// }

// try {
//     console.log("Section try");
//     count = count + 1;
// } catch (error) {
//     console.log("Section catch");
//     console.log(error.message);
// } finally {
//     console.log("Section finally");
// }

// function func() {
//     try {
//         return 1;
//     } catch (error) {
//         console.log("Section catch");
//     } finally {
//         console.log("Section finally");
//     }
// }
// var result = func();
// console.log(result);