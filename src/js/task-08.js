const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
console.log(({'email': email}));
console.log(({'password': password}));

  if (email.value === "" || password.value === "") {
   return alert("Please fill in all the fields!");
  }

  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};