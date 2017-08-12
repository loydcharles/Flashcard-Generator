var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard");
var BasicCard = require("./BasicCard");
var count = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;

var basicCard = [];
var clozeCard = [];
//initBasicCard();

var start = function() {

    inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "\nStarting Flash Card Generator!",
        choices: ["Start BasicCard game", "Start ClozeCard game", "Add a BasicCard", "Add a ClozeCard"]
      }
    ]).then(function(gameMenu) {
    	console.log("Selection Option:" + gameMenu.option);

    	if(gameMenu.option === "Start BasicCard game") {
    		playBasicCardGame();
    	}  	
    	else if(gameMenu.option === "Start ClozeCard game") {
    		playClozeCardGame();
    	}
    	else if(gameMenu.option === "Add a BasicCard") {
    		addBasicCard();
    	}
    	else if(gameMenu.option === "Add a ClozeCard") {
    		addClozeGame();
    	}
    	console.log("\nCorrect answers: " + correctGuesses);
		console.log("\nInCorrect answers: " + incorrectGuesses);
	});	
};

function addBasicCard() {
	var firstPresident = new BasicCard(
	    "Who was the first president of the United States?", "George Washington");
		
	basicCard.push(firstPresident);

	var secondPresident = new BasicCard(
	    "Who was the second president of the United States?", "John Adams");

	basicCard.push(secondPresident);

	var thirdPresident = new BasicCard(
	    "Who was the third president of the United States?", "Thomas Jefferson");

	basicCard.push(thirdPresident);
}


function addClozeCard() {

	var firstPresident = new ClozeCard(
	    "George Washington was the first president of the United States?", "George Washington");
		
	clozeCard.push(firstPresident);

	var secondPresident = new ClozeCard(
	    "John Adams was the second president of the United States?", "John Adams");

	clozeCard.push(secondPresident);

	var thirdPresident = new ClozeCard(
	    "Thomas Jefferson was the third president of the United States?", "Thomas Jefferson");

	clozeCard.push(thirdPresident);

	var fourPresident = new ClozeCard(
	    "Thomas Jefferson was the third president of the United States?", "Loyd");

	clozeCard.push(thirdPresident);

}


var playBasicCardGame = function() {
	count = 0;
	console.log("\nPlay Basic Card Game!\n");	
	while (count < basicCard.length) {	    
	    inquirer.prompt([
	      {
	      	type: "input",
	        name: "name",
	        message: JSON.stringify(basicCard[count].front)
	      }
	    ]).then(function(answers) {	    	
	    	if(answers.name === JSON.stringify(basicCard[count].back)) {
	    		correctGuesses++;
	    	}
	    	else {
	    		incorrectGuesses++;
	    	}
		});
		count++;
	}
	console.log("\nCorrect answers: " + correctGuesses);
	console.log("\nInCorrect answers: " + incorrectGuesses);
};

var playClozeCardGame = function() {
	count = 0;
	console.log("\nPlay Basic Card Game!\n");	
	while (count < basicCard.length) {	    
	    inquirer.prompt([
	      {
	      	type: "input",
	        name: "name",
	        message: JSON.stringify(basicCard[count].front)
	      }
	    ]).then(function(answers) {	    	
	    	if(answers.name === JSON.stringify(basicCard[count].back)) {
	    		correctGuesses++;
	    	}
	    	else {
	    		incorrectGuesses++;
	    	}
		});
		count++;
	}
	console.log("\nCorrect answers: " + correctGuesses);
	console.log("\nInCorrect answers: " + incorrectGuesses);
};

