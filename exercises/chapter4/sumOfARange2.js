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
		tempArry += i+" ";

	}

  return tempArry


}

console.log(range(10,15))



/* Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers. Run the example program and see whether it does
 indeed return 55. */