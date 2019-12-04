//var startButton = document.getElementById("start");

//var modalEl = document.querySelector("#modal-container");
//var modalNameE1 = document.querySelector("#modal-name");
//var modalBody = document.querySelector(".modal-body");
//var choiceA = document.getElementById("0");
//var choiceB = document.getElementById("1");
//var choiceC = document.getElementById("2");
//var choiceD = document.getElementById("3");

//var currentId = 0;
//var time = 0;

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

/* function askQuestion() {
    modalEl.style.display = "block";
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
startButton.addEventListener("click", askQuestion);
modalBody.addEventListener("click", handleClick);*/
  //-->