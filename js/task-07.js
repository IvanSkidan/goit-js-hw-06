const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handleInput);

function handleInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}





// Варіант 2
// const input = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// input.addEventListener('input', event => {
//   text.style.fontSize = event.target.value + 'px';
// });
