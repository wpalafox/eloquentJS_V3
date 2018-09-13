/*

							Recursion
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to check whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even
or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N -2.
Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?

*/


//My Solution (no recursion but lacks modulus!)

function isEven(number){
    division = number/2;
	if(Number.isInteger(division) == true){
		return true}else{
			return false
		}
	}


//Version 3 solution with recursion

// Your code here.
function isEven(n){
  if(n == 0){
    return "True" 
  }else if(n == 1){
	return "False"
  }else{
	return isEven(n-2) 
	}
}


//Author Solution

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


//The function calls itself until it decrements to 0 or 1, resulting in even or odd, respectively. 
//If the number lands below zero then the function flips it back to positive.  

