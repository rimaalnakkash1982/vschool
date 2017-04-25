var readlineSync = require("readline-sync");
var valueA = readlineSync.question("Give a Number: ");
var valueB = readlineSync.question("Give  a Number: ");
var operation = readlineSync.question("give me an operation :/,*,+,-,powerOf: ");
var calculte = require("./calculate2.js");
if (operation == "-") {
    console.log(calculte.sub(parseInt(valueA), parseInt(valueB)))
} else if (operation == "+") {
    console.log(calculte.add(parseInt(valueA), parseInt(valueB)))
} else if (operation == "*") {
    console.log(calculte.multi(parseInt(valueA), parseInt(valueB)))
} else if (operation == "/") {
    console.log(calculte.div(parseInt(valueA), parseInt(valueB)))
} else if (operation == "-") {
    console.log(calculte.sub(parseInt(valueA), parseInt(valueB)))
} else if (operation == "powerOf") {
    console.log(calculte.power(parseInt(valueA), parseInt(valueB)))
};