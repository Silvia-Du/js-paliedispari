/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/
let userPariDispari = 'pari'; //prompt
let pcNumber;
let min = 1;
let max = 5;

let userNumber = 5; //prompt
//verificherò che sia tra 1 e 5 e che sia un numero 

function pcRandomNumber(min, max){

  return  Math.floor(Math.random() * (max - min +1) + min );

}