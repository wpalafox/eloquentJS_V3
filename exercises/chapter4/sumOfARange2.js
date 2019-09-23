//Version 3 Refresh 

/*Write a range function that takes two arguments, 
start and end, and returns an array containing all 
the numbers from start up to (and including) end.

As bonus, modify range function to take an optional third 
argument that indicates the "step" value used when building 
the array. If no step is given, then elements go up by increments
of one. 
*/ 



let range = (a,b) => {
	tempArry = [];

	for(let i = a; i <= b; i++){
		tempArry.push(i);

	}

  return tempArry


}

console.log(range(3,5))

let sum = (array) => {
  total=0;

  for(i=0;i<array.length;i++){
  	total += array[i]
  }

  return total 


}

console.log(sum(range(3,5)))
/* Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers. Run the example program and see whether it does
 indeed return 55. */

