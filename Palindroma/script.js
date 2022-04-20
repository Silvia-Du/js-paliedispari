/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/


let checkWord = false;

let message;
let userWord;
let halfPastLetter;

//verifico che che sia una sola parola.
while(!checkWord){

  userWord = 'onorarono';// prompt
  const wordCounter = userWord.split(' ');

  if(wordCounter.length != 1) {
    alert('inserisci solo una parola!')
  }else{
    checkWord = true;
  }
}

//assegno una let alla function;
if( isPalindroma( userWord )){
  message = `"${userWord}" è palindroma`;
}else{
  message = 'non è mica palindroma';
}

//function

function isPalindroma( userWord ){

  let checkPali = true;

  for( let i = 0; i < userWord.length / 2; i++ ){

    let letter = userWord.charAt( i );
    let fine = userWord.length - 1;
    console.log(fine, 'fine');

    let letter2 = userWord.charAt( fine - i );
    console.log(letter, '--', letter2);

    if( letter != letter2 ){
     checkPali = false;
    }
  }

  return checkPali;
}


document.getElementById('output').innerHTML = message;
