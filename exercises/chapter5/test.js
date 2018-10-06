var materials = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'

];




console.log(materials.map(material => material.length))

materials.forEach(m => console.log(m.toUpperCase()))


let max = (a, b) => a > b ? a : b;

console.log(max(10,66))