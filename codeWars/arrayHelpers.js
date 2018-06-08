/*
This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
square() must return a copy of the array, containing all values squared, the original array must not be changed
cube() must return a copy of the array, containing all values cubed, the original array must not be changed
average() must return the average of all array values, average() on an empty array must return NaN
sum() must return the sum of all array values
even() must return an array of all even numbers, the original array must not be changed
odd() must return an array of all odd numbers, the original array must not be changed
*/

var numbers = [2,5,8,4,6];



function square(numbers){

	var newArray = [];
    for(var i = 0; i < numbers.length; i++){
       newArray.push(Math.pow(numbers[i], 2));
    }
	return newArray;
}


function cube(numbers){

	var newArray = [];
	for(var i = 0; i < numbers.length; i++){
		newArray.push(Math.pow(numbers[i], 3));
	}
	return newArray;


}


function average(numbers){

	/*
	1.  Add all of the numbers in the array
	2.  Divide the total by the length of the array
	3. return the result
	*/
	var average = 0;

	var total = numbers.reduce(add, 0);

	function add(a,b){

		return a + b;

	}

	average = total/numbers.length;

	return average;

}


function sum(numbers){

	/*
	1.  Add all of the numbers in the array
	2. return the result
	*/
	var average = 0;

	var total = numbers.reduce(add, 0);

	function add(a,b){

		return a + b;

	}

	return total;

}



function even(numbers){

	evenArray = [];

	for(i = 0; i < numbers.length; i++){

		if(numbers[i]%2 == 0){
			evenArray.push(numbers[i]);
		}
	}
	return evenArray;
}


function odd(numbers){

	oddArray = [];

	for(i = 0; i < numbers.length; i++){

		if(numbers[i]%2 !== 0){
			oddArray.push(numbers[i]);
		}
	}
	return oddArray;
}
