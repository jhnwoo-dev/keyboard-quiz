//query selectors
let startButton = document.getElementById('start-btn')
let quizHeader = document.getElementById('quiz-header-text')
let quizSection = document.getElementById('quiz-box')
let quizTxt = document.getElementById('question-text')
let timer = document.getElementById('timer')
let choiceSection = document.getElementById('choice-box')
let score = document.getElementById('score')

//create an array of objects that represents the questions and their answers


//need event listener for start button
startButton.addEventListener('click', function () {
    console.log("game start");

    //update display of header to the question number
    //display quiz section by removing is-hidden class
    //display choice section by removing is-hidden class

})

//create a function that starts timer countdown and call within startButton function