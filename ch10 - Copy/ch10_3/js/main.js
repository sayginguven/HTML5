//you can use query selector or getElementById 
//different ways to access dom
//be consistent

//you can use single or double quotations 
//'' "" 
//just to provide an example different quotations used.
// be consistent do not use both 


let numbers = [1,2,3,4,5,6,7];
let display = document.getElementById("demo"); 
function pushToArray(event){
	event.preventDefault();
	let userInput = document.querySelector("#numberInput");
	if(userInput.value === ""){
		document.getElementById('warning').innerHTML = "Please enter a number and push after.";
	} else{
		numbers.push(document.querySelector("#numberInput").value); 
		display.innerHTML = numbers;
		userInput.value = "";
	}
}

function popTheArray(event){
	event.preventDefault();
	if(numbers.length != 0){
		numbers.pop();
		display.innerHTML = numbers;
	} else {
		document.getElementById('warning').innerHTML = "How can I pop if the array is empty?";
	}
}

function shifToArray(event){
	event.preventDefault();
	if(numbers.length != 0){
		numbers.shift();
		display.innerHTML = numbers;
	} else {
		document.getElementById('warning').innerHTML = "How can I shift if the array is empty?";
	}
}

function unshiftTheArray(event){
	event.preventDefault();
	let userInput = document.querySelector("#numberInput");
	if(userInput.value === ""){
		document.getElementById('warning').innerHTML = "Please enter a number and unshift before.";
	} else{
		numbers.unshift(document.querySelector("#numberInput").value); 
		display.innerHTML = numbers;
		userInput.value = "";
	}
}