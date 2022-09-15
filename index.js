var readlineSync = require("readline-sync");

function welcome() {
    var userName = readlineSync.question("What is your name? ");

    console.log("Welcome " + userName + " to DO YOU KNOW me?")
}

welcome();
