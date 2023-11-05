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
const nextButton = document.getElementById("next-btn");

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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
       selectedBtn.classList.add("correct");
       score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    /*Convert the answerButtons children into an array using the Array.from() method.
    Iterate over each button in the array using the forEach() method and an arrow function. */
    Array.from(answerButtons.children).forEach(button => {
        //Check if the button has a data-correct attribute with a value of "true".
        if(button.dataset.correct === "true") {
            //If the button is correct, it adds the "correct" class to the button using the classList.add() method
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "Peli on päättynyt. Sait " + score + " pistettä.";
    nextButton.innerHTML = "Pelaa uudestaan";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();