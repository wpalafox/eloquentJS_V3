//Write a loop that makes seven calls to console.log to output the following

/*

#
##
###
####
#####
######
#######

*/

//My solution
for( i = 0; i < 8; i++){ 
   
		 if(i<2){ 
		 	console.log('# \n')
		 }

		else if(i<3){
			console.log('## \n')
		 }

		else if(i<4){
			console.log('### \n')
		 }

		else if(i<5){
			console.log('#### \n')
		 }

		else if(i<6){
			console.log('##### \n')
		 }


		else if(i<7){
			console.log('###### \n')
		 }

		else if(i<8){
			console.log('####### \n')
		 }

}

//Author's solution

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

//It's interesting how the for loop lacks brackets, yet it functions perfectly. 
//Looping without an i variable represents a whole new world for me. 
//I wonder why/how the line breaks into a new one without "\n"