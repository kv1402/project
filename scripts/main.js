
var numOne = document.getElementById("one-num");
var numTwo = document.getElementById("two-num");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);


function add(){
	var one = numOne.value;
	var two = numTwo.value;
	addSum.innerHTML = one + two;
}