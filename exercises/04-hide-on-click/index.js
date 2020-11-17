window.myEventListener = function myEventListener() {
	var x = document.getElementById("firstDiv");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
};
