const inputText = document.querySelector('#name-input');

const spanText = document.querySelector('#name-output');
console.log(spanText);

inputText.addEventListener('input', updateValue);
function updateValue(event) {
    spanText.textContent = event.target.value;
    if (event.target.value === '') {
        spanText.textContent = 'Anonymous';
    }
}