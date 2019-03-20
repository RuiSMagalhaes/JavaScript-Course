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


// 4th challenge
console.log("4th challenge");


john = {
  name: "John nothing",
  mass: 80,
  height: 1.85,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height);
  }

};

mark = {
  name: "Mark something",
  mass: 50,
  height: 1.23,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height);
  }
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.name + " has the higher BMI. His BMI is: " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.name + " has the higher BMI. His BMI is: " + mark.bmi);
} else  {
  console.log("Mark and John has the same BMI. The value is of: " + john.bmi);
}

// changing challenge
console.log("4th challenge finished!!");

// 5th challenge
console.log("5th challenge");


john = {
  name: "John nothing",
  mass: 80,
  height: 1.85,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height);
  },
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    this.tips = [];
    this.total = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 0) {
        tip = 0;
      } else if (this.bills[i] < 50) {
        tip = this.bills[i] * .2;
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        tip =  this.bills[i] * .15;
      } else {
        tip = this.bills[i] * .10;
      };
      this.tips.push(tip);
      this.total.push(tip + this.bills[i]);
    };
  },
  calcAverageTip: function(){
    this.calcTip();
    sum = 0;
    for (var i = 0; i < this.tips.length; i++) {
      sum = sum + this.tips[i];
    };
    return this.avgTip = sum / this.tips.length;
  }
};


mark = {
  name: "Mark something",
  mass: 94,
  height: 1.85,
  calcBMI: function() {
    return this.bmi = this.mass / (this.height * this.height);
  },
  bills: [77, 375, 110, 45],
  calcTip: function() {
    this.tips = [];
    this.total = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] < 0) {
        tip = 0;
      } else if (this.bills[i] < 100) {
        tip = this.bills[i] * .2;
      } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
        tip =  this.bills[i] * .1;
      } else {
        tip = this.bills[i] * .25;
      };
      this.tips.push(tip);
      this.total.push(tip + this.bills[i]);
    };
  },
  calcAverageTip: function(){
    this.calcTip();
    sum = 0;
    for (var i = 0; i < this.tips.length; i++) {
      sum = sum + this.tips[i];
    };
    return this.avgTip = sum / this.tips.length;
  }
};

if (john.calcAverageTip() > mark.calcAverageTip()) {
  console.log("John's family paid the biggest average tip of " + john.avgTip);
} else if (mark.avgTip > john.avgTip) {
  console.log("Mark's family paid the biggest average tip of " + mark.avgTip);
} else {
  console.log("the average tip of both families are the same of " + mark.avgTip);
};























// changing challenge
console.log("5th challenge finished!!");
