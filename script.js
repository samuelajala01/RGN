const min = document.querySelector('#min-value').value;
const max = document.querySelector('#max-value').value;
const btn = document.querySelector('#generate');
const result = document.querySelector('.result');


const randNum = Math.floor(Math.random() * (max - min + 1) + min )


btn.addEventListener('Click', (e) =>{
  result.innerHTML = "hello there"
  console.log('Logged')
  e.preventDefault();
})


