let obj = {here: {is: "an"}, object: 2};





function deepEqual(a,b){
  /*returns true only if they are the same value or are objects with the 
  same properties*/
  	//first test whether or not they are both real objects 
  	let AisObj=false
  	let BisObj=false


  	if(typeof a == "object" && a!= null){
 	  
 	  //console.log("A is an object")
 	  AisObj=true
	
	}else{

		console.log("Error- parameter B is not an object")

	}
	if(typeof b == "object" && b!= null){
		//console.log("B is an object")
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
			//console.log("Objects have the same property lengths")
			//Loop over the object's properties name to compare them
			//Always confirm first that the other has a property by that name
			let Aprops = Object.keys(a)
			let Bprops = Object.keys(b)
				
			/*
			console.log("----KEYS-----")
			console.log(Aprops[0])
			console.log(Aprops[1])
			console.log(Bprops[0])
			console.log(Bprops[1])
			console.log("----KEYS-----")

			console.log("-----VALUES-----")
			console.log(a[String(Aprops[0])])
			console.log(a[String(Aprops[1])])
			console.log(b[String(Aprops[0])])	
			console.log(b[String(Aprops[1])])		
			console.log("---------VALUES--------")
			*/

			//Loops through the length of properties A (and B) which is 2.  
			for(i=0;i<Object.keys(a).length; i++){
				//compare property names 
				if (Aprops[i] == Bprops[i]){
					//compare property values 
					//JSON.stringify works with two objects w/o methods and DOM nodes inside
					if(JSON.stringify(a[String(Aprops[i])]) == JSON.stringify(b[String(Bprops[i])])){

						//console.log("iteration "+i+" is a match")
						return true
					}else{
						//Keep digging into the object properties

						//It pulls up the same object, but 
						//console.log(a[String(Aprops[i])])
						//console.log(b[String(Bprops[i])])
						return false 
					





					}



				}else{
					//console.log("False triggered: (Aprops[i] == Bprops[i])")
					return false 


				}
			
			}

			return true 



		}



	}

}



console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// -> true 

