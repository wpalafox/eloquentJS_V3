/*Write a function that computes the dominant writing style in a string
of text. Remembeber that each script object has a direction property that
can be 'ltr' or 'rtl' ot 'ttb' (top to bottom). 

The dominant direction is the direction of a majority of the character
that have a script associated with them. The  and countBy
functions defined earlier in the chapter are probably useful here. */
require('./path/to/scripts.js')

/*
  1.Count the character by a criterion based on characterScript 
  2.Filter out the part of the result that refers to uninteresting 
  (script-less) characters.
  3. Finding the direction with the highest character count can be done
  with reduce. If it's not clear how, refer to the example earlier in the 
  chapter, where reduce was used to find the script with the most 
  characters 

*/






 



console.log(dominantDirection("Hello again"))
