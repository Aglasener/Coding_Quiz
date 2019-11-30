var startButton = document.getElementById("start");

var modalEl = document.querySelector("#modal-container");
var modalNameE1 = document.querySelector("#modal-name");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

var currentId = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    
    {
        title: "Arrays in Javascript can be used to store _______",
        choices: ["A3", "B3", "C3", "D3"],
        answer: "A3"
    },
    
    {
        title: "Question 4",
        choices: ["A4", "B4", "C4", "D4"],
        answer: "A4"
    },

    {
        title: "Question 5",
        choices: ["A5", "B5", "C5", "D5"],
        answer: "A5"
    },
  ];

  function askQuestions() {
    modalEl.style.display = "block";
    var questionTitle = questions[currentId].title;
    modalNameE1.textContent = questionTitle;
    choiceA.textContent = questions[currentId].choices[0];
    choiceB.textContent = questions[currentId].choices[1];
    choiceC.textContent = questions[currentId].choices[2];
    choiceD.textContent = questions[currentId].choices[3];
   }

   startButton.addEventListener("click", askQuestions);