let bubbleSort = function(theArray){
	do{
		var swapped = false;
		let i;
		for (i=0; i<theArray.length; i+=1){
			if(theArray[i]> theArray[i+1]){
				let temp = theArray[i];
				theArray[i] = theArray[i+1];
				theArray[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return theArray;
};


console.log(bubbleSort([5,66,19,1,-9]));