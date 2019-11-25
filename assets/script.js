var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var highScores = document.getElementById("scores");

function setTime() {
 setInterval(function(){
     timer = timer--;
     return timer;
     if (timer <= 0){
         clearInterval();
     }
 }, 1000)   
};

//function redirect() {
  //  window.location.href = "High-Scores.html";    
//};

//startButton.addEventListener("click", setTime());
highScores.addEventListener("click", function(){window.location.href = "High-Scores.html";});

