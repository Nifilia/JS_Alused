//Variables
//var, let, const

//Declaration
let name1 = "Andero Ilmar Kõre";
//In use
console.log(name1);
//let in use
name1 = "Mihhail Karutin";
console.log(name1);

//Allowed characters in name creation - Characters, numbers, signes
//Can not start with number
let $ = 'Dollar';
console.log($);

//Having fun with constants
//const can not change value
const name2 = "Andero Ilmar Kõre";
console.log(name2);

//Creating array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

//Creating object
const person = {
	name: "Kadi",
	age: 20,
};
person.name = "Kati";
person.age = 15;
console.log(person);