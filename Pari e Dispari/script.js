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
let min = 1;
let max = 5;
let result;
let isANumberUser;

const btnPlay = document.getElementById('button-play');

//verificherò che sia tra 1 e 5 e che sia un numero 

btnPlay.addEventListener('click', function(){

  const userChoice = document.getElementById('pari-dispari').value.trim();
  console.log(userChoice);
  const userNumber = document.getElementById('user-number').value.trim();
  console.log(userNumber);
  isANumberUser = parseInt(userNumber)

  console.log(isPariDispari(pcRandomNumber(min, max), isANumberUser));
  

})


//function


//random per il pc
function pcRandomNumber(min, max){

  return  Math.floor(Math.random() * (max - min +1) + min );

}


function isPariDispari(num1, num2){

  const sum = num1 + num2;

  if(sum % 2 === 0){
    result = 'pari';
  }else{
    result = 'dispri';
  }

  return `i numeri sono ${num1}, ${num2} la loro somme è ${sum} e la loro somme è ${result}`

}

  
  
  





