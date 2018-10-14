class Vec {
  constructor(x, y){
  	this.x = x;
  	this.y = y; 
  }
  
  plus(vector){
    this.x=this.x+vector.x;
    this.y=this.y+vector.y;  
    return this;


  }

  minus(vector){
    this.x=this.x-vector.x;
    this.y=this.y-vector.y; 
    return this;  
  }
  
  get xy(){
  	return "("+this.x+","+this.y+")"
  }

  get length(){
    return Math.sqrt((this.x*this.x)+(this.y*this.y))

  }




}


let testVec = new Vec(1,2)

console.log(testVec.xy)
console.log(testVec.length)

console.log(new Vec(1,2).plus(new Vec(2,4)));
console.log(new Vec(1,2).minus(new Vec(2,4)));

