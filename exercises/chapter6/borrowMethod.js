/*Earlier in the chapter I mentioned that an object’s hasOwnProperty can be 
used as a more robust alternative to the in operator when you want to ignore 
the prototype’s properties. But what if your map needs to include the word 
"hasOwnProperty"? You won’t be able to call that method anymore because the 
object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own 
property by that name?*/ 


let example = {bob: 43, carlos: 25, hasOwnProperty: true}
let anotherExample = {lilWayne: 33, drake: 31, kanye: 36}

console.log(Object.prototype.hasOwnProperty.call(example, 'bob')); 
console.log(Object.prototype.hasOwnProperty.call(example, 'carlos')); 

console.log(anotherExample.hasOwnProperty("lilWayne"))



