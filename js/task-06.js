const inputValid = document.querySelector("#validation-input");
inputValid.addEventListener("blur", handleBlur);

function handleBlur(event) {
  const inputColor = event.currentTarget;
  const inputLength = Number(inputColor.dataset.length);
  if (inputColor.value.length === inputLength) {
    inputColor.classList.remove('invalid');
    inputColor.classList.add('valid');
  } else {
    inputColor.classList.remove('valid');
    inputColor.classList.add('invalid');
  }
};




// const inputValid = document.querySelector('#validation-input');

// inputValid.addEventListener('blur', event => {
//   if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
//     inputValid.classList.remove('invalid');
//     inputValid.classList.add('valid');
//   } else {
//     inputValid.classList.remove('valid');
//     inputValid.classList.add('invalid');
//   }
// });
