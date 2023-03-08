function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.body;

const handleClick = () => {
  let randomHexColor = getRandomHexColor();

  spanColor.textContent = randomHexColor;
  bodyEl.style.backgroundColor = randomHexColor;
};

changeColorBtn.addEventListener('click', handleClick);




// Варіант 2
// const spanColor = document.querySelector(".color");
// const changeColorBtn = document.querySelector(".change-color");
// const bodyEl = document.querySelector("body");

// changeColorBtn.addEventListener("click", () => {
//   let randomHexColor = getRandomHexColor();

//   spanColor.textContent = randomHexColor;
//   bodyEl.style.backgroundColor = randomHexColor;
// });
