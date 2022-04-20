/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/


let checkWord = false;
let message;
let userWord;

//verifico che che sia una sola parola.
while(!checkWord){

  //userWord = prompt('inserisci una parola per vedere se è palindroma').trim();
  //userWord = 'scorrere';
  userWord = 'onorarono';
  const wordCounter = userWord.split(' ');

  if(wordCounter.length != 1) {
    alert('inserisci solo una parola!')
  }else{
    checkWord = true;
  }
}

//se non è divisibile per 2 non può essere palindroma
if(userWord.length % 2){
  message = 'la parola non è palindroma';
}

for(let i = 0; i< userWord.length / 2; i++){
  let letter = userWord.charAt(i);
  console.log(letter, i);
}
console.log('-------');

for(let i = userWord.length -1; i> (userWord.length / 2) -1; i--){
  let halfPastLetter = userWord.charAt(i);
  console.log(halfPastLetter, i);
}



document.getElementById('output').innerHTML = message;

// fino a metà passo le lettere come in un Array, 
// l'altra metà la faccio scorrere al contrario e la salvo in un altro array
// guardo se gli elementi degli array sono uguali.



/*
function isPalindroma(parola){

  return message
}*/