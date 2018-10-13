
function reverseString(str){
  let output=[]
  
  for(i=str.length-1;i>=0;i--){
    output.push(str[i])
    
  
  }
  
  return output.join("").toString()
  /*By default the .toString() method of an array will use commas 
  as it's delimiter. Use the join method, joins all elements 
  of an array (or an array-like object into a string and returns 
  this string*/
}



console.log(reverseWords("The quick brown fox jumps over the lazy dog."))
console.log(reverseWords("apple"))
console.log(reverseWords('a b c d'))
console.log(reverseWords('double  spaced  words'))



//Codewars solution 

function reverseWords(str){
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');

  }).join(' ');

}


console.log(reverseWords("somthing test"))

//Source
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split