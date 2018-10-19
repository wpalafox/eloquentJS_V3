/*
An isogram is a word that has no repeating letters, consecutive or non-
consecutive. Implement a function that determines whether a string that contains
 only letters is an isogram. Assume the empty string is an isogram. Ignore
  letter case.
*/


function isIsogram(str){

  for(i=0; i< str.length; i++){
    array=[]
    if(array.length==0){
      array.push(str[i])
    }else if(array.includes(str[i])){
      return false

    }else{
      array.push(str[i])

    }




  }


return true 



}
