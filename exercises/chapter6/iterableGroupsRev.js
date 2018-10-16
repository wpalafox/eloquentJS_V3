class Group{
  constructor(){
    this.members=[] 
  
  }


  add(value){
    //how to see if it's present in this. members 
    if(this.members.indexOf(value) === -1){
    	this.members.push(value)
    }

    return this.members 


  }
  

  delete(value){
    if(this.members.indexOf(value)!== -1){
  /*For this method, the element of the callback must be different 
  from the parameter 'v' versus 'value'*/
      return this.members.filter(v => v !== value )
    }


  }









}




let myGroup = new Group

console.log(myGroup.add("hello"))
console.log(myGroup.add("friend"))

console.log(myGroup.delete("friend"))
console.log(myGroup.delete("hello"))
console.log(myGroup.delete("friend"))