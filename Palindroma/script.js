/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/

const btnStart = document.getElementById('btn-start');


//all'evento del clic:
btnStart.addEventListener('click', function(){

  let message;

  //raccolgo i dati
  const userWord = document.getElementById('user-word').value.trim();

  //invoco la funzione
  const checkWord = isPalindroma(userWord);

  //creo la logica di output;
  if( checkWord ){
    message = `"${userWord}" è palindroma`;
  }else{
    message = `"${userWord}" non è palindroma`;
  }

document.getElementById('output').innerHTML = message;


})



//function

function isPalindroma( word ){

  let checkPalindroma = true;

  for( let i = 0; i < word.length / 2; i++ ){

    let letter = word.charAt( i );
    let fine = word.length - 1;
    console.log(fine, 'fine');

    let letter2 = word.charAt( fine - i );
    console.log(letter, '--', letter2);

    if( letter != letter2 ){
     checkPalindroma = false;
    }
  }

  return checkPalindroma;
}


