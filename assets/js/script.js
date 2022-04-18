// constant variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

function buildQuiz(){}

function showResults(){}

// display quiz instantly
buildQuiz();


// upon submit, show results
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
        question: "What does HTML stand for?"
        answers: {
            a: "Hyper Text Preprocessor",
            b: "Hyper Text Markup Language",
            c: "Hyper Text Multi Language"
        },
        correctAnswer: "b"
    },
    {
        question: "What does CSS stand for?"
        answers: {
            a: "Computer Style Sheet",
            b: "Common Style Sheet",
            c: "Cascading Style Sheet"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose the correct HTML element for the largest heading:"
        answers: {
            a: "<heading>",
            b: "<h1>",
            c: "<head>"
        },
    }
];