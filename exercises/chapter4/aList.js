/*Prompt: Objects, as generic blobs of values, can be used to build all sorts of 
data structures. A common data structure is the list (not to be confused 
with array). A list is a nested set of objects, with the first object holding 
a reference to the second, the second to the third, and so on. */ 



/*
Write a function arrayToList that builds up a list structure like the one 
shown when [1, 2, 3] as argument. 
*/ 
//Building a list is easier when done back to front 
//My solution (That wouldn't work)

function arrayToList(array){
  let list={};
  
  for(let i=array.length; i>0 ;i--){
  	
  	list.assign('rest': {'value': array[i], 'rest': null}) 
  
  }
  
  return list;

}

/*-------------------------------------------------------------------------*/
//Author solution 
/*First difference, the author let list equal null.  And then
assigns the list the object value */


function arrayToList(array){
  let list = null;
  for (let i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}


arrayToList([1,2,3])

/*Also write a listToArray function that 
produces an array from a list.  Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to
the front of the input list, and nth, which takes a list that adds the 
element to the fron of the input list, and nth.*/










