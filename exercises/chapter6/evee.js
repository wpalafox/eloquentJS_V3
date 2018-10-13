
//Prototypes

let Eevee0 = {
  speak(line){
  	console.log(`This ${this.type} type of Eevee is named ${line}`);
  }
};


let vaporeon = Object.create(Eevee0)
vaporeon.type = "water";
vaporeon.speak("Willy")

function makeEevee(type){
	let eevee = Object.create(Eevee)
	eevee.type = type;
	return eevee; 

}

//Classes

class Eevee {
  constructor(type){
  	this.type = type;
  }
  speak(line){
  	console.log(`The ${this.type} pokemon says '${line}'`); 
  }
}

//New instances of the class Eevee 
let flameon= new Eevee("Fire")
let jolteon= new Eevee("electric")
flameon.speak("hi")
//Adding data to flameon since constructor can only hold functions 
flameon.attack = "Flash Fire!"
flameon.food ="Berries"
console.log(flameon)

jolteon.speak("Thunder!")