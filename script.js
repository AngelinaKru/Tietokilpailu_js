const questions = [
    {
        question: "Suomen sisällissota alkoi",
        answer: [
            {text: "Maaliskuussa 1918", correct: false},
            {text: "Tammikuussa 1918", correct: true},
            {text: "Helmikuussa 1918", correct: false},
            {text: "Huhtikuussa 1918", correct: false}
        ]
    },
    {
        question: "Laulaja Tapio Rautavaara voitti keihään olympiakullan lisäksi maailmanmestaruuden",
        answer: [
            {text: "Painissa", correct: false},
            {text: "Jousiammunnassa", correct: true},
            {text: "Kalpamiekkailussa", correct: false},
            {text: "Jääkiekossa", correct: false}
        ]
    },
    {
        question: "Punaisten kansanvaltuuskuntaa johti sisällissodan aikana",
        answer: [
            {text: "Otto Wille Kuusinen", correct: false},
            {text: "Oskari Tokoi", correct: false},
            {text: "Kullervo Manner", correct: true},
            {text: "Sophie Mannerheim", correct: false}
        ]
    },
    {
        question: "Tarinan mukaan ensimmäinen ristiretken Suomeen teki Rutosin kuningas nimeltä",
        answer: [
            {text: "Bertil", correct: false},
            {text: "Henrik", correct: false},
            {text: "Lauri", correct: false},
            {text: "Eerik", correct: true}
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Seuraava";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

/* The function does not delete previous answers,
but rather clears the state of a React component. */
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
startQuiz();