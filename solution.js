// write your code here
const color = "red";

switch (color) {
  case "red":
    console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    console.log("Q1: Blue? Great choice.");
    break;
  case "green":
    console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
}

const grade = "C";

switch (grade) {
  case "A":
    console.log("Q2: A - Well done!");
    break;
  case "B":
    console.log("Q2: B - Good on you!");
    break;
  case "C":
    console.log("Q2: C - Good effort");
    break;
  case "D":
    console.log("Q2: D - Try harder next time...");
  default:
    console.log("Q2: Yikes...");
}

const fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberry":
    console.log("Q3: Mmmm...nothing better than strawberries.");
  default:
    console.log("Q3: PICK A FRUIT");
}

const percentageComplete = 40;

if (percentageComplete < 30) {
  console.log("Q4: Still a long way to go");
} else if (percentageComplete <= 50) {
  console.log("Q4: Slowly getting there");
} else if (percentageComplete <= 80) {
  console.log("Q4: You can do it!");
} else if (percentageComplete <= 99) {
  console.log("Q4: This is the last push!");
} else if (percentageComplete === 100) {
  console.log("Q4: You're there. Well done!");
}
