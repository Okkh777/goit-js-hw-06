const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  const listElements = document.createElement('li');
  console.log(listElements);
  listElements.classList.add('item');
  listElements.textContent = ingredient;
  listIngredients.append(listElements);
}