const range = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

range.addEventListener("change", function () {
    span.style.fontSize = this.value + "px";
});