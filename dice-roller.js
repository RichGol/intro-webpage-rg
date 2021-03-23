function rollDice() {
	for (var i = 1; i < 6; i++) {
		document.getElementById("n" + i).innerHTML = Math.floor(Math.random() * 6) + 1;
	}
}