<<<<<<< HEAD
     function change(objectFromHTML){
         
         objectFromHTML.style.backgroundColor = "tomato";

      }
=======
function writeMyName(name,lastName){

	console.log(`Hello ${name} ${lastName}`);

}

//es6 arrow function
let add = function () {

	let arg = arguments.length;
	let i;
	let result = 0;
	for (i = 0 ; i < arg; i+=1) {
		result+=arguments[i];
	}
	return result;
}	

let mul = function(){

	let arg = arguments.length;
	let i;
	let result = 1;
	for (i = 0 ; i < arg; i+=1) {
		result*=arguments[i];
	}
	return result;
}

let div = (a=1,b=1) =>{
	return a/b;
}

let sub = (a=0,b=0) =>{
	return a-b;
}


console.log(add(1,2,3,4,5,6,7,8,9,10));
console.log(mul(1,2,3,4,5,6,7,8,9,10));

let changeColor = () => {
	let mylist = document.getElementsByClassName("listItems");
	let i;
	for (i = 0; i<mylist.length; i += 1){
		mylist[i].style.color = "white";
		mylist[i].style.backgroundColor = "black";
	}
}

>>>>>>> test
