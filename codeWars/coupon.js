//Coupon Code Challenge


//Retrieve the current day"
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yy = today.getFullYear();
	
//Change the expiration date to the dd/mm/yyyy format

	var Day = mm+"/"+dd+"/"+yy;

	console.log(Day);

//Extract the expiration Month and convert to corresponding number
const expirationDate = 'July 1, 2014';
let exMonthNumber = [];  

function findMonthNumber(exDate){

	for(i=0;i<3;i++){
		if (expirationDate.startsWith("Jan") === true){

			exMonthNumber.push(01);
		}else if(expirationDate.startsWith("Feb") === true){

			exMonthNumber.push(02);
		}else if(expirationDate.startsWith("Mar") === true){

			exMonthNumber.push(03);
		}else if(expirationDate.startsWith("Apr") === true){

			exMonthNumber.push(04);
		}else if(expirationDate.startsWith("May") === true){

			exMonthNumber.push(05);
		}else if(expirationDate.startsWith("Jun") === true){

			exMonthNumber.push(06);
		}else if(expirationDate.startsWith("Jul") === true){

			exMonthNumber.push(07);
		}else if(expirationDate.startsWith("Aug") === true){

			exMonthNumber.push(08);
		}else if(expirationDate.startsWith("Sep") === true){

			exMonthNumber.push(09);
		}else if(expirationDate.startsWith("Oct") === true){

			exMonthNumber.push(010);
		}else if(expirationDate.startsWith("Nov") === true){

			exMonthNumber.push(11);
		}else if(expirationDate.startsWith("Dec") === true){

			exMonthNumber.push(12);
		}else{console.log("Error!")}
		
		return exMonthNumber
	}
}

findMonthNumber(expirationDate);


//Extract the Expiration Day 
















//Extract Expiration Year from String 
expirationDate = 'October 1, 2014';
EXY = [];
rvrsArry = [];

function seeYear(expirationDate){

	for(i=expirationDate.length-1;i>expirationDate.length-5;i--){
		EXY.push(parseInt(expirationDate[i]));
	}
	
	return EXY;
}

//Reverse the Year and Combine 
function reverseArray(array){
	
	for(var i=array.length-1;i>=0;i--){
		rvrsArry.push(array[i])
	}
	var yearNum = Number(rvrsArry.join(""));  

	return yearNum;
}


//Run Program 
seeYear(expirationDate);
reverseArray(EXY);




















//Old code

/*
function grabMonth(expirationDate){
	
	str = expirationDate;

	EMM = str.charAt(0) +  str.charAt(1) + str.charAt(2)

	

	if(EMM == "Jan"){
		NEMM = 01;
	}else if(EMM == "Feb"){
		NEMM = 02;
	}else if(EMM == "Mar"){
		NEMM = 03;
	}else if(EMM == "Apr"){
		NEMM = 04;
	}else if(EMM == "May"){
		NEMM = 05;
	}else if(EMM == "Jun"){
		NEMM = 06;
	}else if(EMM == "Jul"){
		NEMM = 07;
	}else if(EMM == "Aug"){
		NEMM = 08;
	}else if(EMM == "Sep"){
		NEMM = 09;
	}else if(EMM == "Oct"){
		NEMM = 10;
	}else if(EMM == "Nov"){
		NEMM = 11;
	}else if(EMM == "Dec"){
		NEMM = 12;
	}
	return NEMM;

}

grabMonth(expirationDate);
*/


