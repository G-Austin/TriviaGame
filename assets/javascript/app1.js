var questionCount = 0
var seconds = 10
var timeoutCount = 0
var correctCount = 0
var incorrectCount = 0

var questionArray = ["Who is the youngest person to ever win the Nobel Peace Prize?", "Who is the first Indian woman to be launched into space?"];
var answerArray = [["Hillary Clinton", "Sophie Scholl", "Malala Yousafzai", "Faith Bandler"], ["Deepika Padukona", "Kalpana Chawla", "Malala Yousafzai", "Mata Amritanandamayi"]];
var correctAnswer = ["Malala Yousafzai", "Kalpana Chawla", ];
var gifArray = ["<img class='gif center-block' src='http://38.media.tumblr.com/18289bbca00bad331d4c34d0bba8d77a/tumblr_nq6zgsmRpk1qc8jh0o7_540.gif'>",
				"<img class='gif center-block' src='https://i.ytimg.com/vi/ZlPh4Rnv9cY/hqdefault.jpg'>"];



console.log(questionArray[0])

function initialScreen() {
	console.log('initialScreen is working')
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' id='startQuiz' href='#' role='button'>Start Quiz</a></p>";
	$("#quiz-area").html(startScreen);
}

function game(arg) {
	console.log('game()' + 'game is working yay!')
	quizPage = "<p class='timer text-center'>Time Remaining: <span class='countdown'>" + seconds + "</span></p><p class='question text-center'>" + questionArray[questionCount] + "</p><p class='answer'>" + answerArray[questionCount][0] + "</p><p class='answer'>" + answerArray[questionCount][1] + "</p><p class='answer'>" + answerArray[questionCount][2] + "</p><p class='answer'>" + answerArray[questionCount][3]+"</p>"
	$('#quiz-area').html(quizPage);
}

function countdown(arg) {
	timer = setInterval(done, 1000);
		function done() {

			if (seconds === 0) {
				clearInterval(timer);
				timeout();
			}
			if (seconds > 0) {
				console.log('countdown()' + 'I didnt mess up the timer');
				seconds--;
			}
			$('.countdown').html(seconds);
		}
}

function timeout(arg) {
	console.log('timeout()' + 'waited too long')
	timeoutCount++;
	quizPage = "<p class='timer text-center'>Time Remaining: <span class='countdown'>" + seconds + "</span></p><p class='text-center'>" + "Out of time! The correct answer was " +  correctAnswer[questionCount] + "</p><p class='gif'>"+ gifArray[questionCount] + "</p>"
	$('#quiz-area').html(quizPage);
}

function questionInterval(arg) {
	if (questionCount < 1) {
	console.log('questionInterval() ' + 'Hopefully I got this');
		questionCount++;
		game();
		seconds = 10;
		countdown();
	}
	else {
		endGame()
	}
}

function correct(arg) {
	correctCount++;
	quizPage = "<p class='timer text-center'>Time Remaining: <span class='countdown'>" + seconds + "</span></p><p class='text-center'>" + "Correct! The answer was " +  correctAnswer[questionCount] + "</p><p class='gif'>"+ gifArray[questionCount] + "</p>"
	$('#quiz-area').html(quizPage);
	setTimeout(questionInterval, 3000)

}

function incorrect(arg) {
	incorrectCount++;
	quizPage = "<p class='timer text-center'>Time Remaining: <span class='countdown'>" + seconds + "</span></p><p class='text-center'>" + "Incorrect! The answer was " +  correctAnswer[questionCount] + "</p><p class='gif'>"+ gifArray[questionCount] + "</p>"
	$('#quiz-area').html(quizPage);
	setTimeout(questionInterval, 3000)
}

function endGame(arg) {
	console.log('endGame() ' + 'game over!')
	quizPage = "<p class='timer text-center'>Time Remaining: <span class='countdown'>" + seconds + "</span></p><p class='text-center'>" + "<p>Game Over!</p>" + "<br>" + "<p>Here are your results! " + "<br>" +  "Correct Answers: " + correctCount + "</p> <p class='text-center'>"+ "Incorrect Answers: " + incorrectCount + "</p>" + "<p class='text-center'>" + "Blank Answers: " + timeoutCount + "</p>" + "<p class='buttonDiv text-center'><a class='resetBtn btn btn-primary btn-lg btn-block ' href='#' role='button'>Take the Quiz Again!</a></p>"
	$('#quiz-area').html(quizPage);
}

function reset(arg) {
	console.log('reset counters');
	questionCount = 0;
	correctCount = 0;
	incorrectCount = 0;
	timeoutCount = 0;
	seconds = 10;
	game();
	countdown();
}
$(document).ready(function() {

	initialScreen();

	$("#quiz-area").on('click', '#startQuiz', function() {
		console.log('start game')
		countdown();
		game();

	})
//this will recgonize the answer chosen and throw it to be counted
	$("body").on("click", ".answer", function() {
		console.log(this);
		userChoice = $(this).text();
		console.log('userChoice ' + userChoice)

		if (userChoice === correctAnswer[questionCount]) {
			clearInterval(timer);
			correct();
		}

		else {
			clearInterval(timer);
			incorrect();
		}

	})

	$("body").on("click", ".resetBtn", function(){
		reset();
	})

  //last curly bracket
})
	
