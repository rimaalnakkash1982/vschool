var readlineSync = require("readline-sync");

var game = require("./battlegrid.js");
var isNum = require("./battlenum.js");

var gameBegin = function() {
    var score = 0;
    var grid = game.genGrid(3, 3);
    console.log("\n Welcome to Ship Battle \n");
    console.log("you coordinades are from (0,0) to (9,9)\n");
    console.log(" 'a' to attack,\n 'p'print grid,\n 's' score,\n 'q'  quit the game\n");
    while (true) {
        var input = readlineSync.question("please your option ");
        if (input == "a") {
            var x = " ";
            while (!isNum(x)) {
                x = readlineSync.question("x coordinate: ");
            }
            var y = " ";
            while (!isNum(y)) {
                y = readlineSync.question("y coordinate: ");
            }
            if (game.modifyCell(grid, x, y)) {
                score++;
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