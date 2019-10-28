function rollDice(numSides){
	return Math.floor(Math.random() * numSides)+ 1;
}
function addTwoNumbers (firstNumber, secondNumber){
	return firstNumber + secondNumber;
}

console.log(addTwoNumbers(20, 4));

for (var i = 0; i < 100; i++){
	console.log(rollDice(8));
}