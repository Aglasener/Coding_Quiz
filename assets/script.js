var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var highScores = document.getElementById("scores");
var modalE1 = document.querySelector("#modal-container");
var modalNameE1 = document.querySelector("#modal-name");
var modalBody = document.querySelector(".modal-body");
var choiceA = document.getElementById("0");
var choiceB = document.getElementById("1");
var choiceC = document.getElementById("2");
var choiceD = document.getElementById("3");


localStorage.setItem("time", 75);
var secondsLeft = 0;
var score = 75;
var currentId = 0;
var highScores = [];

function gameOver() {
  if (secondsLeft > 0){
  score = secondsLeft;
  
  }
  else {
    score = 0;
  }

  var userScore = prompt("Enter your initials!");
  alert("Your score is " + score);
  
};

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft = localStorage.getItem("time");
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds";
    localStorage.setItem("time",secondsLeft);
    console.log(secondsLeft);
    if (secondsLeft <= 0){  
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);   
};

function askQuestion() {
  modalE1.style.display = "block";
  var questionTitle = questions[currentId].title;
  modalNameE1.textContent = questionTitle;
  choiceA.textContent = questions[currentId].choices[0];
  choiceB.textContent = questions[currentId].choices[1];
  choiceC.textContent = questions[currentId].choices[2];
  choiceD.textContent = questions[currentId].choices[3];
 }

 

 function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    console.log("currentId: " + currentId);
    var choice = questions[currentId].choices[event.target.id];
    console.log("choice: " + choice);
    var answer = questions[currentId].answer;
    console.log("answer: " + answer);  

  if(choice == answer) {
    console.log("correct");
  } else {
    console.log("incorrect");
    time = Number(localStorage.getItem("time"));
    time = time - 15;
    console.log("time: " + time);
    localStorage.setItem("time", time);

  }

  currentId++;
  console.log(currentId);

  if (currentId >= questions.length){
      gameOver();
  }
  else{
  askQuestion();
  }}
  
}


//function redirect() {
  //  window.location.href = "High-Scores.html";    
//};

startButton.addEventListener("click", setTime);
startButton.addEventListener("click", askQuestion);
modalBody.addEventListener("click", handleClick);
highScores.addEventListener("click", function(){window.location.href = "High-Scores.html";});

