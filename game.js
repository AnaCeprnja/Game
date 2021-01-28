/* const items go here
crib, score, and yoda */

// set timer 

// pick random crib for yoda to pop out of
//holes node list

let cribs = document.querySelectorAll('.crib'),
amountOfPoints = document.querySelector('.score'),
yodas = document.querySelectorAll('.yoda');



let yodaCrib,
playerDone = false,
score = 0;
loss = 0;
win = 0; 


// function minMax(min, max) {
//   const min = 0,
//     max = 1;
//   let rand = Math.floor(Math.random() * (max - min + 1) + min); 
//   console.log('starting' + rand );
//   setTimeout(myFunction, rand * 1000);



function minMax(min, max){
return Math.round( Math.random() * (max - min) + min);
}

function anyCrib(cribs){
const idx = Math.floor(Math.random() * cribs.length),
      crib = cribs[idx];



//function didYouWin (score) {
  document.getElementById ("score");
  if (score >= 10) {
    window.alert("You won!");
  } else{
   window.alert ("You lost!");}}

 