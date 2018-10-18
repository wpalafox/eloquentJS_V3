class Group {
  constructor(){

    this.array=[]

  }

  add(num){
    let index = this.array.indexOf(num)
    if(index == -1) this.array.push(num)
    return this.array
  }

  delete(num){
    let index = this.array.indexOf(num); 
    if (index !== -1) this.array.splice(index, 1); 
    return this.array
  }

  has(num){
    let index = this.array.indexOf(num);
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

  [Symbol.iterator](){
    return new GroupIterator(this)

  }


  
}



class GroupIterator {
  /*Should have a property that tracks the current position in the group
  next() 
  Everytime next is called, it checks whether it is done and, if not,
  past the current value and returns it. */
  
  constructor(group){
    this.group = group;
    this.item = 0;

  }

  next(){
    //Checks whether the array has reached the end 
    if(this.item == this.group.array.length){
      return {done: true};
    }else{
    let value = this.group.array[this.item];
    this.item++; 
    return {value, done: false};    //changed 
  }
  }
  
}


for (let value of Group.from(["a","b","c","d"])) {
  console.log(value);

}





let tGroup = Group.from(["m","y"," ","n","a","m","e"])




