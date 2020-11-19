//CAMPO MINATO
/*Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var minBot=1;
var maxBot=100;
var botRandomNumber= fxBotRadom(minBot,maxBot);
console.log(botRandomNumber);
fxControlDuplicate(botRandomNumber,minBot, maxBot);
console.log(botRandomNumber);

function fxBotRadom(min,max) {
  var array=[];
  for (var i = 0; i < 16; i++) {
    array[i]=Math.floor(Math.random()*(max-min)+min);
  }
  return array;
}


//funzioni di controllo
function fxControlDuplicate(arg1,min,max) {
  //controllo dupplicati
  arg1.sort();
  for (var j = 0; j < arg1.length; j++) {
    while (arg1[j]== arg1[j-1]) {
      arg1[j]=Math.floor(Math.random()*(max-min)+min);
      arg1.sort();
    }
  }
  return arg1;
}
