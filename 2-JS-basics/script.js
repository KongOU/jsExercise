/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
/*
var massMark = 78;
var heightMark = 1.68;

var massJohn = 68;
var heightJohn = 1.78;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
*/

// if / else statements
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married.');
} else {
  console.log(firstName + ' will hopefully marry soon. :)');
}
*/

// The Ternary Operator
/*
var firstName = 'John';
var age = 16;

age >= 18
  ? console.log(firstName + ' drink beer.')
  : console.log(firstName + ' drink juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;

  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;

  case 'designer':
    console.log(firstName + ' design beautiful website.');
    break;

  default:
    console.log('Wrong Keyword.');
    break;
}*/
/*
var height;

height = 0;
if (height) {
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined');
}*/

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wins with " + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wins with " + scoreMary + ' points');
} else {
  console.log('There is a draw');
}*/

/*if (scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
  console.log("Mike's team wins with " + scoreMike + ' points');
} else {
  console.log('There is a draw');
}*/

/* Function */
/*
function calculateAge(birthYear) {
  return 2020 - birthYear;
}

console.log(calculateAge(1992));

var ageJohn = calculateAge(1992);
var ageMike = calculateAge(1990);
var ageJane = calculateAge(1995);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 60 - age;

  if (retirement > 0) {
    console.log(firstName + ' retire in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retire.');
  }
}

yearsUntilRetirement(1992, 'John');
yearsUntilRetirement(1945, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/* Function Statement and Expressions */
// function whatDoYouDo(job, firstName) {}

// Function Expression
/*
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kid how to code.';
    case 'driver':
      return firstName + ' drives a cab in Lisbon.';
    case 'designer':
      return firstName + ' designs beautiful websites.';
    default:
      return firstName + ' does something else.';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('designer', 'Make'));
*/
/* Array */
/*
var names = ['John', 'Mark', 'Jane'];
var year = new Array(1990, 1969, 1948);

console.log(names.length);

names[1] = 'kong';
names[names.length] = 'Mary';
names[names.length] = 'King';
names[names.length] = 'Jacky';
names.pop(); // Remove last element
names.shift(); // Remove first element
names.push('Python'); // Insert last element of Arrays
names.unshift('JS'); // Insert new element start of Arrays
console.log(names.indexOf('kong')); // Search array index element
console.log(names);
console.log(names.length);
*/
/*
var john = ['John', 'Smith', 'designer', 1990, false];

var isDesigner =
  john.indexOf('designer') === -1 ? 'John is not designer' : 'John is designer';

console.log(isDesigner);
*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// bill 124, 48. 268
// Tip 20% bill < 50
// Tip 15% bill >=50 && bill < 200
// Tip 10% bill >= 200

/*function tipCalculator(bill) {
  if (bill < 50) {
    tip = 0.2;
    total = bill + bill * tip;
    console.log(total);
  } else if (bill >= 50 && bill < 200) {
    tip = 0.15;
    total = bill + bill * tip;
    console.log(total);
  } else {
    tip = 0.1;
    total = bill + bill * tip;
    console.log(total);
  }
}
tipCalculator(200);

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var totalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totalValues);
*/

// Objects and properties

// Obj literal
/*var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;

// new Obj syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 19;
jane['lastName'] = 'Smith';
console.log(jane);*/

// Objects and Methods
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }
};
john.calcAge();
console.log(john);
*/

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.68,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: 'John Smith',
  mass: 110,
  height: 1.78,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else {
  console.log('They have the same BMI');
}
*/

// Loop and iteration

// for loop
/*
console.log('For Loop\n');
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log('\nFor Loop in Array\n');
var john = ['John', 'Smith', 'designer', 1990, false];

console.log('Amount of Arrays is: [' + john.length + ']');
console.log('==========');
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
console.log('+++++\n');

// While loop
console.log('While Loop\n');
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

// Continue and Break Statements

// Continue
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'black'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

// Break
console.log('\nBreak Statement\n');
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Loop Backward
console.log('\nLoop Backward');
for (i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with average of $" +
      john.average
  );
} else {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with average of $" +
      mark.average
  );
}
