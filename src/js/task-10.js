function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const refs = {
  controlEl: document.querySelector(`#controls>input`),
  createButton: document.querySelector(`[data-create]`),
  destroyButton: document.querySelector(`[data-destroy]`),
  boxes: document.querySelector(`#boxes`),
 }

const createBoxes = amount => {
  const elementsToAdd = [];
	for (let i = 0; i < amount; i ++) {
	  const div = document.createElement('div');
		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();
		elementsToAdd.push(div);
	}
	return elementsToAdd;
}

function destroyBoxes () {
  boxes.innerHTML = '';
}

refs.createButton.addEventListener('click', () => {
	let boxesToAdd = createBoxes(refs.controlEl.value);
	boxes.append(...boxesToAdd);
})

refs.destroyButton.addEventListener('click', () => {
	destroyBoxes.call();
})