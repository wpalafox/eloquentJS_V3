function reverseWords(str){

//first, separate by words, then reverse
let rWords= str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')






return rWords


}




console.log(reverseWords("Hello Again")) 



