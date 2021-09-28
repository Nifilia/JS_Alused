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
//Array to number
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

//Absolute mess
const name4 = "Andero Ilmar ";
const surname = "Kõre";
const age2 = "17";
const text = "Tere! Olen Andero";
const tag = "Tarkvaraarendus, Ajalugu ja Tehnika";
let val2;

//Concatenation
val2 = name + " " + surname;
//Append
val2 = "Andero Ilmar ";
val2 += surname;
val2 = text + " Minu tegevusalad on " + tag;
//Change case / name messing
val2 = name.toUpperCase();
val2 = surname.toLowerCase();
//When found
val2 = surname[0];
val2 = surname.indexOf("a");
val2 = surname.lastIndexOf("õ");
//When char and length of object
val2 = surname.charAt(2);
val2 = surname.charAt(surname.length - 1);
//Slicing and chainging the length
//val2 = surname.subString(0, 4);
val2 = surname.slice(0, 4);
val2 = surname.slice(-3);
//Spliting to make nicer
val2 = tag.split(",");
console.log(val2);

//ES 5
const name5 = "Andero Ilmar Kõre";
const age3 = "17";
const job = "Student";
const city = "Tartu";

let html1;

html1 = "<ul>" +
			"<li>" + name5 + "</li>" +
			"<li>" + age3 + "</li>" +
			"<li>" + job + "</li>" +
			"<li>" + city + "</li>" +
		"</ul>";

console.log(html1);
document.body.innerHTML = html1;

//ES 6
let html2 = 
`<ul>
	<li>name5: ${name5}</li>
	<li>age3: ${age3}</li>
	<li>job: ${job}</li>
	<li>city: ${city}</li>
</ul>`

console.log(html2);
document.body.innerHTML = html2;

//Array but advanced
const numbers1 = [43, 56, 21, 79, 32];
const numbers2 = new Array(22, 98, 9, 21, 65);
const fruits = ["Strawberry", "Apple", "Orange", "Cherry", "Pear"];
const mixed = [24, "Sõnad", true, undefined, null, {a:1, b:2}, new Date()];

let val3;
//Indexing
val3 = numbers1.length;
val3 = Array.isArray(numbers1);
val3 = numbers1[3];
val3 = numbers2[0];

numbers1[2] = 100;
//Adding / subtracting all that good stuff
val3 = numbers1.indexOf(36);
numbers1.push(250);
numbers1.unshift(125);
numbers1.pop();
numbers1.shift();

console.log(numbers1);
console.log(typeof numbers1);

console.log(numbers2);
console.log(typeof numbers2);

console.log(fruits);
console.log(typeof fruits);

console.log(mixed);
console.log(typeof mixed);

console.log(val3);
console.log(numbers1);

//numbers1.splice(1, 3);
numbers1.reverse();
//Even more things with arrays
val3 = numbers1.concat(numbers2);
val3 = fruits.sort();
val3 = numbers1;

console.log(val3);
//Sorting with functions
val3 = numbers1.sort(function(x, y){
	return x - y;
});
val3 = numbers1.sort(function(x, y){
	return y - x;
});

console.log(val3);

//Creating a person again
const sapiens = {
	firstName: "Kadi",
	lastName: "Tamm",
	sapAge: "36",
	email: "kadli.tamm@gmail.com",
	hobbies: ["Music", "Sport"],
	address: {
		sapCity: "Tallinn",
		county: "Harjumaa",
	},
	getBirthYear: function(){
		return 2021 - this.sapAge;
	},
};

let val4;

/*val4 = sapiens;
val4 = sapiens.firstName;
val4 = sapiens["lastName"];
val4 = sapiens.sapAge;
val4 = sapiens.hobbies[1];
val4 = sapiens.address["sapCity"];
val4 = sapiens.getBirthYear();
console.log(sapiens);

const multiSapiens = [
	{name: "Kadi", age: 36},
	{name: "Kadi", age: 38},
	{name: "Kadi", age: 23},
]

val4 = multiSapiens;
for(let i = 0; i < multiSapiens.length; i++){
	console.lop(multiSapiens[i].name);
}
*/
//Time things
let val5;

const today2 = new Date();
val5 = today.getMonth();
val5 = today.getDate();
val5 = today.getDay();
val5 = today.getFullYear();
val5 = today.getHours();
val5 = today.getMinutes();
val5 = today.getSeconds();
val5 = today.getMilliseconds();
val5 = today.getTime();

let birthDay = new Date("09/27/2001 11:00:00");
birthDay = new Date("September 27 2001");

birthDay.setMonth(2);
birthDay.setDate(12);
birthDay.setFullYear(2002);
birthDay.setHours(11);
birthDay.setMinutes(25);
birthDay.setSeconds(50);

console.log(birthDay);
console.log(val5);
//Statments
const id = 100;

if(id == 100){
	console.log("True");
}else{
	console.log("False");
}

//testId
let testId;

if(typeof testId !== "undefined"){
	console.log(`id is ${testId}`);
}else{
	console.log("id missing");
}

//Advanced if's?
if(id > 100){
	console.log(`id on ${id} - larger then 100`);
}else{
	console.log(`id on ${id} - smaller or equal to 100`);
}

const colour = "red";
if(colour == "Red"){
	console.log("Stop");
}else if(colour == "Yellow"){
	console.log("Attention")
}else if(colour == "Green"){
	console.log("GO");
}else{
	console.log("Colour is not accepted");
}

const name6 = "Kadi";
const age4 = 15;

if(age4 > 0 && age4 <= 12){
	console.log(`${name6} is a kid`);
}else if(age4 > 12 && age <= 18){
	console.log(`${name6} is a tennager`);
}else{
	console.log(`${name6} is an adult`);
}

if(age < 18 || age > 65){
	console.log(`${name6} can not participate`);
}else{
	console.log(`${name6} can participate`);
}

if(id === 100){
	console.log("Everything is correct");
}else{
	console.log("Everything is not correct");
}
//Switches
const color = "Green";

switch(color){
	case "Red":
		console.log("Stop");
		break;
	case "Yellow":
		console.log("Attention");
		break;
	case "Green":
		console.log("Go");
		break;
	default:
		console.log("Color is not accepted");
		break;
}

function getDayString(num){
	var day;
	switch(num){
		case 0:
			day = "Pühapäev";
			break;
		case 1:
			day = "Esmaspäev";
			break;
		case 2:
			day = "Teisipäev";
			break;
		case 3:
			day = "Kolmapäev";
			break;
		case 4:
			day = "Neljapäev";
			break;
		case 5:
			day = "Reede";
			break;
		case 6:
			day = "Laupäev";
			break;
	}
	return day;
}

theDate = new Date();
console.log("Täna on", getDayString(theDate.getDay()));
//Loops
//For Loop
console.log("for loop starts")
for(let i = 0; i < 10; i++){
	if(i == 5){
		break;
	}
	console.log(i);
};
//While loop
console.log("While loop starts");
let i = 0;
while(i < 10){
	console.log(i);
	i++;
}
//do while loop
console.log("do while loop starts");
j = 0;
do{
	console.log(j);
	j++;
}while(j < 10);
//Loops and arrays
i = 0;
console.log("Loops and arrays");
const cars = ["Ford", "Audi", "Volkswagen", "BMW"];
console.log(cars);
for(let l; l < cars.length; l++){
	console.log(cars[l]);
};
//forEach
console.log("forEach starts");
cars.forEach(function(element, index, array){
	console.log(`cars[${index}] = ${element}`);
});
//forEach arrow funtion
console.log("forEach arrow function starts");
cars.forEach((element, index)=>{
	console.log(`cars[${index}] = ${element}`);
});
//loops and Objects
console.log("Loops and objects starts");
const human = {
	firstName1: "Katri",
	surname1: "Tammepuu",
	Age5: "27"
};
//for in loop
for(let key in human){
	console.log(`${key} = ${human[key]}`);
};