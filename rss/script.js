let elQuestionScreen = document.getElementById("questionscreen")
let elScreenResult = document.getElementById("resultscreen")

function Quiz() {
    this.questions = []
    this.counter = 0
    this.indexCurrentQuestion = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }
    this.showCurrentQuestion = function() {
        if (this.indexCurrentQuestion < this.questions.length) {
            this.questions[this.indexCurrentQuestion].getElement()
        } else {
            elQuestionScreen.classList.add('hidden')

            let elCorrectAnswers = document.querySelector("#correctAnswers")
            elCorrectAnswers.innerHTML = quiz.counter

            // elScreenResult.classList.add('block')
            elScreenResult.style.display = "block"
        }
    }
}

function Question(title, answers, correctAnswer) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
    this.getElement = function() {
        let questionNumber = document.createElement("h2")
        questionNumber.textContent = "Pregunta 1/3"
        elQuestionScreen.append(questionNumber)
        let questionTitle = document.createElement("h3")
        questionTitle.textContent = this.title
        elQuestionScreen.append(questionTitle)

        let questionAnswers = document.createElement("ul")
        questionAnswers.classList.add("question__awswers")

        this.answers.forEach((answer, index) => {
            let elAnswer = document.createElement("li")
            elAnswer.classList.add("awswer")
            elAnswer.textContent = answer
            elAnswer.id = index+1
            elAnswer.addEventListener("click", this.checkAnswer)
            questionAnswers.append(elAnswer)
        })

        elQuestionScreen.append(questionAnswers)
    }

    this.checkAnswer = (event) => {
        let anwserSelected = event.target
        if (this.isCorrectAnswer(anwserSelected.id)) {
            anwserSelected.classList.add('answer--correct')
            quiz.counter++
        } else {
            anwserSelected.classList.add('answer--wrong')
            let elCorrectAnswer = document.getElementById(this.correctAnswer)
            elCorrectAnswer.classList.add('answer--correct')
        }

        setTimeout(function() {
            elQuestionScreen.textContent = ''
            quiz.indexCurrentQuestion++
            quiz.showCurrentQuestion()
        }, 1000)
    }
}

let question1 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question2 = new Question('A list of instructions that enable a computer to perform a specific task is a...', ['Computer Program', 'Machine Code', 'Algorithm', 'Binary Code'], 3)
let question3 = new Question('Before a computer can understand a program it must be...', ['Translated into its machine code', 'Translated into a low level language', 'Translated into a high level language'], 1)
let question4 = new Question('Pregunta 4', ['op1', 'op2'], 1)
let question5 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question6 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question7 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question8 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question9 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question10 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question11 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question12 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question13 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question14 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question15 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question16 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question17 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question18 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question19 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question20 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)


let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.addQuestion(question4)
// quiz.launch()
// console.log(quiz)

// // let elCorrectAnswers = document.getElementById("correctAnswers")
// let elCorrectAnswers = document.querySelector("#correctAnswers")
// // console.log(elCorrectAnswers)
// // elCorrectAnswers.textContent = quiz.counter
// elCorrectAnswers.innerHTML = quiz.counter

// let elNumberOfQuestions = document.getElementsByClassName("numberOfQuestions")
let elNumberOfQuestions = document.querySelectorAll(".numberOfQuestions")
// for (let i=0; i<elNumberOfQuestions.length; i++) {
//     elNumberOfQuestions[i].textContent = quiz.questions.length
// }

elNumberOfQuestions.forEach(function(elnumberofquestions) {
    elnumberofquestions.textContent = quiz.questions.length
})

function seeFirstQuestion() {
    let elWelcomeScr = document.getElementById("main__section__welcome")
    // elWelcomeScr.style.display = 'none'
    let userName = document.getElementById("username").value;
    console.log(userName);
    elWelcomeScr.classList.add('hidden')

    
    elQuestionScreen.style.display = "block"

    quiz.showCurrentQuestion()
}

let elWelcomeBtn = document.getElementById("userbtn")
elWelcomeBtn.addEventListener("click", seeFirstQuestion)


