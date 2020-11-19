//CAMPO MINATO
/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var botRandomNumber= fxBotRadom(1,100);
fxControlDuplicate();

function fxBotRadom(min,max) {
  var array=[5,4,3,3,2];
  for (var i = 0; i < 16; i++) {
    array[i]=Math.floor(Math.random()*(max-min)+min);
  }
  console.log(array);
  array.sort();
  for (var j = 0; j < array.length; j++) {
    while (array[j]== array[j-1]) {
      array[j]=Math.floor(Math.random()*(max-min)+min);
    }
  }
    console.log(array);

}

//funzioni di controllo
function fxControlDuplicate(arg1) {


}
