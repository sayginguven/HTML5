function game(){
	let fruit = "apple";
	let userInput = prompt("What is your favorite fruit");
	let info = document.getElementById("demo");

	//Apple or APPLE or APPle is same
	if (userInput.toLowerCase() === fruit) {
	    info.innerHTML = "you win the apple prize";
	} else {
	    info.innerHTML = "you lost";
	}
}