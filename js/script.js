//CAMPO MINATO
/*
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.*/
//Il computer deve generare 16 numeri casuali tra 1 e 100.


//Il computer deve generare 16 numeri casuali tra 1 e 100.
//bombs

var bootNumbers=[];
//Il computer deve generare 16 numeri casuali tra 1 e 100.
while(bootNumbers.length < 16 ){
  var numbers= Math.floor(Math.random()*(100-1))+1;
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
  var numberUser= parseInt(prompt("inserisci numero"))
//L’utente non può inserire più volte lo stesso numero.
  if (alreadyexist(numberUser,userNumbers)){

    alreadyexist(numberUser,userNumbers);

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
console.log(score);


//Il computer deve generare 16 numeri casuali tra 1 e 100.




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
