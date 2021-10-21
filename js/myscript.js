// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere 

let km = prompt ("How many km do you want to travel?");

console.log(km);

//e l’età del passeggero.

let age = prompt ("How old are you?");

console.log(age);


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticket = 0.21 * km;
let regular;

// va applicato uno sconto del 20% per i minorenni
let discount20 = ticket / 100 * 20;
let minors;


// va applicato uno sconto del 40% per gli over 65.
let discount40 = ticket / 100 * 40;
let over65;

let element = document.getElementById("ticketPrice");


if(age <= 18) {
    minors = ticket - discount20 ;
    element.innerHTML = `your ticket is ${minors} &euro;`;  
} else if(65 <= age) {
    over65 = ticket - discount40;
    element.innerHTML =`your ticket is ${over65} &euro;`;   
} else {
    regular = ticket;
    element.innerHTML = `your ticket is ${regular} &euro;`;   
}



console.log(ticket)
console.log("ticket price for underage", minors);
console.log("ticket price for over 65", over65);
console.log("ticket price for adult", regular);


// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
