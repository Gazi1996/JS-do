"use strict";
//alert();
var znacznik = document.getElementById('pierwszy').innerHTML;
console.log(znacznik);

znacznik+=" Podmieniony tekst";
console.log(znacznik);

document.getElementById('pierwszy').innerHTML = '<strong>Napis w Strong</strong>';

document.getElementById('pierwszy').innerText = '<strong>Napis w strong</strong>';

function weryfikuj()
{
	var test = document.getElementById('test').value;
	if(test=="")
	{
		document.getElementById('error').innerHTML = "Uzupełnij to pole";
		//podmiana stylu css
		
		document.getElementById('test').style.borderColor = "red";
	}
}

//dodawanie / podmiana atrybutu
var link = document.getElementsByClassName('link')[0];
link.href = "http://wp.pl";

//podmiana klasy CSS
link.className="link1";





