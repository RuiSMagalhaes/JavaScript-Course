// 1st challenge

var massJohn, massMark, heightJohn, heightMark;
massJohn = 80;
massMark = 94;

heightJohn = 1.84;
heightMark = 1.84;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiJohn ,bmiMark);

bmiMarkHigher =  bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + bmiMarkHigher )
