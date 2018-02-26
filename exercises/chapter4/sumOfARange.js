/*Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from strart and to
including) end. */


function range(num1,num2){ 

	totalArray = [];

	for(i = num1;i <= num2; i++){
		
		totalArray.push(i); 
		
	}

	console.log(totalArray);
} 

range(4,7);




testArray = [0,4,6,7,8];

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

sum(testArray);