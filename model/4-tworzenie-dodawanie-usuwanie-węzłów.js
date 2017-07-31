/*"use strict";
alert();

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(document.getElementById('parFirst').children[2]);

var newElement=document.createElement('p');
var newElementContent=document.createTextNode('To jest nowy paragraf NODE'); //tekst dla elementu
newElement.appendChild(newElementContent);

istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);

//ustawienia atrybutów
document.getElementById('mojLink').setAttribute("href","https://akademia108.pl");

//po linkach doda znacznik br i usun klase link*/

var alllinks = document.querySelectorAll('a');

for(var i=0; i<alllinks.length; i++)
{
    //console.log(alllinks[i]);
    var br = document.createElement('br');
    var br = document.createElement('br');
    alllinks[i].parentNode.insertBefore(br,alllinks[i].nextSibling); //dodaj br po kazdym linku
    alllinks[i].removeAttribute('class');
}










