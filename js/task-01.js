const categoriesItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length} `);

// Перебирання кожного елемента з .item forEach
categoriesItem.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});



// Варіант 2
// const categoriesItem = document.querySelectorAll('.item');
// console.log('Number of categories: ', categoriesItem.length);

// Перерибарання кожного елемента з .item for
// for (let i = 0; i < categoriesItem.length; i += 1) {
//   console.log('Category: ', categoriesItem[i].querySelector('h2').textContent);
//   console.log('Elements: ', categoriesItem[i].querySelectorAll('li').length);
// };

// Перерибарання кожного елемента з .item forEach
// categoriesItem.forEach((item) => {
//   console.log("Category: ", item.firstElementChild.textContent);
//   console.log("Elements: ", item.lastElementChild.children.length);
// });
