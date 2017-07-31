var parFirst = document.getElementById('parFirst');
console.log(parFirst);

//po klasie
var link = document.getElementsByClassName('link');
console.log(link);

//drugi link z wszystkich dostępnych
var drugiLink = link[1];
console.log(drugiLink);

for(var i=0; i<=link.length;i++)
{
   var drugiLink = link[1];
    console.log(drugiLink); 
}

//po tagu HTML
var linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);

//po tagu parFirst
var linki2 = document.getElementById('parFirst').getElementsByTagName('a');
console.log(linki2);

//query selector
var divPoId = document.querySelector('#parFirst');
console.log(divPoId);

var divPoID = document.querySelectorAll('p')
console.log(divPoID);







