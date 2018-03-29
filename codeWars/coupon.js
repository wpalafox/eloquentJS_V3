//Coupon Code Challenge


function checkCoupon(argument){

//Retrieve the current day
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yy = today.getFullYear();

	var Day = mm+"/"+dd+"/"+yy;

	console.log(Day);
//Change the expiration date to the dd/mm/yyyy format

//Extract the expiration Month and convert to corresponding number
	expirationDate = 'October 1, 2014';
	str = expirationDate;

	EMM = str.charAt(0) +  str.charAt(1) + str.charAt(2)

	console.log(eMM);


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
	console.log(NEMM);

//Extract Expiration Year
expirationDate = 'October 1, 2014';

for(i=expirationDate.length;i>expirationDate.length-4;i--){

      EXY = [];
      EXY.push(expirationDate[i]);


  }
console.log(EXY)

valueTest = parseInt(expirationDate[14]);

console.log(valueTest);
VM2136:3 4




}
