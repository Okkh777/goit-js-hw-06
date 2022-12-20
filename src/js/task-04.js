const result = document.querySelector('#value');

let counterValue = 0;

let addButton = document.querySelector('[data-action="increment"]');
console.log(addButton);

let removeButton = document.querySelector('[data-action="decrement"]');
console.log(removeButton);

addButton.addEventListener('click', function onClick(event) {
    counterValue += 1;
    result.innerHTML = counterValue;
    console.log(event);
});

removeButton.addEventListener('click', function onClick(event) {
    counterValue -= 1;
    result.innerHTML = counterValue;
    console.log(event);
});