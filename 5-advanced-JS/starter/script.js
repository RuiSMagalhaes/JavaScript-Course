// // Basic level

// (function() {
//   function Question(question, answers, correctAnswer ) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
//   }

//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);

//     for (var i = 0; i <  this.answers.length ; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   }

//   Question.prototype.checkAnswer = function(ans) {
//     if (ans == this.correctAnswer) {
//       console.log("correct answer!");
//     } else {
//       console.log("Wrong answer. Try Again");
//     }
//   }

//   var firstQuestion = new Question("Quem é o melhor jogador de futebol do mundo?", ["messi", "CR7"], 1)
//   var secondQuestion = new Question("Quem é o Presidente da Republica?", ["Marcelo", "Rui Magalhães", "António Costa"], 0)
//   var thirdQuestion = new Question("Qual o melhor bootCamp de programação do mundo?", ["IronHack","Outro Qualquer", "Le Wagon"], 2)

//   var questions = [firstQuestion, secondQuestion, thirdQuestion];
//   var n = Math.floor(Math.random() * questions.length)

//   questions[n].displayQuestion();
//   var answer = parseInt(prompt("Please select the correct answer."))
//   questions[n].checkAnswer(answer);

// })();

// Expert level

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

  Question.prototype.checkAnswer = function(ans, callback) {
    if (ans == this.correctAnswer) {
      var sc;

      console.log("correct answer!");
      sc = callback(true);

    } else {
      console.log("Wrong answer. Try Again");
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log ("your current score is:" + score );
    console.log("---------------------------------")
  }

  var firstQuestion = new Question("Quem é o melhor jogador de futebol do mundo?", ["messi", "CR7"], 1)
  var secondQuestion = new Question("Quem é o Presidente da Republica?", ["Marcelo", "Rui Magalhães", "António Costa"], 0)
  var thirdQuestion = new Question("Qual o melhor bootCamp de programação do mundo?", ["IronHack","Outro Qualquer", "Le Wagon"], 2)

  var questions = [firstQuestion, secondQuestion, thirdQuestion];

  function score(){
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion(){
    var n = Math.floor(Math.random() * questions.length)

    questions[n].displayQuestion();
    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();

    }
  }

  nextQuestion();

})();
