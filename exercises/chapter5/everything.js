/*Analogous to the some method, arrays also have an every method. 
This one returns true when the given functions returns true for 
every element in the array. In a way, some is a version of the || 
operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and predicate function
as parameters Write two versions, one using a loop and one using the some
method */

function every(array, test){
  for(let i=0;i<array.length;i++){
  	let counter=0
  	if(test(array[i])){
  		counter=+1
  		//console.log(array[i]+" is less than 10")
  	}else{
  		return false

  	}
  	

  }
  return true 
}

//Book solutions


function every2(array, predicate){
	for(let element of array){
		if(!predicate(element)) return false;

	}return true;

} 

function every1(array, test){

	return !array.some(element => !test(element));

}




/*
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
*/

console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
