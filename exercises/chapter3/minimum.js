
function min(number1,number2){
  result = 0;

  if(number1 > number2){
    result = number2;
    console.log(result);
  }else if(number1 < number2){
    result = number1;
    console.log(result);

  }else{
    console.log(number1+" and "+number2+" are equal")
  }

}
