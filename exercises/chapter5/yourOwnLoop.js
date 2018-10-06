/*Write a higher-order function loop that provides something like a for loop
statement. It takes 

1)  value, 
2)  test function, 
3)  body function, 
4)  update function. 

Each iteration, it first runs the test function on the current loop
value and stops if that returns false. Then it calls the body function, 
giving it the current value. Finally, it calls the update function to 
create a new value and starts from the beginning.  */ 

//I will write a 1st order  use the filter function for the test function 

testArr=[3,6,0,1,3,2,6,8,9,0,0,0,0,0,0,0,0,8,2,3,4,5]

const morethan0 = (testArr) => {
	const results=[]
	
	for(let i=0;i<testArr.length;i++){
		const number =testArr[i];

		if(number>0){

			results.push(number)
		}

	}
  return results
}

console.log(morethan0(testArr))


//Let's build a higher order function now
/*'A higher order function is a function that takes one or more 
functions as an argument'*/

const morethan5 = (testArr) => {
	
	return testArr.filter((number) => number > 5);

}

console.log(morethan5(testArr))

/*
function (value, test, body, update){





}
*/ 