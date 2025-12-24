const quizData = [
  {
    question:
      "Qual é a linguagem de programação usada para desenvolvimento web?",
    options: [
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question:
      "O que é programação?",
    options: [
      { text: "Uso de computadores para navegar na internet", correct: false },
      { text: "Escrita de instruções para um computador executar tarefas", correct: true },
      { text: "Montagem de hardware", correct: false },
      { text: "Criação de documentos de texto", correct: false },
    ],
  },
  {
    question:
      "Qual linguagem é usada principalmente para estilizar páginas web?",
    options: [
      { text: "HTML", correct: true },
      { text: "Java", correct: false },
      { text: "CSS", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question:
      "Para que serve o JavaScript no desenvolvimento web?",
    options: [
      { text: "Criar bancos de dados", correct: false },
      { text: "Estruturar o conteúdo da página", correct: false },
      { text: "Adicionar interatividade às páginas", correct: true },
      { text: "Hospedar sites", correct: false },
    ],
  },
  {
    question:
      "O que é uma variável?",
    options: [
      { text: "Um erro no código", correct: false },
      { text: "Um espaço para armazenar dados", correct: true },
      { text: "Um tipo de função", correct: false },
      { text: "Um arquivo do projeto", correct: false },
    ],
  },
  {
    question:
      "Qual dessas NÃO é uma linguagem de programação?",
    options: [
      { text: "HTML", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question:
      "O que significa “debugar” um código?",
    options: [
      { text: "Criar um novo sistema", correct: false },
      { text: "Executar o código mais rápido", correct: false },
      { text: "Encontrar e corrigir erros", correct: true },
      { text: "Apagar arquivos antigos", correct: false },
    ],
  },
  {
    question:
      "Qual símbolo é usado para comentários em JavaScript?",
    options: [
      { text: "<!-- -->", correct: false },
      { text: "##", correct: false },
      { text: "//", correct: true },
      { text: "**", correct: false },
    ],
  },
  {
    question:
      "O que é um loop (laço de repetição)?",
    options: [
      { text: "Um erro de lógica", correct: false },
      { text: "Uma estrutura que repete um bloco de código", correct: true },
      { text: "Um tipo de variável", correct: false },
      { text: "Um banco de dados", correct: false },
    ],
  },
  {
    question:
      "Qual comando exibe informações no console do navegador em JavaScript?",
    options: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "alert()", correct: false },
      { text: "document.write()", correct: false },
    ],
  },
  {
  question: "O que é um array em JavaScript?",
  options: [
    { text: "Uma coleção de valores", correct: true },
    { text: "Um tipo de função", correct: false },
    { text: "Um erro do sistema", correct: false },
    { text: "Um arquivo do projeto", correct: false },
  ],
},
{
  question: "Como acessar o primeiro elemento de um array?",
  options: [
    { text: "array[1]", correct: false },
    { text: "array[0]", correct: true },
    { text: "array.first()", correct: false },
    { text: "array.start()", correct: false },
  ],
},
{
  question: "Qual método adiciona um item no final do array?",
  options: [
    { text: "push()", correct: true },
    { text: "pop()", correct: false },
    { text: "shift()", correct: false },
    { text: "unshift()", correct: false },
  ],
},
{
  question: "O que é um objeto em JavaScript?",
  options: [
    { text: "Uma lista ordenada", correct: false },
    { text: "Uma coleção de pares chave e valor", correct: true },
    { text: "Um tipo de array", correct: false },
    { text: "Um loop", correct: false },
  ],
},
{
  question: "Como acessar uma propriedade de um objeto?",
  options: [
    { text: "obj->prop", correct: false },
    { text: "obj[prop]", correct: true },
    { text: "obj(prop)", correct: false },
    { text: "obj::prop", correct: false },
  ],
},
{
  question: "Qual método remove o último item de um array?",
  options: [
    { text: "pop()", correct: true },
    { text: "push()", correct: false },
    { text: "shift()", correct: false },
    { text: "splice()", correct: false },
  ],
},
{
  question: "Qual palavra-chave cria um objeto?",
  options: [
    { text: "let", correct: false },
    { text: "new", correct: true },
    { text: "create", correct: false },
    { text: "object", correct: false },
  ],
},
{
  question: "Qual método percorre um array?",
  options: [
    { text: "forEach()", correct: true },
    { text: "map()", correct: false },
    { text: "filter()", correct: false },
    { text: "reduce()", correct: false },
  ],
},
{
  question: "Como verificar o tamanho de um array?",
  options: [
    { text: "array.size", correct: false },
    { text: "array.length", correct: true },
    { text: "array.count()", correct: false },
    { text: "array.total", correct: false },
  ],
},
{
  question: "Objetos podem conter arrays?",
  options: [
    { text: "Não", correct: false },
    { text: "Sim", correct: true },
    { text: "Apenas em JSON", correct: false },
    { text: "Somente com classes", correct: false },
  ],
},

];

/* =====================
   SELETORES DOM
===================== */
const answersQuestions = document.getElementById("span-question");
const optionsQuestions = document.querySelectorAll(".button-option");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const startButton = document.getElementById("start-quiz");
const quizSection = document.getElementById("section-answers-questions");
const timerElement = document.getElementById("timer");
const feedbackContainer = document.getElementById("feedback-container");

/* =====================
   VARIÁVEIS DE CONTROLE
===================== */
const totalQuestions = quizData.length;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let timeLeft = 15;
let timer;

/* =====================
   BOTÃO INICIAR QUIZ
===================== */
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    quizSection.style.display = "block";
    loadQuestions();
});

/* =====================
   TIMER
===================== */
function startTimer() {
    clearInterval(timer);
    timeLeft = 20;

    timerElement.textContent = `Tempo: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tempo: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            answered = true;

            userAnswers.push({
                question: quizData[currentQuestionIndex].question,
                selected: "Tempo esgotado",
                correct: quizData[currentQuestionIndex].options.find(o => o.correct).text,
                isCorrect: false
            });
        
            
            goToNextQuestion();
        }
    }, 1000);
}

/* =====================
   CARREGAR QUESTÃO
===================== */
function loadQuestions() {
    answered = false;
   

    const currentQuestion = quizData[currentQuestionIndex];
    answersQuestions.textContent =
        `${currentQuestionIndex + 1}/${totalQuestions} - ${currentQuestion.question}`;
        
        optionsQuestions.forEach((button, index) => {
        const option = currentQuestion.options[index];
        button.textContent = option.text;
        button.dataset.correct = option.correct;
        button.disabled = false;
        button.classList.remove("correct", "wrong");
        
    });
    
    startTimer();
}

/* =====================
   CLIQUE NAS OPÇÕES
===================== */
optionsQuestions.forEach(button => {
    button.addEventListener("click", () => {
        if (answered) return;
        answered = true;

        clearInterval(timer);

        const isCorrect = button.dataset.correct === "true";
        const correctAnswer =
            quizData[currentQuestionIndex].options.find(o => o.correct).text;

        userAnswers.push({
            question: quizData[currentQuestionIndex].question,
            selected: button.textContent,
            correct: correctAnswer,
            isCorrect
        });

        if (isCorrect) {
            score++;
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }

        optionsQuestions.forEach(btn => btn.disabled = true);
    });
});

/* =====================
   PRÓXIMA QUESTÃO
===================== */
nextButton.addEventListener("click", () => {
    clearInterval(timer);

    if (!answered) {
        userAnswers.push({
            question: quizData[currentQuestionIndex].question,
            selected: "Não respondida",
            correct: quizData[currentQuestionIndex].options.find(o => o.correct).text,
            isCorrect: false
        });
       
    }

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestions();
    } else {
        endQuiz();
    }
});

/* =====================
   FINAL DO QUIZ
===================== */
function endQuiz() {
    clearInterval(timer);
    quizSection.style.display = "none";
    resultContainer.style.display = "block";

    const percentage = Math.round((score / totalQuestions) * 100);

    scoreText.innerHTML = `
        Você acertou <strong>${score}</strong> de ${totalQuestions}.<br>
        Seu nível de conhecimento em programação é <strong>${percentage}%</strong>
    `;

    viewFeedback();
}

/* =====================
   FEEDBACK
===================== */
function viewFeedback() {
    feedbackContainer.innerHTML = "";

    userAnswers.forEach((answer, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${index + 1}. ${answer.question}</strong></p>
            <p>Sua resposta:
                <span style="color:${answer.isCorrect ? "green" : "red"}">
                    ${answer.selected}
                </span>
            </p>
            ${
                !answer.isCorrect
                    ? `<p>Resposta correta: <strong>${answer.correct}</strong></p>`
                    : ""
            }
            <hr>
        `;
        feedbackContainer.appendChild(div);
    });
}



// const quizFormQuestion = document.getElementById("quiz-form-question");
// const formsQuestionsContainer = document.getElementById(
//   "container-form-questions"
// );
// const answersQuestions = document.getElementById("span-question");
// const questions = document.getElementById("questions");
// const optionsQuestions = document.querySelectorAll(".button-option");
// const nextButton = document.getElementById("next-button");
// const resultContainer = document.getElementById("result-container");
// const scoreText = document.getElementById("score-text");

// const startButton = document.getElementById("start-quiz");
// const quizSection = document.getElementById("section-answers-questions");

// startButton.addEventListener("click", () => {
//     quizSection.style.display = "block";
//     startButton.style.display = "none";
// })

// const totalQuestions = quizData.length;
// let currentQuestionIndex = 0;
// let score = 0;
// let userAnswers = [];
// let answered = false;
// let timeLeft = 15;
// let timer;

// function goToNextQuestion() {
//     if (currentQuestionIndex < totalQuestions - 1) {
//         currentQuestionIndex++;
//         loadQuestions();
//     } else {
//         endQuiz();
//     }
// }

// function startTimer() {
//     clearInterval(timer);
//     timeLeft = 30;

//     timer = setInterval(() => {
//         timeLeft--;
//         document.getElementById("timer").textContent = `Tempo: ${timeLeft}s`;

//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             goToNextQuestion();
//         }
//     }, 1000);
// }

// optionsQuestions.forEach(button => {
//     button.addEventListener("click", () => {
//         if (answered) return;
//         answered = true;
//         const isCorrect = button.dataset.correct === "true";



//         userAnswers.push({
//             question: quizData[currentQuestionIndex].question,
//             selected: button.textContent,
//             correct: quizData[currentQuestionIndex].options.find(opt => opt.correct).text, isCorrect
//         });

//         if (isCorrect) {
//             score++;
//             button.classList.add("correct");
//         } else {
//             button.classList.add("wrong");
//         }

//         optionsQuestions.forEach(btn => btn.disabled = true)
//     });
// });

// function viewFeedback() {
//     const feedbackContainer = document.getElementById("feedback-container");
//     feedbackContainer.innerHTML = "";

//     userAnswers.forEach((answer, index) => {
//         const div = document.createElement("div");


//         div.innerHTML = `
//         <p><strong>${index + 1}. ${answer.question}</strong></p>
//         <p>Sua resposta:
//         <span style="color: ${answer.isCorrect ? "green" : "red"}">${answer.selected}
//         </span>
//         </p>
//         ${!answer.isCorrect ? `<p>
//         Resposta correta: <strong>${answer.correct}</strong></p>` : ""}
//         <hr>
//         `;

//         feedbackContainer.appendChild(div);
//     });
// }

// function loadQuestions() {
    
//     answered = false;

//     if (currentQuestionIndex >= totalQuestions) return;

//     const currentQuestionIndexData = quizData[currentQuestionIndex];

//     answersQuestions.textContent =  `${currentQuestionIndex + 1}/${totalQuestions} - ${currentQuestionIndexData.question}`;

//     optionsQuestions.forEach((button, index) => {
//         const option = currentQuestionIndexData.options[index];

//         button.textContent = option.text;
//         button.dataset.correct = option.correct;
//         button.disabled = false;
//         button.classList.remove("correct", "wrong");
//     });
//     startTimer();
// }


// loadQuestions();

// nextButton.addEventListener("click", () => {
//     clearInterval(timer);
//     goToNextQuestion();

//     if (currentQuestionIndex < totalQuestions - 1) {
//         currentQuestionIndex++;
//         loadQuestions();
//     } else {
//         endQuiz();
//     }
// });

// function endQuiz() {
//     document.getElementById("container-quiz-form-question").style.display = "none";
//     resultContainer.style.display = "block";
//     scoreText.innerHTML = `
//         Voçê acertou <strong>${score}</strong> de ${totalQuestions} perguntas.<br>
//         Seu nível de conhecimento em programação é <strong>${percentage}%}
//     `;

//     viewFeedback();
// }
