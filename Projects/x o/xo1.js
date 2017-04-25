var readlineSync = require("readline-sync");
  console.log(" 'x' \n or \n 'p'print grid,\n 's' score,\n 'q'  quit\n");
var game = require("./battlegrid.js");
var isNum = require("./battlenum.js");
var gameBegin = function() {
    var score = 0;
    var grid = game.genGrid(3, 3);
   console.log("you coordinades are from (0,0) to (3,3)\n");
    while (true) {
        var input = readlineSync.question("please your option ");
        if (input == "x") {
            var x = " ";
            while (!isNum(x)) {
                x = readlineSync.question("x coordinate: ");
            }
            var o = " ";
            while (!isNum(o)) {
                y = readlineSync.question("y coordinate: ");
            }
        } else if (input == "p") {
            game.printGrid(grid);
        } else if (input == "s") {
            console.log("your score: " + score);
        } else if (input == "q") {
            break;
        } else {
            console.log("wrong !!");
        }
    }
}
console.log(gameBegin());