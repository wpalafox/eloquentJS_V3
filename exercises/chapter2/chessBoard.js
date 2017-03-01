/*

Write a program that creates a string that represents an 88 grid, using new-
line characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this: 

# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #


When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting a
grid of the given width and height.

*/  

/*
Pseudocoding 

1. create a line 
2. create the hashes and blanks
3. console.log the entire board



*/

var size = 8;

var board = "";

for(i=1; i<=size; i++){    //The outer loop produces every row 
 
	 for(j=0; j< size;j++){
		if((i+ j)%2== 0)
		  board += " ";
		else
		  board += "#";
     }
	 board += "\n";   //This new line character separates the rows once all of the hashes and blanks are printed
}
console.log(board);
