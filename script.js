//questões do quiz
const quizData = [
    {
        question: "Qual é a linguagem de programação mais usada em 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "O que significa PHP? ",
        a: "Private Home Page",
        b: "Hypertext Preprocessor",
        c: "Personal hypertext Processor",
        d: "Page Home Page",
        correct: "b",
    },
    {
        question: " O que significa HTML?",
        a: "Linguagem de marcação de hipertexto",
        b: "Planilha em estilo cascata",
        c: "Hipertex Object Json",
        d: "Definição para HTML",
        correct: "a",
    },
    {
        question: "Em que ano o JavaScript foi lançado?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Nenhuma das alternativas",
        correct: "b",
    },
];

//chamando os elementos/ pontuação
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

//seleção das alternativas
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // verifica a resposta 
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Recarregar</button>
            `;
        }
    }
});