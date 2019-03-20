// 1st challenge

console.log("1st challenge");

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

// changing challenge
console.log("1st challenge finished!!");


// 2nd challenge

console.log("2nd challenge");

var avgJohn = (116 + 94 + 123) / 3;
var avgMark = (89 + 120 + 103) / 3;
var avgMary = (97 + 134 + 105) /3
console.log(avgJohn, avgMark, avgMary);

if (avgJohn > avgMark && avgJohn > avgMary) {
  console.log("John's team won");
} else if (avgMark > avgJohn && avgMark > avgMary) {
  console.log("Mark's team won");
} else if (avgMary > avgJohn && avgMary > avgMark) {
  console.log("Mary's team won");
} else if (avgJohn === avgMark === avgMary){
  console.log(" It's a draw!");
} else  {
  console.log("Someone have a draw with another player");
};

// changing challenge
console.log("2nd challenge finished!!");


// 3rd challenge

console.log("3rd challenge");

tips = [];
total = [];

function calculator(bill){
  if (bill < 0) {
    tip = 0;
  } else if (bill < 50) {
    tip = bill * .2;
  } else if (bill >= 50 && bill <= 200) {
    tip =  bill * .15;
  } else {
    tip = bill * .10;
  };
  tips.push(tip);
  total.push(bill + tip);
};


calculator(124);
calculator(48);
calculator(268);

console.log(tips, total);

console.log("3rd challenge finished!!");

