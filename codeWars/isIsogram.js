/*
An isogram is a word that has no repeating letters, consecutive or non-
consecutive. Implement a function that determines whether a string that contains
 only letters is an isogram. Assume the empty string is an isogram. Ignore
  letter case.
*/


function isIsogram(str){

  let string = str
  console.log(string.length)
  arr=[]

  for(i=0; i< string.length; i++){

    if(arr.includes(string[i])==false){
      arr.push(string[i])
    }else if(arr.includes(string[i]) || Number.isInteger(parseInt(string[i])))
    {
      return false
    }
}

console.log(arr)
return true

}


isIsogram("mo0se")
