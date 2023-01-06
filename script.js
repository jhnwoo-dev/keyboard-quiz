//query selectors
let startButton = document.getElementById('start-btn')
let quizHeader = document.getElementById('quiz-header-text')
let quizSection = document.getElementById('quiz-box')
let quizTxt = document.getElementById('question-text')
let timer = document.getElementById('timer')
let scoreEl = document.getElementById('score')
let showHighScore = document.getElementById('viewHS')

let choiceOne = document.getElementById('choiceOne')
let choiceTwo = document.getElementById('choiceTwo')
let choiceThree = document.getElementById('choiceThree')
let choiceFour = document.getElementById('choiceFour')
//setting values for variables
var score = 0
var timeLeft = 100
var currentQuestion = 0

//create an array of objects that represents the questions and their answers
var objArray = [{
    question: "What is the name of the object that is pressed to cause an 'actuation'?",
    answers: ["Keycap", "Switch", "Button", "Key"],
    correctIndex: 1
},{
    question: "What was the first board that utilized PE Foam?",
    answers: ["Mode Eighty", "Alpine65", "Jelly Epoch", "Mr. Suit"],
    correctIndex: 2
},{
    question: "What are mandatory in a keyboard?",
    answers: ["Switches", "PCB", "Stabilizers", "All of the above"],
    correctIndex: 3
},{
    question: "What may lube be used on in a keyboard?",
    answers: ["Switches & Stabilizers", "Keycaps", "Hotswap & Solder", "Plate Housing"],
    correctIndex: 0  
},{
    question: "What are the letter keys considered?",
    answers: ["Function Keys", "Base Keys", "Alpha Keys", "Modifier Keys"],
    correctIndex: 2  
},{
    question: "BONUS: What are the best type of switches?",
    answers: ["Tactile Switches", "Clicky Switches", "Linear Switches", "Personal Preference"],
    correctIndex: 2  
}]

//to call a specific answer
objArray[1].answers[1]

function startGame() {
    console.log("game start");
    loadQuestion();
    //TODO: create a function that starts timer countdown and call within startButton function
    //TODO: update display of header to the question number
    //TODO: display quiz section by removing is-hidden class
    //TODO: display choice section by removing is-hidden class
}

//function that is called on startGame and will load next question and also called on checkAnswer
function loadQuestion() {
    //TODO: grab next question and answers
    //TODO: display question and answers - textContent
}
//function that is called when when user selects an answer
function checkAnswer(event) {
    //TODO: check which button user selected - event.target.textContent to show what was selected
    //TODO: compare user selected to correctIndex in objectArray 
    //if user selected correct -- update text at bottom to display correct
        //if wanting to track correct number - score++
    //if user selected incorrect -- update text to display incorrect
        //to subtract timeLeft = timeLeft -10
    //TODO: check if final question
        //if it is, run endGame function
        //if not, do nothing
    //TODO: increment currentQuestion++
    //TODO: call loadQuestion()
}

function endGame() {
    //TODO: hide all prompts and questions
    //TODO: stop timer if still running
    //TODO: display input for user Initials
}

function displayScores() {
    //TODO: display score after submission of Initials
    //TODO: check local storage for pre-existing
        //if none, create new array
    //TODO: add new score to local storage
    //TODO: compare scores in local storage
}

//need event listener for start button
startButton.addEventListener('click', startGame)
//event listeners when user selects an answer
choiceOne.addEventListener('click', checkAnswer)
choiceTwo.addEventListener('click', checkAnswer)
choiceThree.addEventListener('click', checkAnswer)
choiceFour.addEventListener('click', checkAnswer)
//event listener for showing highscores
showHighScore.addEventListener('click',displayScores)