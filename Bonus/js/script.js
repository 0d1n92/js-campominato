var level=parseInt(prompt("Insierisci livello"));
switch (level) {
  case 1:
    max=80;
    break;
  case 2:
    max=50;
    break;
  default:
    max=100;

}
var MaxAttemps=max-16;
//stampa righe
var container=document.getElementById('container');
var rows=document.getElementsByClassName('row');
var iterazioni=0;
for (var i = 0; i < 10; i++ ) {
  container.innerHTML+="<div class='row'></div>";
}
var divNumber="";
//creami 10 box
for(var i=0 ;i<10; i++) {
  divNumber+="<div class='box'>"+"<div class='overlay'> </div>"+"</div>";
}

for (var j = 0; j < 10; j++ ) {
rows[j].innerHTML += divNumber;
}
var box=document.getElementsByClassName('box');
//BOMBE
var bootNumbers=[];
//Il computer deve generare 16 numeri casuali tra 1 e 100.
while(bootNumbers.length < 16 ){
  var bomb= Math.floor(Math.random()*(max-1))+1;
//I numeri non possono essere duplicati.
  if (alreadyexist(bomb,bootNumbers)){

    alreadyexist(bomb,bootNumbers);

  } else {

  bootNumbers.push(bomb);
  }
}
//stampa bombe e numero caselle
for(var x=0; x< box.length ; x++){
  var boxNumbers=x+1;
  if (alreadyexist(boxNumbers,bootNumbers)){
  box[x].innerHTML+="A";
}
}
console.log(bootNumbers);
//visualizza bombe
var overlay= document.getElementsByClassName("overlay");
for(var i = 0; i < overlay.length; i++) {
  (function(index) {
    overlay[index].addEventListener("click", function() {
       console.log("Clicked index: " + index);
        overlay[index].classList.add("opacity");
        var clicked=index+1;
        if (alreadyexist(clicked,bootNumbers)){
          alert("hai perso!");
      }
    })
  })(i);
}

//CONTROLLI
function alreadyexist(n, array) {
  var find=false;
  for (var i = 0; i < array.length; i++) {
    if(array[i]==n){
      return find=true;
    }
  }
  return find;
}
