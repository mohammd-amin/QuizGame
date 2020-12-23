const startButton = document.querySelector('.start-btn');
const questionContainerElement= document.querySelector('#question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#answer-buttons');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort( () => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();  
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
}

function selectAnswer() {

}

const questions = [
{
    question: 'What is 2 + 2 ?',
    answer: [
        { text: '4', correct: true},
        { text: '8', correct: false},
        { text: '3', correct: false},
        { text: '2', correct: false},
    ]
},
{
    question: 'What is 2 - 2!',
    answer: [
        { text: '0', correct: true},
        { text: '5', correct: false},
        { text: '3', correct: false},
        { text: '2', correct: false},
    ]
}
]