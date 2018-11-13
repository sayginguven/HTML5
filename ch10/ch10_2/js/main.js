 function myFunction(event){
 	event.preventDefault();
 	let userInfo = [];
 	userInfo[0] = document.getElementById('nameinput').value;
 	userInfo[1] = document.getElementById('lastNameInput').value;
 	userInfo[2] = document.getElementById('emailInput').value;


 document.getElementById('inputSummary').innerHTML = `Hello! ${userInfo[0]} ${userInfo[1]}, thank you for filling out and submitting the form. You will receive an email to the provided email: <h4>${userInfo[2]}</h4>`;
 }