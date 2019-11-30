var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var highScores = document.getElementById("scores");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds";
   
    if (secondsLeft <= 0){  
      clearInterval(timerInterval);
      gameOver();
    }

  }, 1000);   
};

//function redirect() {
  //  window.location.href = "High-Scores.html";    
//};

startButton.addEventListener("click", setTime);
highScores.addEventListener("click", function(){window.location.href = "High-Scores.html";});

