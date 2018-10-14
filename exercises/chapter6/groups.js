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

  from(a,b){
    
    for(i=a;i<=b;i++){
    	this.group.add(i)
  }
  
    return this.group 
  }
}


let aGroup = new Group()
let bGroup = new Group() 
console.log(aGroup.add(5))
console.log(aGroup.add(8))

console.log(aGroup.delete(8))



console.log(bGroup.from(10,25))