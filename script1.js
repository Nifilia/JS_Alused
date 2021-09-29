//const's for colors
const oddLi = document.querySelectorAll("li:nth-child(odd)");
const evenLi = document.querySelectorAll("li:nth-child(even)");
//background color change
oddLi.forEach(function(li){
	li.style.background = "black";
})
evenLi.forEach(function(li){
	li.style.background = "white";
})
//text color change
oddLi.forEach(function(li){
	li.style.color = "white";
})
evenLi.forEach(function(li){
	li.style.color = "black";
})


//
let val;
const list = document.querySelector("ul");
const listItem = document.querySelector("li:first-child");

val = list;
val = listItem;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

val = list.children;
val = list.children[1];
list.children[1].textContent = "Study C++";

list.children[2].children[0];
list.children[2].children.id = "test-id";

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);