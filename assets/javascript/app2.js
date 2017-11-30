
var $panel = $("#quiz-area");
var counterStart = 30;

var questions = [

		{
		number: 1,
		question: "Who is the youngest person to ever win the Nobel Peace Prize?",
		possibility: ["Hillary Clinton", "Sophie Scholl", "Malala Yousafzai", "Faith Bandler"],
		answer: "Malala Yousafzai"
},

		{
		number: 2,
		question: "Who is the first Indian woman to be launched into space?", 
		possibility: ["Deepika Padukona", "Kalpana Chawla", "Malala Yousafzai", "Mata Amritanandamayi"],
		answer: "Kalpana Chawla"
},
]

var timer;

var game = {

	questions: questions,
	currentQuestion: 0,
	counter: counterStart,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		game.counter--;
		$('#counter-number').html(game.counter);
		if (game.counter === 0) {
			console.log("Time Up");
			game.timeUp();
		}
	},

	loadQuestion: function() {
	console.log(this);
		timer = setInterval(game.countdown, 1000);

		$panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append("<button class='answer-button' id='button' data-name='" + 
			questions[this.currentQuestion].answers[i] + "'>" + questions[this.currentQuestion].answers[i] + 
			"</button>");
		}
	}


};