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
        correctAnswer: "b"
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


// Results function
function showResults(){
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen'
        
        }
        // if answer is incorrect
        else {
            answerContainers[questionNumber].style.color = 'red'
        }
    });
    // show number of correct answers
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


    
// display quiz instantly
buildQuiz();

// upon submit, show results (eventlistener)
submitButton.addEventListener('click', showResults);


