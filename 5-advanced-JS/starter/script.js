var Question = function(question, answers, correctAnswer ) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var firstQuestion = new Question("Quem é o melhor jogador de futebol do mundo?", ["messi", "CR7"], 1)
var secondQuestion = new Question("Quem é o Presidente da Republica", ["Marcelo", "Rui Magalhães", "António Costa"], 0)
var thirdQuestion = new Question("Qual o melhor bootCamp de programação do mundo", ["IronHack","Outro Qualquer", "Le Wagon"], 2)

questionArray = [firstQuestion, secondQuestion, thirdQuestion];
questionSelected = questionArray[Math.round(Math.random()*2)];

