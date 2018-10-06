/* Use the reduce method in combination with the concat mathod
to 'flatten' an array of arrays into a single array that has all the 
elements of the orginal array */ 



let arrays = [[1,2,3], [4, 5], [6], [5,4,8,0,0,0,1,1,1,]]  



const flat = arrays.reduce((total, amount) => {
	//return total.concat(amount);
	return total.concat(amount)
}, []);

console.log(flat)


//a=[] c=[1,2,3]
//a=[1,2,3] c=[4,5]
//a=[1,2,3,4,5] c=[6]
//a=[1,2,3,4,5,6] c=[5,4,8,0,0,0,1,1,1]







const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount);

console.log(sum) 