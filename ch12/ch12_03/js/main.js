let t = 0;	

let myVariable = setInterval(function(){ 
		startCounting();
}, 50);

function startCounting() {
    document.getElementById("test").innerHTML = t+=1;

}
