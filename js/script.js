//CAMPO MINATO
//Il computer deve generare 16 numeri casuali tra 1 e 100.
//bombs
/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50*/
var level=parseInt(prompt("Insierisci livello"));
switch (level) {
  case 1:
    max=80;
    break;
  case 2:
    max=50;
  default:
    max=100;

}
max-=16;

var bootNumbers=[];
//Il computer deve generare 16 numeri casuali tra 1 e 100.
while(bootNumbers.length < 16 ){
  var numbers= Math.floor(Math.random()*(max-1))+1;
//I numeri non possono essere duplicati.
  if (alreadyexist(numbers,bootNumbers)){

    alreadyexist(numbers,bootNumbers);

  } else {

  bootNumbers.push(numbers);
  }
}


console.log(bootNumbers);


var userNumbers= [];
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var score=0;
while(userNumbers.length < 16 ){
  var message="inserisci numero da"+ "1 a " + (max+=16);
  if (check) message="numero già presente rinserisci un numero da numero da"+ "1 a " + (max+=16);
  var numberUser= parseInt(prompt(message));
//L’utente non può inserire più volte lo stesso numero.
  var check=false;
  if (alreadyexist(numberUser,userNumbers)){

  check=true;

  }else if (alreadyexist(numberUser,bootNumbers)){
    //La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

    alert("hai perso");
    break;

  }else {

    userNumbers.push(numberUser);
    score=userNumbers.length;
  }

}
console.log(userNumbers);
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero
console.log(score);






//funzioni di controllo
//I numeri non possono essere duplicati.
function alreadyexist(numeroinserito, array) {
  var trovato=false;
  for (var i = 0; i < array.length; i++) {
    if(array[i]==numeroinserito){
      return trovato=true;
    }
  }
  return trovato;
}
