class Group {
  constructor(){

  	this.group=[]

  }

  add(num){
  	let index = this.group.indexOf(num)
  	if(index == -1) this.group.push(num)
  	return this.group
  }

  delete(num){
  	let index = this.group.indexOf(num); 
  	if (index !== -1) this.group.splice(index, 1); 
  	return this.group
  }

  has(num){
  	let index = this.group.indexOf(num);
  	if(index!==-1){return true}else{return false} 
  }

  static from(collection){
  	//creates a new group. Static means that it's attached to the constructor 
  	let group = new Group; 
  	/*The for/of syntax threw me for a loop (get it) because I kept using 'in' and 'from'
	instead of 'of' */
  	for (let value of collection){
  		group.add(value)

  	}
  	return group 

  }


  
}


let aGroup = new Group()
let bGroup = new Group() 
/*
console.log(aGroup.add(5))
console.log(aGroup.add(8))

console.log(aGroup.delete(8))
console.log(aGroup.has(8))
*/
let cGroup = Group.from(["a","b","c","d"])
console.log(cGroup.has(1))
console.log(cGroup.has(3))
console.log(cGroup.has("a"))
console.log(cGroup.has("b"))


