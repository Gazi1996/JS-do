"use strict";
//alert();

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

//parentElement lub parentNode - zwraca rodzica tego elementu
console.log(pierwszyDiv.parentElement);

//lista dzieci danego dziecka
console.log(pierwszyDiv.childNodes);

console.log("Child nodes: "+ pierwszyDiv.childNodes[0]);

//dzieci danego węzła, ale tylko html
console.log(pierwszyDiv.children);

var wybrane=pierwszyDiv.children;
console.log(wybrane[0]);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

//poprzedni element danego węzła , który ma tego samego rodzica

var pierwszeChild = pierwszyDiv.childNodes[5];
console.log(pierwszeChild);
console.log(pierwszeChild.nextSibling);
console.log(pierwszeChild.previousSibling);






