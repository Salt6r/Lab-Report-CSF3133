// Questions Array
const questions = [
    {
        question: "What is the capital of Malaysia?",
        options: ["Johor", "Penang", "Kuala Lumpur", "Melaka"],
        answer: "Kuala Lumpur"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["364", "365", "366", "367"],
        answer: "366"
    },
    {
        question: "10000 - 9000 = ?",
        options: ["1000","2000","3000","4000"],
        answer: "1000"
    },
    {
        question: "What is the course code of this lab course?",
        options: ["CSF3133","CSF3193","CSF3156","CSF3103"],
        answer: "CSF3133"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Shuffle Questions
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Start Timer
function startTimer() {
    timeLeft = 30;
    document.getElementById("time").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Display Question
function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    q.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

// Check Answer
function checkAnswer(selected) {
    clearInterval(timer);

    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
        score++;
        document.getElementById("feedback").innerText = "Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Wrong!";
        document.getElementById("feedback").style.color = "red";
    }
}

// Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").innerText = "";
        document.getElementById("score").innerText = `Your Score: ${score}/${questions.length}`;
        document.getElementById("nextBtn").style.display = "none";
        return;
    }

    document.getElementById("feedback").innerText = "";
    displayQuestion();
    startTimer();
}

// Start Quiz
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

// Start when page loads
window.onload = startQuiz;