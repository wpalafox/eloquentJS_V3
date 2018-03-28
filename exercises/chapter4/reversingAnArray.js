
/*The first, reverseArry, takes an array as an Argument and produces a 
new Array that has the same elements in the inverse order */
var testA = [3,6,9,12];


function reverseA(array){ 
	
	let rvrseArry = [];
 	for(var i=array.length-1; i>=0; i--) {
		rvrseArry.push(testA[i])
	}

	return rvrseArry;
}


reverseA(testA);

/* The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements. 
Neither may use the standard reverse method */

/*Book Answer */
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}