

let btn = document.getElementById('generate');
// let min = document.getElementById('min-value');
let min = 3;
// let max = document.getElementById('max-value');
let max = 10;
let clearbtn = document.getElementById('clear-btn');

function getRandomNumber(a, b){
  return Math.floor(Math.random() * (b - a + 1) + a );
}


btn.onclick = () =>{
  let min = document.getElementById('min-value').value;
  let max = document.getElementById('max-value').value;

  let result = getRandomNumber(min, max);
  console.log(result);

  e.preventDefault();
}


