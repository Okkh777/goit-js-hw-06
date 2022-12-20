const inputText = document.querySelector('#name-input');

const spanText = document.querySelector('#name-output');

inputText.addEventListener('input', updateValue);
function updateValue(event) {
    spanText.textContent = event.target.value;
};