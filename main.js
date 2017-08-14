var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard");
var BasicCard = require("./BasicCard");
var count = 0;

var basicCard = [];
var clozeCard = [];

//addBasicCard();

init();
start();

function init() {
	var firstPresident = new BasicCard(
	    "Who was the first president of the United States?", "George Washington");
		
	basicCard.push(firstPresident);

	var secondPresident = new BasicCard(
	    "Who was the second president of the United States?", "John Adams");

	basicCard.push(secondPresident);

	var thirdPresident = new BasicCard(
	    "Who was the third president of the United States?", "Thomas Jefferson");

	basicCard.push(thirdPresident);

		var firstPresident = new ClozeCard(
	    "George Washington was the first president of the United States?", "George Washington");
		
	clozeCard.push(firstPresident);

	var secondPresident = new ClozeCard(
	    "John Adams was the second president of the United States?", "John Adams");

	clozeCard.push(secondPresident);

	var thirdPresident = new ClozeCard(
	    "Thomas Jefferson was the third president of the United States?", "Thomas Jefferson");

	clozeCard.push(thirdPresident);
}

function start() {

    inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "\nStarting Flash Card Generator!\n",
        choices: ["Start BasicCard game", "Start ClozeCard game", "Add a Basic Card", "Add a Cloze Card", "Exit"]
      }
    ]).then(function(gameMenu) {
    	console.log("Selected Option:" + gameMenu.option);
    	count = 0;
    	if(gameMenu.option === "Start BasicCard game") {    		
    		console.log("\nPlay Basic Card Game!\n");
    		playBasicCardGame();
    	}  	
    	else if(gameMenu.option === "Start ClozeCard game") {
    		console.log("\nPlay Cloze Card Game!\n");
    		playClozeCardGame();
    	}
    	else if(gameMenu.option === "Add a Basic Card") {
    		console.log("\nAdding a Basic Card!\n");
    		addBasicCard();
    	}
    	else if(gameMenu.option === "Add a Cloze Card") {
    		console.log("\nAdding a Cloze Card!\n");
    		addClozeCard();
    	}
    	else if(gameMenu.option === "Exit") {
    		console.log("\nEXITING....\n");
    		process.exit(-1);
    	}
	});
};

function addBasicCard() {

	inquirer.prompt([
      {
      	type: "input",
        name: "front",
        message: "Please enter a question for the basic card to display in the front of the card:"
      },
      {
      	type: "input",
        name: "back",
        message: "Please enter a answer for the basic card to display in the back of the card:"
      },
      {
        type: "confirm",
        name: "confirm",
        message: "Are you sure to add the above question to the basic card?"
      },
      {
        type: "confirm",
 		name: "continue",
        message: "Would you like to add another questions?"
      }
    ]).then(function(answers) {	  
	   	if(answers.confirm) {	   		
			basicCard.push(new BasicCard(answers.front, answers.back));
	   		console.log(basicCard);		   	
    	}
    	if(answers.continue) {
    		console.log("Adding another card");
	   		addBasicCard();  
    	}
    	else {
    		start();
    	}    	

	});	
}

function addClozeCard() {

	inquirer.prompt([
      {
      	type: "input",
        name: "fullText",
        message: "Please enter a full Text for the Cloze Card:"
      },
      {
      	type: "input",
        name: "cloze",
        message: "Please enter an answer for the Cloze Card:"
      },
      {
        type: "confirm",
        name: "confirm",
        message: "Are you sure to add the above question to the Cloze Card?"
      },
      {
        type: "confirm",
 		name: "continue",
        message: "Would you like to add another questions?"
      }
    ]).then(function(answers) {	  
	   	if(answers.confirm) {	   		
			if(answers.fullText.includes(answers.cloze)) {
				clozeCard.push(new ClozeCard(answers.fullText, answers.cloze));
	   			console.log(clozeCard);
			}
			else {
				console.log(cloze + " doesn't appear in " + fullText);
			}				   	
    	}
    	if(answers.continue) {
    		console.log("Adding another card");
	   		addClozeCard();  
    	}
    	else {
    		start();
    	}    	
	});	
}

var playBasicCardGame = function() {
	if (count < basicCard.length) {	    
	    inquirer.prompt([
	      {
	      	type: "input",
	        name: "name",
	        message: JSON.stringify(basicCard[count].front)
	      }
	    ]).then(function(answers) {	    	
	    	if(answers.name === basicCard[count].back) {
	    		console.log(basicCard[count].back + " is the correct answer");
	    	}
	    	else {
	    		console.log(answers.name + " is wrong answer");
	    		console.log(basicCard[count].back + " is the correct answer");
	    	}
	    	count++; //increase the counter
			playBasicCardGame(); // recursive

			//start the game agin and give the user option
			if(count === basicCard.length) {
				start();				
			}
		});
	}	
};

var playClozeCardGame = function() {
	if (count < clozeCard.length) {	    
	    inquirer.prompt([
	      {
	      	type: "input",
	        name: "name",
	        message: JSON.stringify(clozeCard[count].partial)
	      }
	    ]).then(function(answers) {	    	
	    	if(answers.name === clozeCard[count].cloze) {
	    		console.log(clozeCard[count].cloze + " is the correct answer");
	    	}
	    	else {
	    		console.log(answers.name + " is wrong answer");
	    		console.log(clozeCard[count].cloze + " is the correct answer");
	    	}
	    	count++;
			playClozeCardGame();

			//start the game agin and give the user option
			if(count === clozeCard.length) {
				start();				
			}
		});
	}	
};

