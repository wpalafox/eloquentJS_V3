/*Write a program that finds the summation of every number
between 1 and num. The number will always be a positive integer greater than 0. */





var summation = function (num){
  curr=0
  for(i=1;i<=num;i++){
      curr+=i


  }
  return curr


}


console.log(summation(8))
