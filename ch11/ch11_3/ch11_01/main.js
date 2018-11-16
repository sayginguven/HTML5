
let selectedDomObj = document.getElementById("actionButton");

//1 without eventListener
selectedDomObj.onclick = function() { 
	console.log("yo! you clicked me");
};

//2 with eventListener anonymous function
// selectedDomObj.addEventListener('click', function(){ 

// 	document.getElementById('textGoesHere').innerHTML = "you clicked me, this time it is with addEventListener anonymous function";

// });

//3 with eventListener custom function
// selectedDomObj.addEventListener('click', customFunction);
// function customFunction(){
//  document.getElementById("textGoesHere").innerHTML = "you clicked me, this time it is with addEventListener custom function";
// }

//this is how you remove the event listener
//selectedDomObj.removeEventListener('click', customFunction);

//4 event argument
// selectedDomObj.addEventListener('click', customFunction);
// function customFunction(event){
// 	console.log(event);
// }

