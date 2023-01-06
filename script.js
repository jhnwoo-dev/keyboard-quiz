//Designating variables to be used
var startButton = document.getElementById('start-btn')

var quizHeader = document.querySelector('h1')

var quizSection = document.getElementById('quiz-box')
var questionText = document.getElementById('question-text')
var timer = document.getElementById('timer')

var scoreEl = document.getElementById('score')
var scoreText = document.getElementById('score-text')
var showHighScore = document.getElementById('viewHS')

var choiceSection = document.getElementById('choice-box')
var choiceOne = document.getElementById('choiceOne')
var choiceTwo = document.getElementById('choiceTwo')
var choiceThree = document.getElementById('choiceThree')
var choiceFour = document.getElementById('choiceFour')

//Array of objects that will be used to display information as well as to compare user input to correct answers
var objArray = [{
    question: "What is the name of the object that is pressed to cause an 'actuation'?",
    answers: ["Keycap", "Switch", "Button", "Key"],
    correctIndex: "Switch"
},{
    question: "What was the first board that utilized PE Foam?",
    answers: ["Mode Eighty", "Alpine65", "Jelly Epoch", "Mr. Suit"],
    correctIndex: "Jelly Epoch"
},{
    question: "What are mandatory in working a keyboard?",
    answers: ["Switches", "PCB", "Stabilizers", "All of the above"],
    correctIndex: "All of the above"
},{
    question: "What may lube be used on in a keyboard?",
    answers: ["Switches & Stabilizers", "Keycaps", "Hotswap & Solder", "Plate Housing"],
    correctIndex: "Switches & Stabilizers" 
},{
    question: "What are the letter keys considered?",
    answers: ["Function Keys", "Base Keys", "Alpha Keys", "Modifier Keys"],
    correctIndex: "Alpha Keys"  
}]


//Setting base values for variables that are numerical
var score = 0
var timeLeft = 100
var currentQuestion = 0



function startGame() {
    console.log("Game Start");
    startClock();
    loadQuestion();

    //TODO: update display of header to the question number
    currentQuestion++;
    quizHeader.textContent = 'Question: '+ currentQuestion;
    
    //TODO: display quiz section by removing is-hidden class
    quizSection.classList.remove('is-hidden');
    //TODO: display choice section by removing is-hidden class
    choiceSection.classList.remove('is-hidden');
    //TODO: display placeholder for correct/incorrect answer by removing is-hidden class
    scoreEl.classList.remove('is-hidden');
    //TODO: hide the click to start button by adding the is-hidden class
    startButton.classList.add('is-hidden');
}

//TODO: create a function that starts timer countdown and call within startButton function
function startClock(){    
var gameClock = setInterval(function(){
    timeLeft--;
    timer.textContent = 'Time: ' + timeLeft;
     if(timeLeft <= 0) {
        clearInterval(gameClock);
        endGame();
        displayScores();
     }
},1000);
}

//Function that is called on startGame and will load next question, function is also called on checkFinalQuestion function
function loadQuestion() {
        //Grabs the question and answers and displays question and answers
    questionText.textContent = objArray[currentQuestion].question;
    choiceOne.textContent = objArray[currentQuestion].answers[0]
    choiceTwo.textContent = objArray[currentQuestion].answers[1]
    choiceThree.textContent = objArray[currentQuestion].answers[2]
    choiceFour.textContent = objArray[currentQuestion].answers[3]
}
//Function that is called when when user selects an answer
function checkAnswer(event) {
    //Check which button user selected and call function answerCompare to compare user input to the correct answer
    var userChoice = event.target;
    answerCompare(userChoice.textContent, objArray[currentQuestion].correctIndex);
    //Function called to increment currentQuestion and to check if it is the final question
    checkFinalQuestion();
}

//Function that is used to compare user selected answewr to the correctIndex in objArray 
function answerCompare(userSelected, correctSelect) {
    if (userSelected != correctSelect){
        //Questions are worth 20 points if correct, if user has less than 20 points, the score will remain 0
        //If user selected incorrect, deduct points and update text to display incorrect
        if (score != 0) {
            score = score - 20;
        } else {
            score = score;
        }
        timeLeft = timeLeft - 10;
        scoreText.textContent = 'That is incorrect!';
    }
    //if user selected correct -- update text at bottom to display correct
    //if wanting to track correct number - score++
    else{
        score = score + 20;
        scoreText.textContent = 'That is correct!';
    }
}
//Function to increment currentQuestion and check if final question, if it is the last question, run the endGame function, if not call loadQuestion();
function checkFinalQuestion(){
    currentQuestion++;
    if (currentQuestion === 5){
        clearInterval(gameClock);
        endGame();
        displayScores();
    }
    else {
        loadQuestion();
    }
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
choiceTwo.addEventListener('click',checkAnswer)
choiceThree.addEventListener('click', checkAnswer)
choiceFour.addEventListener('click', checkAnswer)
//event listener for showing highscores
showHighScore.addEventListener('click',displayScores)