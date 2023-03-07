const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', handleInput);

function handleInput(event) {
  outputName.textContent = event.currentTarget.value;
  
  if (outputName.textContent === "") {
    return outputName.textContent = 'Anonymous';
  };
};





// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// const handleInput = (event) => {
//   outputName.textContent = event.currentTarget.value;
  
//   if (outputName.textContent === "") {
//     return outputName.textContent = 'Anonymous';
//   };
// };

// inputName.addEventListener('input', handleInput);
