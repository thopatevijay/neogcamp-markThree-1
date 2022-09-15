var readlineSync = require("readline-sync");

var score = 0;

var questions = [
    {
        question: "Where do I live? ",
        answer: "Pune"
    },
    {
        question: "My favorite superhero would be? ",
        answer: "Dhruv"
    },
    {
        question: "Where do I work? ",
        answer: "Microsoft"
    },
    {
        question: "My favorite festival? ",
        answer: "Diwali"
    },
    {
        question: "My favorite movie? ",
        answer: "Titanic"
    }
];

function welcome() {
    var userName = readlineSync.question("What is your name? ");

    console.log("Welcome " + userName + " to DO YOU KNOW me?")
}

function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
    }
}

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log('right');
        score += 1;
    } else {
        console.log('wrong');
    }

    console.log('current score: ', score);
    console.log('-------------------');
}

welcome();
game();