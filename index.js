var readlineSync = require('readline-sync');

var userName = readlineSync.question("Can I have your Name: ");
console.log("Welcome "+userName+" Let's See How Much Do You Know me ");
console.log("----------------")

var score = 0;

var highScore = 7;

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer){
    console.log("Correct ");
    console.log("----------------")
    score= score + 1;
    console.log("Current Score: "+score);
  }
  else{
    console.log("Oops! you missed ");
    console.log("----------------")
  }
}

var questions = [
  {
    question: "Drink I prefer! tea Or coffee? ",
    answer: "coffee"
  },
   {
    question: "Favourite Color! green Or blue ",
    answer: "green"
  },
   {
    question: "Favourite Hobby! gaming Or coding ",
    answer: "gaming"
  },
   {
    question: "Where I m studying right now? punjab Or harayana ",
    answer: "punjab"
  },
   {
    question: "Smartphone I own! redmi Or realme ",
    answer: "redmi"
  },
  {
    question: "Genre of series I watch! action, romantic, thriller ",
    answer: "thriller"
  },
  {
    question: "Am i? nightowl or daylearner ",
    answer: "nightowl"
  },
  {
    question: "Am I friendly? yes or no ",
    answer: "yes"
  },
  {
    question: "saves money or spend money? ",
    answer: "spend money"
  },
  {
    question: "Mostly watches series or movies? ",
    answer: "series"
  }  
];

for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

console.log("Congratulations!! Your score is "+score);
console.log("----------------");
if(score>highScore){
  console.log("You Have Set A New HighScore Please Send A Screenshot to Me")
}
else{
console.log("Unfortunately! you were unable to beat the High Score..")
};

console.log("----------------");
console.log("Thanks for participating");
