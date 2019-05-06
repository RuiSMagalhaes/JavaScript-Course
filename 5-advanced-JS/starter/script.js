var Question = function(question, answers, correctAnswer ) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var firstQuestion = new Question("Quem é o melhor jogador de futebol do mundo?", ["messi", "CR7"], 1)
var secondQuestion = new Question("Quem é o Presidente da Republica?", ["Marcelo", "Rui Magalhães", "António Costa"], 0)
var thirdQuestion = new Question("Qual o melhor bootCamp de programação do mundo?", ["IronHack","Outro Qualquer", "Le Wagon"], 2)

questionArray = [firstQuestion, secondQuestion, thirdQuestion];

init();

function init() {
  questionSelected = questionArray[Math.round(Math.random()*2)];
  console.log(questionSelected.question);

  for (var i = 0; i <  questionSelected.answers.length ; i++) {
    console.log(i +": " + questionSelected.answers[i]);
  }

  var userAnswer = prompt("Please select the correct answer (Just type the number)");
  if (userAnswer == questionSelected.correctAnswer ) {
    console.log("correct answer! Congrats :)")
  } else
    console.log("WRONG answer! Sorry :(")
}
