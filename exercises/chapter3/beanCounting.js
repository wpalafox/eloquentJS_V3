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


//B counting function
function countBs(string){
	count = 0;
	for(i =0; i < string.length; i++){
		if(string.charAt(i) == "B"){
			count++
		}
	}
	  return count;
}


//Character counting function
function countChar(string, char){
	count = 0;
	for(i =0; i < string.length; i++){
		if(string.charAt(i) == char){
			count++
		}
	}
	 return count;

}


//Author Solution

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  		return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

//Very similar to my approach with the exception of the countBs function
//The countBs function expertly reprocesses the countChar function for its own purpose










