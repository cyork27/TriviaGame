$('#start').on('click', function(){
	game.start();
})

$(document).on('click','#end',function(){
	game.done();
})

var questions = [{
	question:"Why does Rick party?",
	answers:["To get his foot in with the cool kids","To have a nice time and bonding","To get riggity, riggity, wrecked, son!","He gotta"],
	correctAnswer:"To get riggity, riggity, wrecked, son!"
}, {
	question:"Where is Tiny Rick?",
	answers:["Dying in a vat in the garage","Gazorpazorp","Watching interdimensional cable","In bed with a nice cup of cocoa"],
	correctAnswer:"Dying in a vat in the garage"
}, {
	question:"Is Jerry squaring his shoulders?",
	answers:["Yes","What now?","No","He's tryin'!"],
	correctAnswer:"He's tryin'!"
}, {
	question:"Why does Krombopulous Michael bounty hunt?",
	answers:["Straight cash, homie","He just loves killin'","The Benjamins","Family Trade"],
	correctAnswer:"He just loves killin'"
}, {
	question:"What does Rick get to save Earth?",
	answers:["Pizza","Ice Cream","Tacos","Schwifty"],
	correctAnswer:"Schwifty"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 10,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	start: function(){
			timer = setInterval(game.countdown,1000);
			$('#subwrapper').prepend('<h2>Time Remaining: <span id ="counter">120</span> Seconds </h2')
			for (var i=0;i<questions.length;i++){
				$('#subwrapper').append('<h2>'+questions[i].question+'</h2');
				for(var j = 0; j<questions[i].answers.length;j++){
				$("#subwrapper").append("<input type = 'radio' name =  'question-" +i+"' value = '"+questions[i].answers[j]+" '> "+questions[i].answers[j])
			}
    	}
    	$('#subwrapper').append('<br><button id="end">DONE</button>')
	},
	done: function(){
		$.each($("input[name='question-0']:checked"), function(){
			if($(this).val() == questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		//Game is not recording correct results
		this.result();
	},
	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();
		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}