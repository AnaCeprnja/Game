/* const items go here
crib, score, and yoda */

// set timer 

// pick random crib for yoda to pop out of
//holes node list

let cribs = document.querySelectorAll('.crib');
let amountOfPoints = document.querySelector('.score');
let yodas = document.querySelectorAll('.yoda');





let count = 0;
let yodaCrib,
playerDone = false,
score = 0;




// function minMax(min, max) {
//   const min = 0,
//     max = 1;
//   let rand = Math.floor(Math.random() * (max - min + 1) + min); 
//   console.log('starting' + rand );
//   setTimeout(myFunction, rand * 1000);

function catchh() {

  count ++;
  score.innerHTML = count;
  console.log('catchh');
}


yodas.forEach(yoda=>yoda.addEventListener('click', catchh));
function minMax(min, max){
return Math.round( Math.random() * (max - min) + min);}

function anyCrib(cribs){
const idx = Math.floor(Math.random() * cribs.length),
crib = cribs[idx];
console.log(crib);

if(crib === yodaCrib){
   return anyCrib(cribs);
}
yodaCrib = crib;
return crib;
}


function playy(){
  amountOfPoints.textContent = 0;
  playerDone = false;
  pop();
  setTimeout(()=> playerDone = true, 30000);
  console.log(`value of score ${score}`)
  
    
  }
function pop(){
const done = minMax(400,600),
      crib =  anyCrib(cribs);

crib.classList.add('up');
setTimeout(()=> {
    crib.classList.remove('up');
    if(!playerDone) pop();
}, done);

}


/*function playy() {
  amountOfPoints.textContent = 0;
  playerDone = false;
  score = 0;
  play.style.visibility = 'hidden';
  pop();
  setTimeout(() => {
    playerDone = true;
    play.innerHTML = 'Try again?'
    play.style.visibility = 'visible';
  }, 60000);
} */

if (score >=10) {
  confirm ("you won!");
} else if (score <=9) {
  confirm ("you lost");
}

function yodaDown(){
  console.log(e);
this.classList.remove('yodaCaught');
}



function catchh(e) {
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  amountOfPoints.textContent = score;
}
play.addEventListener('click', playy);
 






//function didYouWin (score) {
//   document.getElementById ("score");
//   if (score >= 10) {
//     window.alert("You won!");
//   } else{
//    window.alert ("You lost!");}}
