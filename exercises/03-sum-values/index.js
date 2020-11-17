window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	var stringB = parseInt(document.getElementById("secondNumber").value);
    var resultado = stringA + stringB;
	let inputResultado = document.getElementById("resultNumber");
	inputResultado.value = resultado;
	//your code goes here
};
