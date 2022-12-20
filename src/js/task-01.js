const navList = document.querySelector('#categories');
console.log('Number of categories: ', navList.childElementCount);

const navListItems = [...navList.children].forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.childElementCount);
});