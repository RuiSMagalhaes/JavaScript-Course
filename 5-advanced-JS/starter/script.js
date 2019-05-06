(function() {
  function Question(question, answers, correctAnswer ) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i <  this.answers.length ; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans) {
    if (ans == this.correctAnswer) {
      console.log("correct answer!");
    } else {
      console.log("Wrong answer. Try Again");
    }
  }

  var firstQuestion = new Question("Quem é o melhor jogador de futebol do mundo?", ["messi", "CR7"], 1)
  var secondQuestion = new Question("Quem é o Presidente da Republica?", ["Marcelo", "Rui Magalhães", "António Costa"], 0)
  var thirdQuestion = new Question("Qual o melhor bootCamp de programação do mundo?", ["IronHack","Outro Qualquer", "Le Wagon"], 2)

  var questions = [firstQuestion, secondQuestion, thirdQuestion];
  var n = Math.floor(Math.random() * questions.length)

  questions[n].displayQuestion();
  var answer = parseInt(prompt("Please select the correct answer."))
  questions[n].checkAnswer(answer);

})();












// var score = 0;

// init();

// function init() {
//   questionSelected = questionArray[Math.floor(Math.random()* questionArray.length)];
//   consoleQuestion(questionSelected);
//   consoleAnswers(questionSelected);
//   checkAnswer();
// }

// function checkAnswer() {
//   var userAnswer = prompt("Please select the correct answer (Just type the number)");
//   if (userAnswer === "exit") {
//     return ;
//   }
//   if (userAnswer == questionSelected.correctAnswer ) {
//     console.log("correct answer! Congrats :)");
//     score ++;
//     console.log ("Your current score is: " + score);
//     console.log ("**********************************************");
//     init();
//   } else
//     console.log("WRONG answer! Try again! ")
//     console.log ("Your current score is: " + score);
//     console.log ("**********************************************");
//     consoleQuestion(questionSelected);
//     consoleAnswers(questionSelected);
//     checkAnswer();
// }

// function consoleQuestion(questionSelected) {
//   console.log(questionSelected.question);
// }

// function consoleAnswers(questionSelected) {
//   for (var i = 0; i <  questionSelected.answers.length ; i++) {
//     console.log(i +": " + questionSelected.answers[i]);
//   }
// }


