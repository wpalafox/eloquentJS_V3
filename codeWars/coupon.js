//Coupon Code Challenge

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

let a = parseInt(exMonthNumber);
console.log(a);



//Extract Expiration Year from String 
//const expirationDate = 'October 1, 2014';
EXY = [];
rvrsArry = [];
let exYearNumber;


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

	exYearNumber = yearNum;
}


//Run find year functions 
seeYear(expirationDate);
reverseArray(EXY);
let b = exYearNumber;
console.log(b);
let exDayAndYear = a + "/" + b;
//Expiration Month + Year
console.log(exDayAndYear);


//Retrieve the current day"
	var today = new Date();
	//var dd = today.getDate();
	var mm = today.getMonth();
	var yy = today.getFullYear();
	
//Change the expiration date to the dd/mm/yyyy format

	var Day = mm+"/"+yy;

	console.log(Day);


//Compare the expiration date and the current date 





