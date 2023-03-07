const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

// Перебір кожного елементу через map
const ingredientsItem = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
});

console.log(ingredientsItem);

ingredientsEl.append(...ingredientsItem);



// Варіант 2
// const ingredientsEl = document.querySelector('#ingredients');
// const itemArray = [];

// // Перебір кожного елементу через forEach
// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   itemArray.push(item);
// })

// console.log(itemArray);

// ingredientsEl.append(...itemArray);
