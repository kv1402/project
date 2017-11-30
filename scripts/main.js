
var lname = document.getElementById("lname");
var fname = document.getElementById("fname");
var addName = document.getElementById(add-name);

lname.addEventListener("click", add);
fname.addEventListener("click", add);

function add(){
	var fname = fname.value;
	var lname = lname.value;
	addName.innerHTML = fname + lname;
}