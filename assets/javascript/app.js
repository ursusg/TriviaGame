window.onload = function () {
  $("#start").on("click", timer.start);
};

time = 30;
var intervalId;
var correct = 0
var incorrect = 0
// var answers = [
//   "bishop",
//   paprika,
//   none,
//   tajmahal,
//   tweleve
// ];
var userAnswers = [];


// Hides the Timer and Questions when the page loads
$("#timer").toggle(false);
$("#questions").toggle(false);

var timer = {

  // the callback function for the interval when the player hits Start
  countdown: function () {
    clearInterval();
    time--;
    $("#timer").text(time);

  // cancels the interval set by the 'start' function and hides all the questions, answers, and timer. Changes the introduction tag as well.
    if (time === 0) {
      clearInterval(intervalId);
      $("#questions").toggle(false);
      $("#timer").toggle(false);
      $("#introduction").text("Here are your results!");
      checkAnswers();
      $("#results").append("Correct:" + " " + correct);
      $("#results").append("<div> Incorrect:" + " " + incorrect + "</div>");
    }
  },

  // the starting function which: hides the 'Start' button, shows the 'Timer' and 'Questions,' and changes the Introduction text
  // also sets an interval using the countdown function as a callback function for every second
  start: function () {
    if (time = 30) {
      intervalId = setInterval(timer.countdown, 1000);
      timerCountdown = true;
      $("#timer").toggle(true);
      $(".btn").toggle(false);
      $("#questions").toggle(true);
      $("#introduction").text("Good luck!");
    }
  }
};


function checkAnswers() {

  var correctAnswers = [
    "bishop",
    "paprika",
    "none",
    "tajmahal",
    "twelve",
  ];

  // var userInput = $("input:checked").val();

  var valuesByName = document.getElementsByName('correct').values;

  console.log(valuesByName);

  // switch (userInput) {
  //   case "bishop" :
  //     correct++;
  //     console.log("Correct: Bishop");
  //   break;
  //   case "paprika" :
  //     correct++;
  //   break;
  //   case "none" :
  //     correct++;
  //   break;
  //   case "tajmahal" :
  //     correct++;
  //   break;
  //   case "twelve" :
  //     correct++;
  //   break;
  // }

  if (userInput === "bishop" || "paprika" || "none" || "tajmahal" || "twelve") {
    correct++
  }
  else if (userInput !== correctAnswers) {
    incorrect++;
  }

};