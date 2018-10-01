/*Looks at the "tail" of the list and at the same time count down the index
until it reaches zero, at which point it can return the value property of 
the node looking it is looking at. */ 

//let objA = {here: {is: "an"}, object: 2};
//let objB = {here: {is: "an"}, object: 2}






function deepEqual(a,b){
  /*returns true only if they are the same value or are objects with the 
  same properties*/
  	//first test whether or not they are both real objects 
  	let AisObj=false
  	let BisObj=false


  	if(typeof a == "object" && a!= null){
 	  
 	  console.log("A is an object")
 	  AisObj=true
	
	}else{

		console.log("Error- parameter B is not an object")

	}



	if(typeof b == "object" && b!= null){
		console.log("B is an object")
		BisObj=true

	}else{

		console.log("Error- parameter B is not an object")
	}

	/*Compare properties. Use Object.keys.  Need to test whether both objects
	have the same set of property names and whether those properties have identical values. 

	*/
	if(AisObj && BisObj == true){

		//console.log("Both parameters are objects")
		//test if Objects property names are the same

		//console.log(Object.keys(a))
		//console.log(Object.keys(b))
		//console.log("A object property length is "+Object.keys(a).length)
	
		if(Object.keys(a).length == Object.keys(b).length){
			console.log("Objects have the same property lengths")
			//Loop over the object's properties name to compare them
			//Always confirm first that the other has a property by that name
			Aprops = Object.keys(a)
			Bprops = Object.keys(b)
			console.log(Aprops)
			console.log(Bprops)
			

			for(i=0;i<Object.keys(a).length; i++){
				


				if (Aprops[i] !== Bprops[i]){
					console.log("A and B property names "+i+ " are not identical")
					return false 

				}else if(Aprops[i] == Bprops[i]){
					console.log("A and B property names "+i+ " are identical")

				}else{ 
					console.log("Error")
				}

				if(a[Aprops[i]] !== b[Bprops[i]]){
					return false

				}



				
				
			}

			return true 



		}



	}

}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));