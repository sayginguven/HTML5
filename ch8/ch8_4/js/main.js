let i;
let theCollection = document.getElementsByTagName("p");

for(i=0; i<theCollection.length; i+=1){
	if(i === 5){
		//break;
		continue;
	}
	theCollection[i].innerHTML = "number " + (i+1).toString();
}