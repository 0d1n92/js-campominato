var level=document.getElementsByName("level");
var overflow=document.getElementById('container_overflow');
 var container=document.getElementById('container');
var max;
var rowlevel;
for(var i = 0; i < level.length; i++){
  (function(index) {
    level[index].addEventListener("click", function() {
       console.log("Clicked level index: " + index);
        overflow.classList.add("opacity");
        container.style.padding="100px";

        switch (index) {
          case index=1:
            max=80;
            rowlevel=8;
            break;
          case index=2:
            max=50;
            rowlevel=5;
            break;
          case index=0:
            max=100;
            rowlevel=10;
            break;
        }
        main(max,rowlevel);
        timer();

    })
  })(i);

}

function main(max, rowlevel){

var MaxAttemps=max-16;
//stampa righe
console.log(max);
var container=document.getElementById('container');
var rows=document.getElementsByClassName('row');
container.innerHTML="<div id='timer'></div>+   <h2 id='score'></h2>"
var iterazioni=0;
for (var i = 0; i < rowlevel; i++ ) {
  container.innerHTML+="<div class='row'></div>";
}
var divNumber="";
//creami 10 box
for(var i=0; i< 10; i++) {
  divNumber+="<div class='box'>"+"<div class='overlay'></div>"+"<div class='value'></div>"+"</div>";
}

for (var j = 0; j < rows.length; j++ ) {
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

    continue;

  } else {

  bootNumbers.push(bomb);
  }
}
//stampa bombe e numero caselle
var value=document.getElementsByClassName("value");
for (var i = 0; i < value.length; i++) {
    value[i]=parseInt(value[i].innerHTML=0);
}

for(var x=0; x< value.length ; x++){
  var boxNumbers=x+1;
  var bombImg="<img src='img/iconbomb.png' class='bomb'></img>"
  if (alreadyexist(boxNumbers,bootNumbers)){
    //errore se (x bombs=10) (x+1=11 array[11]=1] ma non esiste bomba
  if (value[x+1]!=undefined && value[x-1]!=undefined && value[x+9]!=undefined && value[x-9]!=undefined && value[x+10]!=undefined && value[x-10]!=undefined && value[x+11]!=undefined && value[x-11]!=undefined ){
      value[x+1].innerHTML=parseInt(value[x+1].innerHTML, 10)+1 || bombImg;
      value[x-1].innerHTML=parseInt(value[x-1].innerHTML, 10)+1 || bombImg;
      value[x+9].innerHTML=parseInt(value[x+9].innerHTML, 10)+1|| bombImg ;
      value[x-9].innerHTML=parseInt(value[x-9].innerHTML, 10)+1 || bombImg;
      value[x+10].innerHTML=parseInt(value[x+10].innerHTML, 10)+1 || bombImg;
      value[x-10].innerHTML=parseInt(value[x-10].innerHTML, 10)+1 || bombImg;
      value[x+11].innerHTML=parseInt(value[x+11].innerHTML, 10)+1 || bombImg;
      value[x-11].innerHTML=parseInt(value[x-11].innerHTML, 10)+1 || bombImg ;
  }
  value[x].innerHTML= bombImg;
  ;}


}

//visualizza bombe
var overlay= document.getElementsByClassName("overlay");
var changeCounter=0;
for(var i = 0; i < overlay.length; i++) {
  (function(index) {
    overlay[index].addEventListener("click", function() {
       console.log("Clicked index: " + index);
        overlay[index].classList.add("opacity");
        var clicked=index+1;
        console.log(clicked);
        if (alreadyexist(clicked,bootNumbers)){
          alert("hai perso! con "+changeCounter+" tentativi coretti");
      }else {
        changeCounter++;
      }
      document.getElementById('score').innerHTML="Punteggio: "+changeCounter;
    })

  })(i);
}
}


//timer
// function timer(){
// var seconds = 60;
// var minutes=1;
// var timer=document.getElementById('timer');
// (function countdown() {
//     timer.innerHTML = minutes +":"+ seconds + ' second' +  (seconds == 1 ?  '' :  's');
//     if(seconds --> 1 ){ setTimeout(countdown, 1000);
//
//     }else if (minutes --> 0){
//      setTimeout(countdown,6000);
//    }
//
//
//
// })();
// }
function timer() {
 var displayTime=document.getElementById('timer');
  var duration = 60* 2;
    var timer = duration, minutes, seconds;
    var interval= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayTime.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else if (timer==0){
          clearInterval(interval);
          alert("hai perso!");

        }

    }, 1000);
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
