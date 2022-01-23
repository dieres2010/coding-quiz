var pageContentEl = document.querySelector("#start-quiz");

var Arrquestion = [
    {
        grpquestion: "1",
        question: "Commonly used data types Do Not include:"
    },
    {
        grpquestion: "2",
        question: "The condition in an if / else statement is enclosed with _________."
    },
    {
        grpquestion: "3",
        question: "Arrays in JavaScript can be used to store _________."
    },
    {
        grpquestion: "4",
        question: "String values must be enclosed within  _________ when being assigned to variables."
    },
    {
        grpquestion: "5",
        question: "A very usefull tool used during development and debugging for printing content to the debugger is:"
    }

];

var Arranswer = [
    {
        grpquestion: "1",
        answer:"1. Strings",
        value:"0"
    },
    {
        grpquestion: "1",
        answer:"2. booleans",
        value:"0"
    },
    {
        grpquestion: "1",
        answer:"3. alerts",
        value:"1"
    },
    {
        grpquestion: "1",
        answer:"4. numbers",
        value:"0"
    },
    {
        grpquestion: "2",
        answer:"1. quotes",
        value:"0"
    },
    {
        grpquestion: "2",
        answer:"2. curly brackets",
        value:"0"
    },
    {
        grpquestion: "2",
        answer:"3. parenthesis",
        value:"1"
    },
    {
        grpquestion: "2",
        answer:"4. square brackets",
        value:"0"
    },
    {
        grpquestion: "3",
        answer:"1. numbers and strings",
        value:"0"
    },
    {
        grpquestion: "3",
        answer:"2. other arrays",
        value:"0"
    },
    {
        grpquestion: "3",
        answer:"3. booleans",
        value:"0"
    },
    {
        grpquestion: "3",
        answer:"4. all of the above",
        value:"1"
    },
    {
        grpquestion: "4",
        answer:"1. commas",
        value:"0"
    },
    {
        grpquestion: "4",
        answer:"2. curly brackets",
        value:"0"
    },
    {
        grpquestion: "4",
        answer:"3. quotes",
        value:"1"
    },
    {
        grpquestion: "4",
        answer:"4. parenthesis",
        value:"0"
    },
    {
        grpquestion: "5",
        answer:"1. JavaScript",
        value:"0"
    },
    {
        grpquestion: "5",
        answer:"2. terminal/bash",
        value:"0"
    },
    {
        grpquestion: "5",
        answer:"3. for loops",
        value:"0"
    },
    {
        grpquestion: "5",
        answer:"4. console.log",
        value:"1"
    },

];




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector(`#time`);
    startTimer(fiveMinutes, display);

};

var taskButtonHandler = function (event) {

    var targetEl = event.target;

    // get target element from event

    document.querySelector("h1").innerHTML = "";
    document.querySelector("#h-text").innerHTML = "";
    var myobj = document.querySelector("button");
    myobj.remove();

    var numansw = "2";
    createQuestion(numansw);

};

var createQuestion = function (numansw) {

    var questionId = "0";
    var answerId = "0";
    var answButtonEl = "";
    var questBtnEl="";

    var actionContainerEl = document.querySelector("#h-title");
    questBtnEl = document.createElement("p");
    questBtnEl.textContent = Arrquestion[numansw].question;
    actionContainerEl.append(questBtnEl);
    
    var j = numansw*4;

    console.log(j);

    // create container to hold elements
    var actionContainerEl = document.querySelector("#h-text");
    for (i= j; i < (j+4); i++ ) {
        console.log(Arranswer[i].answer);
        console.log(i);
        answButtonEl = document.createElement("button");
        answButtonEl.textContent = Arranswer[i].answer;
        actionContainerEl.append(answButtonEl);

    }
};
  


// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);
