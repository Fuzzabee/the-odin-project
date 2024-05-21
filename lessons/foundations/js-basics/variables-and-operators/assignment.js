// 1
// console.log("1. " + ( 23 + 97 ) );

// 2
// console.log("2. " + ( 1 + 2 + 3 + 4 + 5 + 6 ) );

// 3
// console.log("3. " + ( (4 + 6 + 9) / 77 ) );

// 4
// let a = 10;
// console.log("4. " + a);
// console.log("4. " + ( 9 * a ));
// let b = 7 * a;
// console.log("4. " + b);

// 5
// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;
// console.log("5. " + percentage);

// Name of JavaScript
// let userAnswer = prompt("What is the \"official\" name of JavaScript?", "");

// if (userAnswer === "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("You don't know? ECMAScript!");
// }

// Show the sign
// let userAnswer = prompt("Enter a number: ", "");
// if (+userAnswer < 0) {
//     alert("-1");
// } else if (+userAnswer === 0) {
//     alert("0");
// } else if (+userAnswer > 0) {
//     alert("1");
// } else {
//     alert("Invalid number.");
// }

// Rewrite 'if' into '?'
// let result;

// // Example
// let a = 3;
// let b = 2;

// result = a + b < 4 ? 'Below' : 'Over'

// // Testing results
// alert(result);

// Rewrite 'if...else' into '?'

// let message;

// let login = "Employee";

// message = login === "Employee" ? "Hello" :
//             login === "Director" ? "Greetings" :
//             login === "" ? "No login" : "";

// alert(message);

// Rewrite the "switch" into an "if"
// let browser = "Netscape";

// if ( browser === "Edge" ) {
//     alert("You've got the Edge!");
// } else if ( browser === "Chrome" ||
//             browser === "Firefox" ||
//             browser === "Safari" ||
//             browser === "Opera" ) {
//     alert("Okay we support these browsers too");
// } else {
//     alert("We hope that this page looks ok!");
// }

// Rewrite "if" into "switch"
let a = +prompt("a?", "");

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( "2,3" );
        break;
}