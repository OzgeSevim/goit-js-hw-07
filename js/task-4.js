const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { elements } = form;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();
  if (email === "" || password === "") {
    alert("'All form fields must be filled in'");
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  form.reset();
});
