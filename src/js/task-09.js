function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnColor: document.querySelector('.change-color'),
  bodyColor: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
}

refs.btnColor.addEventListener('click', changeColor);
function changeColor (event) {
  let color = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}