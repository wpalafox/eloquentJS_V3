/*Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from strart and to
including) end. */


function range(num1,num2){ 
	totalArray = [];
	
	for(i = num1;i <= num2; i++){
		totalArray.push(i); 
	}
	return totalArray;
} 

/*Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. Run the previous program 
and see whether it does indeed return 55 */ 

testArray = (range(1,10));

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

sum(testArray);