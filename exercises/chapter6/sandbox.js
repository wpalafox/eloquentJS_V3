var someString = 'hi';
typeof someString[Symbol.iterator];     


let iterator = someString[Symbol.iterator]();
iterator + '';                               // "[object String Iterator]"
 
console.log(iterator.next());                             // { value: "h", done: false }
console.log(iterator.next());                             // { value: "i", done: false }
console.log(iterator.next());    