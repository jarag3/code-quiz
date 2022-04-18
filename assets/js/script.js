// constant variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
const myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyper Text Preprocessor",
            b: "Hyper Text Markup Language",
            c: "Hyper Text Multi Language"
        },
        correctAnswer: "b"
    },
    {
        question: "What does CSS stand for?",
        answers: {
            a: "Computer Style Sheet",
            b: "Common Style Sheet",
            c: "Cascading Style Sheet"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: {
            a: "heading",
            b: "h1",
            c: "head"
        },
    }
];


// Quiz function
function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // store all answer choices
            const answers = [];

            for(letter in currentQuestion.answers){
                // html radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}" />
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            
            // adds question and its answers to output
            output.push(    
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('')
}



function showResults(){}
//myQuestions.forEach( (currentQuestion, questionNumber) => {
    // code for each question
//});
// display quiz instantly
buildQuiz();


// upon submit, show results (eventlistener)
submitButton.addEventListener('click', showResults);


