
/*The first, reverseArry, takes an array as an Argument and produces a 
new Array that has the same elements in the inverse order */
var testA = [3,6,9,12];


function reverseA(array){ 
	rvrseArry = [];
 
	for(var i=array.length-1; i>=0; --i) {
		rvrseArry.push(testA[i])
	}

	return rvrseArry;
}


reverseA(testA);

/* The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements. 
Neither may use the standard reverse method */ 