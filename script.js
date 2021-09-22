//Variables
//var, let, const

//Declaration
let name1 = "Andero Ilmar Kõre";
//In use
console.log(name1);
//let in use
name1 = "Mihhail Karutin";
console.log(name1);

//Allowed characters in name creation - Characters, numbers, symboles
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
const person1 = {
	name: "Kadi",
	age: 20,
};
person1.name = "Kati";
person1.age = 15;
console.log(person1);


//Datatypes
//Primitives
//String - text
const name3 = "Andero";
console.log(typeof name3);
//Number
const age = 17;
console.log(typeof age);
//Boolean - True or False
const hasKids = true;
console.log(typeof hasKids);
//Null - Empty object
const planeOwner = null;
console.log(typeof planeOwner);
//Undefined
let undefinedLet;
console.log(typeof undefinedLet);
//Symbol
const sym = Symbol();
console.log(typeof sym);

//Referance objects - can access only by relation/referance
const hobbies = ["Movies", "Music"];
console.log(typeof hobbies);

/*const person2 = {
	name: "Kadia";
	age: 18;
};
console(typeof person2);
*/
//Date object
const today = new Date();
console.log(typeof today);
console.log(today);

//Datatypes
let val;
// -> string
val = String(555);
val = String(6.34);
val = String(5.4);
//Boolean -> string
val = String(true);
val = String(false);
//Object -> string
val = String(new Date());
//Massiv -> string;
val = String([1, 2, 3, 4, 5]);
//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number("5");
//Boolean to Number
val = Number(true);
val = Number(false);
//Null to number
val = Number(null);
//Text to number
val = Number("Tere");
//Massiv to number
val = Number([1, 2, 3, 4, 5]);

//String to number
val = parseInt("100,30");
val = parseFloat("100.30");
console.log(typeof val);
console.log(val);

//Math basic
const num1 = 100;
const num2 = 50;
let result;
result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;
//Math advanced
result = Math.PI;
result = Math.round(2.5);
result = Math.ceil(2.3);
result = Math.floor(2.8);
result = Math.sqrt(64);
result = Math.abs(3);
result = Math.pow(8, 2);
result = Math.min(90, 190, 100, 250, 3000);
result = Math.max(90, 190, 100, 250, 3000);
result = Math.round(Math.random() * 11);
console.log(result);