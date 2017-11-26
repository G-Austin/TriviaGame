
//

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

//Timer function to show how much time is remaining for the quiz
function timer() {

	var timeLeft = 30;
	var elem = document.getElementById("timer");

	var timerId = setInterval(countdown, 1000);

	function countdown() {
	  if (timeLeft == 0) {
	    clearTimeout(timerId);
	    totalScreen();
	  } else {
	    elem.innerHTML = timeLeft + ' seconds remaining';
	    timeLeft--;
	  }
	}
};

function startGame() {

	$("#startButton").on('click', function() {
      timer();
      
    
      // alert('I have had ' + pbjCount + ' sandwiches.');
    })
}
startGame();

// //click function to startGame()
// function startGame() {
function totalScreen() {
	
}
// $("#startGame").on("click", function(event) {
// 	$("#startGame").hide();

// document.getElementById("game").style.visibility = "visible";

// 	// timer();
// 	// generateHTML();

// });
// console.log(event);
//Create Timer for length of question

// function timer() {
//   var countdown = setTimeout(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }





//Correct Answer loop/counter

//Incorrect answer loop/counter


//Can only choose one answer



