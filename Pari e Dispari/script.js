/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input
*/


let message;



//verificherò che sia tra 1 e 5 e che sia un numero 

document.getElementById('button-play').addEventListener('click', function(){

  //raccolgo dati dall'utente e li salvo
  const userChoice = document.getElementById('user-pari-dispari').value.trim();
  console.log(userChoice);
  const userNumber = document.getElementById('user-number').value.trim();
  console.log(userNumber);
  const isANumberUser = parseInt(userNumber);
  const pcNumber = RandomNumGenerator(1, 5);
  console.log('num pc',pcNumber);

  const sum = pcNumber + isANumberUser;

  if(isPariDispari(sum) === userChoice){
    message = `Hai scelto ${userNumber} &  "${userChoice}" <br> l'IA ha scelto ${pcNumber} quindi la somma è ${sum} , è ${isPariDispari(sum)} hai vinto!`;
  }else{
    message = `Hai scelto ${userNumber} &  "${userChoice}" <br>  l'IA ha scelto ${pcNumber} quindi la somma è ${sum}, è ${isPariDispari(sum)} hai PERSOOOO!`;
  }

  document.getElementById('output').innerHTML = message;
})



//function


//random per il pc
function RandomNumGenerator(min, max){

  return  Math.floor(Math.random() * (max - min +1) + min );

}

//function pari dispari 
function isPariDispari(number){

  if(number % 2 === 0) return 'pari';
  return 'dispari';

}

  
  
  





