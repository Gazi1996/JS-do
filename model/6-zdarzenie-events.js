'use strict';
function alarm(event)
{
    //wstrzymanie domyślnych zachowań przeglądarki  
    event.preventDefault();
    console.log('Link pierwszy został kliknięty');  
}

//wywołanie zdarzenia przez HTML
var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

//rejestrowanie zdarzeń za pomocą metody addEventListener()

var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);

function klikHeader(event)
{
    event.stopPropagation();
    console.log('Kliknieto H1');
}

function klikPierwszy()
{
    console.log('Kliknięto w div');
}