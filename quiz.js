// Questions Array
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "J.K. Rowling",
        correct: "c"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O2",
        b: "CO2",
        c: "H2O",
        d: "NaCl",
        correct: "c"
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Kangchenjunga",
        d: "Makalu",
        correct: "b"
    },
    {
        question: "Who was the first president of the United States?",
        a: "Abraham Lincoln",
        b: "Thomas Jefferson",
        c: "George Washington",
        d: "John Adams",
        correct: "c"
    },
    {
        question: "Which is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Silver",
        correct: "c"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Pablo Picasso",
        b: "Vincent van Gogh",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: "c"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "South Korea",
        c: "Japan",
        d: "Thailand",
        correct: "c"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let completedRounds = 0;
let availableQuestions = [];

// DOM Elements
const questionEl = document.getElementById('question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

// Shuffle the questions array
function shuffleQuestions() {
    availableQuestions = [...quizData]; // Make a copy of the original quiz data
    availableQuestions.sort(() => Math.random() - 0.5); // Shuffle the questions randomly
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= availableQuestions.length) {
        completedRounds++;
        if (completedRounds < 2) {
            shuffleQuestions(); // Reshuffle for next round
        } else {
            displayFinalResult();
            return;
        }
        currentQuestionIndex = 0;
    }

    const currentQuestion = availableQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionA.textContent = currentQuestion.a;
    optionB.textContent = currentQuestion.b;
    optionC.textContent = currentQuestion.c;
    optionD.textContent = currentQuestion.d;
}

// Check Answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        resultEl.textContent = "Please select an answer!";
        resultEl.style.color = "orange";
        return;
    }

    const answer = selectedOption.value;
    if (answer === availableQuestions[currentQuestionIndex].correct) {
        score++;
        resultEl.textContent = "Correct!";
        resultEl.style.color = "green";
    } else {
        resultEl.textContent = `Wrong! The correct answer is ${availableQuestions[currentQuestionIndex][availableQuestions[currentQuestionIndex].correct]}.`;
        resultEl.style.color = "red";
    }

    selectedOption.checked = false;
    currentQuestionIndex++;

    setTimeout(() => {
        resultEl.textContent = "";
        loadQuestion();
    }, 1000);
}

// Display Final Result
function displayFinalResult() {
    document.getElementById('quiz').innerHTML = `
        <h2>You completed two rounds! You scored ${score} out of ${quizData.length * 2}</h2>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

// Event Listener for Submit Button
submitBtn.addEventListener('click', checkAnswer);

// Initialize the quiz by shuffling questions and loading the first question
shuffleQuestions();
loadQuestion();

