var pageContentEl = document.querySelector("#start-quiz");
var numansw = "0";
var createbtnEl = false;
var correctAnsw = "";
var intervId =0;

var questionId = "0";
var Arrquestion = [
    {
        grpquestion: "1", question: "Commonly used data types Do Not include:", correct: "3"
    },
    {
        grpquestion: "2", question: "The condition in an if / else statement is enclosed with _________.", correct: "3"
    },
    {
        grpquestion: "3", question: "Arrays in JavaScript can be used to store _________.", correct: "3"
    },
    {
        grpquestion: "4", question: "String values must be enclosed within  _________ when being assigned to variables.", correct: "3"
    },
    {
        grpquestion: "5", question: "A very usefull tool used during development and debugging for printing content to the debugger is:", correct: "3"
    }

];

var Arranswer = [
    {
        grpquestion: "1", answer:"1. Strings", value:"0"
    },
    {
        grpquestion: "1", answer:"2. booleans", value:"0"
    },
    {
        grpquestion: "1", answer:"3. alerts", value:"1"
    },
    {
        grpquestion: "1", answer:"4. numbers", value:"0"
    },
    {
        grpquestion: "2", answer:"1. quotes", value:"0"
    },
    {
        grpquestion: "2", answer:"2. curly brackets", value:"0"
    },
    {
        grpquestion: "2", answer:"3. parenthesis", value:"1"
    },
    {
        grpquestion: "2", answer:"4. square brackets", value:"0"
    },
    {
        grpquestion: "3", answer:"1. numbers and strings", value:"0"
    },
    {
        grpquestion: "3", answer:"2. other arrays", value:"0"
    },
    {
        grpquestion: "3", answer:"3. booleans", value:"0"
    },
    {
        grpquestion: "3", answer:"4. all of the above", value:"1"
    },
    {
        grpquestion: "4", answer:"1. commas", value:"0"
    },
    {
        grpquestion: "4", answer:"2. curly brackets", value:"0"
    },
    {
        grpquestion: "4", answer:"3. quotes", value:"1"
    },
    {
        grpquestion: "4", answer:"4. parenthesis", value:"0"
    },
    {
        grpquestion: "5", answer:"1. JavaScript", value:"0"
    },
    {
        grpquestion: "5", answer:"2. terminal/bash", value:"0"
    },
    {
        grpquestion: "5", answer:"3. for loops", value:"0"
    },
    {
        grpquestion: "5", answer:"4. console.log", value:"1"
    },

];



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    intervId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervId);
        }
    }, 1000);

}

function updateTimer() {

    display = document.querySelector(`#time`);
    
    const [mins,secs] = display.textContent.split(':');
    var totalSecs = (+secs)-10;
  
    clearInterval(intervId);
   
    startTimer(totalSecs,display);
};



var taskButtonHandler = function (event) {

    // get target element from event
    var targetEl = event.target;

    if (targetEl.matches(".btn")) {

        var OneMinute = 60,
        display = document.querySelector(`#time`);
        startTimer(OneMinute, display);
        document.querySelector("h1").innerHTML = "";
        document.querySelector("#h-text").innerHTML = "";
        var myobj = document.querySelector("button");
        myobj.remove();


        
        createQuestion();

    } else {
        if (targetEl.matches(".answ-btn"+correctAnsw)) {
            showMsg("1");
        } else {
            updateTimer();
            showMsg("0");
        }
    }
};

var showMsg = function(StrAnsw) {

    if (StrAnsw == "1") {
        document.querySelector(".start-quiz").innerHTML = "Correct";
        numansw++;
        if (numansw < 5){
            createQuestion();
        }
    } else{
        document.querySelector(".start-quiz").innerHTML = "Incorrect";
    }
};

var createQuestion = function () {


    var answerId = "0";
    var answButtonEl = "";
    var questBtnEl="";
    var k = 1;
    
    correctAnsw = "0";
    if (numansw == "0") {
        var actionContainerEl = document.querySelector("#h-title");
        questBtnEl = document.createElement("p");
        questBtnEl.textContent = Arrquestion[numansw].question;
        actionContainerEl.append(questBtnEl);
    } else {
        document.querySelector("#h-title").innerHTML = Arrquestion[numansw].question;
    }
    var j = numansw*4;

    // create container to hold elements
    var actionContainerEl = document.querySelector("#h-text");
    for (i= j; i < (j+4); i++ ) {
        // check for the correct answer
        if (Arranswer[i].value == "1") {
            correctAnsw = Arranswer[i].answer[0,0];
        }
        // if first set of answers
        if (numansw == "0") {
            answButtonEl = document.createElement("button");
            answButtonEl.textContent = Arranswer[i].answer;
            answButtonEl.className = "answ-btn"+k;
            answButtonEl.id = "answ-btn"+k;

            actionContainerEl.append(answButtonEl);
        } else {
            var answEl = ".answ-btn"+k;
            document.querySelector(answEl).innerHTML = Arranswer[i].answer;        
        }

        // create event listener for answer(k) button
        if (!createbtnEl) {
            switch (k) {
                case 1:
                    var answer1El = document.querySelector(".answ-btn1");
                    answer1El.addEventListener("click", taskButtonHandler);
                    break;
                case 2:
                    var answer2El = document.querySelector(".answ-btn2");
                    answer2El.addEventListener("click", taskButtonHandler);
                    break;
                case 3:
                    var answer3El = document.querySelector(".answ-btn3");
                    answer3El.addEventListener("click", taskButtonHandler);
                    break;
                default:
                    var answer4El = document.querySelector(".answ-btn4");
                    answer4El.addEventListener("click", taskButtonHandler);
                    break;    
            }
        }
        k++;
    
    }
    createbtnEl = true;
};
  


// for start quiz button
pageContentEl.addEventListener("click", taskButtonHandler);

