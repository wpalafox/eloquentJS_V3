/*
An isogram is a word that has no repeating letters, consecutive or non-
consecutive. Implement a function that determines whether a string that contains
 only letters is an isogram. Assume the empty string is an isogram. Ignore
  letter case.
*/
//Idea, take the string and lowercase everything, then evaluate
//Pass
function isIsogram(str){

  let string = str.toLowerCase()
  console.log(string)
  arr=[]

  for(i=0; i< string.length; i++){
    if(arr.includes(string[i])==false){
      arr.push(string[i])
    }else if(arr.includes(string[i])){
      return false
    }
}

console.log(arr)
return true

}

//Codewars soltution
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}






isIsogram("mooOaaaAAAbbbBBBcccCCCe")
