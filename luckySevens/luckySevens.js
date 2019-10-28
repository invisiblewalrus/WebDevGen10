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
function checkPlay(){
	var startingBet = parseFloat(document.getElementById("startingBet").value, 10);
	if (startingBet>0){
		var output = playGame(startingBet);
		populateTable(output);
		document.getElementById("results").style.display = "block";
	}
	else{
		alert('Incorrect ammount entered!');
	}
}
function populateTable(output){
	for(var i = 0; i < 4; i++){
		var table = document.getElementById("resultsTable");
		table.rows[i].cells[1].innerHTML = output[i];
	}
}