/* Write a program that uses console.log to 
print all the numbers from 1 to 100, with two exceptions. 
For numbers divisble by 3, print 'Fizz' instead of the number
and for numbers divisible by 5 (and not 3), print 'Buzz' instead.

When you have that working, modify your program to print "Fizzbuzz"
for numbers that are divisible by both 3 and 5 (and still print 
'Fizz' or 'Buzz' for numbers divisible by only one of those).
*/ 


var fizzBuzz = (number) => {
  
  let theNumber = number;

  for(i=0;i<theNumber;i++){
  	if(i%3 == 0  && i%5 == 0){
  		console.log("FizzBuzz")
  	}else if(i%3 == 0){
  		console.log("Fizz")
  	}else if(i%5 == 0){
  		console.log("Buzz")
  	}else{
  		console.log(i)
  	}
  }




}

fizzBuzz(100)