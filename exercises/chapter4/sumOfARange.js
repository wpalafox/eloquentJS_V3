//Version 3 Refresh 

/*Write a range function that takes two arguments, 
start and end, and returns an array containing all 
the numbers from start up to (and including) end.*/  

function range(a,b, c){
	ranger=[]
	if(c==null){ 
		
		for(i=a;i<=b;i++){
			ranger.push(i)

		}
	
		
	}else if(c){
		//code to implement step value use
		//how do I handle both positive and negative situations 
		for(i=a;;i+c){
			ranger.push(i)


		}


	return ranger
	}
}

/*Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.*/


function sum(array){
	sum=0 
	for(i=0;i<array.length;i++){
		sum+=array[i]

	}

	return sum

}


/*---------------------------------------------------------------------------------------*/

//Version 2 
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