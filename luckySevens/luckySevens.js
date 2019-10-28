/*
	Name: Mark Coretsopoulos
	Date Created: 10/27/19
	Most Recent Revision: 10/27/19
*/


function clearErrors(){
	for (var i = 0; i < document.forms["luckySevens"].elements.length; i++){
		if (document.forms["luckySevens"].elements[i].parentElement.className.indexOf("has-") !=-1){
			document.forms["luckySevens"].elements[i].parentElement.className = "form-group";
		}
	}
}

function rollDice(numSides){
	return Math.floor(Math.random() * numSides)+ 1;
}
function playGame(startingBet){
	var currentMoney = startingBet;
	var maxMoney = startingBet;
	var currentRoll = 0;
	var rollAtMaxMoney = 0;
	var numRolls = 0;

	while(currentMoney > 0){
		currentRoll = rollDice(6)+rollDice(6);
		numRolls++;

		if(currentRoll == 7){
			currentMoney = currentMoney + 4;

			if(currentMoney > maxMoney){
				maxMoney = currentMoney;
				rollAtMaxMoney = numRolls;
			}
		}
		else{
			currentMoney--;
		}

	}
			
	return [startingBet, numRolls, maxMoney, rollAtMaxMoney];
}
function validateItems(){
	clearErrors();
	var startingBet = document.forms["luckySevens"]["startingBet"].value;

	if (startingBet == "" || isNaN(startingBet)){
		alert("Starting bet must be filled in with a number");
		document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
		document.forms["luckySevens"]["startingBet"].focus();
		return false;
	}
	if (startingBet <= 0){
		alert("Starting bet must be greater than zero");
		document.forms["luckySevens"]["startingBet"].parentElement.className = "form-group has-error";
		document.forms["luckySevens"]["startingBet"].focus();
		return false;
	}
	var output = playGame(startingBet);
	document.getElementById("results").style.display = "block";
	document.getElementById("play").innerText = "Play Again";
	document.getElementById("initialBet").innerText = output[0];
	document.getElementById("rollsBeforeBroke").innerText = output[1];
	document.getElementById("highestWinning").innerText = output[2];
	document.getElementById("rollAtHighestWinning").innerText = output[3];

	return false;
}
function populateTable(output){
	for(var i = 0; i < 4; i++){
		var table = document.getElementById("resultsTable");
		table.rows[i].cells[1].innerHTML = output[i];
	}
}