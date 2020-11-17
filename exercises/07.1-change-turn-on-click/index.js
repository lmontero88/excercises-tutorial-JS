var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};

window.turnChanger = function turnChanger() {
	if ((currentUser == "Mario") & (currentUser !== "Johs")) {
		currentUser = "Juan";
	} else if ((currentUser == "Juan") & (currentUser !== "Mario")) {
		currentUser = "Josh";
	} else {
		currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
