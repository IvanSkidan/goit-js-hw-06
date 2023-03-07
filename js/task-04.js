let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value')

const handleClickDecrBtn = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const handleClickIncrBtn = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', handleClickDecrBtn);
incrementBtn.addEventListener('click', handleClickIncrBtn);



// Варіант 2
// let counterValue = 0;

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// });



// Варіант 3
// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// }

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector("#value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener("click", function () {
//   console.log("Клікнули на дикремент");

//   counter.decrement();

//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("Клікнули на інкремент");

//   counter.increment();

//   valueEl.textContent = counter.value;
// });
