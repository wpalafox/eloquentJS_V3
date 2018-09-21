/*Arrays have a reverse method that changes the array by inverting the order
in which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument and
produces a new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, does what the reverse method does: it modifies the array given
as argument by reversing its elements. Neither may use the standard reverse method.*/

arraytest=[1,2,3,4,5,6,7,8,9]

function reverseArray0(array){
  let output=[]
  for(i=-1;i<=array.length;i++){
    output.push(array.pop())
  }

  return output
/*The code above does not work because array.pop() removes the popped element
from the array, reducing its size by one, so the length is reducing.
The code below resolves this problem.  While arrayTest.length evaluates
to True, run*/


function reverseArray1(array){
  let output=[]
  while(arrayTest.length){
    output.push(array.pop())
  }

  return output

}
reverseArray1(arrayTest)


/*Trick is to swap the first and last elements, then the second and 
second-to-last, and so on. You can do this by looping over half the length
of the array (use Math.floor to round down- you don't need to touch the 
middle element in an array with an odd number of elements) and swapping the
element in an array with an odd number of elements.  

*/

//Sources 
//https://teamtreehouse.com/community/reversing-an-array-in-javascript
//https://medium.com/@frontman/how-swap-two-values-without-temporary-variables-using-javascript-8bb28f96b5f6
//https://stackoverflow.com/questions/40751207/javascript-reverse-an-array-without-using-reverse

//First. built a function that simply swapped the first and last elements 
function reverseArrayInPlace0(array){
  //swap first and last elements
  let a = array[0]
  array[0] = array[array.length-1]
  array[array.length-1]=a 

  return array 

}

/*Second, built a function that loops through half of the array and 
starts the swapping at the ends and moves towards the middle  */
function reverseArrayInPlace1(array){
  //loop over half the length of the array 
  for(i=0;i<(Math.floor(array.length/2));i++){
        let a =array[i]
        array[i] = array[array.length-1-i]
        array[array.length-1-i]=a

  }
  return array 

}


reverseArrayInPlace1([1,2,3,4,5,6,7,8,9]) 










//Version 2 



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
