/*

Bean Counting
You can get the Nth character, or letter, from a string by writing "string"
.charAt(N), similar to how you get its length with "s".length. The returned
value will be a string containing only one character (for example, "b"). The
first character has position zero, which causes the last one to be found at po-
sition string.length - 1. In other words, a two-character string has length 2,
and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and re-
turns a number that indicates how many uppercase “B” characters are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.

*/


let countBs = string =>{
  let count=0

  for(i=0;i<string.length;i++){
    if(string[i]==="B"){
      count+=1 
    }
  }
return count


}

console.log(countBs("BBBBBadddd"))



let countChar = (string,char) => {
  let count=0;

  for(let i=0;i<string.length;i++){
    if(string[i]==char){
      count+=1;
    }
    
  }
  return count
}

console.log(countChar("BBBBBadddd","d"))

