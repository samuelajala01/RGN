

let btn = document.getElementById('generate');
let min = document.getElementById('min-value');
let max = document.getElementById('max-value');

let clearbtn = document.getElementById('clear-btn');

function getRandomNumber(a, b){
  return Math.floor(Math.random() * (b - a + 1) + a );
}


btn.onclick = (e) =>{
  let min = document.getElementById('min-value').value;
  let max = document.getElementById('max-value').value;
  let display = document.querySelector('.result')

  let result = getRandomNumber(min, max);
  console.log(result);
  if(!result == 0){
    display.innerHTML = `
    <p>${result}</p>`
  }

  e.preventDefault();
}


