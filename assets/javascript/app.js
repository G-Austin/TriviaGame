

//array of questions as objects
var questionArray = [

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



function initialScreen() {
	//console.log('lets start the game')
	var $startScreen = $('<p><a class="btn btn-primary btn-lg" href="#" role="button">Press to Begin</a></p>');
	$(".mainArea").append($startScreen);
}

function countdown() {
	
	var timer = $(setInterval)
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
//click function to startGame()







function loadQuestion() {

	$("#startButton").on('click', function() {
     timer(); 
      
      // document.getElementById("possibility").innerHTML = array[1].possibility;

      for (var i = 0; i < questionArray.length; i++) {

	     function count(num) {
	     	var int = setInterval(function(){
		      	document.getElementById("questions").innerHTML = questionArray[i].question;
		      	var $buttonGroup = $('<div class="btn-group" role="group" aria-label="'+questionArray[i].number+'">')

		      	
		      	for (var j = 0; j < questionArray[i].possibility.length; j++) {
		      		var $buttonOption = $('<button type="button" class="btn btn-secondary">'+questionArray[i].possibility[j]+'</button>')

		      		$buttonGroup.append($buttonOption);
		      	}

		      	$('#possibility').append($buttonGroup);

		      	if(num === 0) {
		      		clearInterval(int)
		      	}else {
		      		num--;
		      	}

	     		
	     	}, 5000)


	    }


	  }

	count(5);

	console.log(count);
	 })

}
// startGame();




// function userChoice() {


// }

// function totalScreen() {

// }




//Correct Answer loop/counter

//Incorrect answer loop/counter


//Can only choose one answer



