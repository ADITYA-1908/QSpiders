const loginForm = document.querySelector("#loginform");

const password = document.querySelector("#password");
const email = document.querySelector("#emailid");
const errorMesg = document.querySelector("#error");
const showbtn = document.querySelector("#showbtn");

showbtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showbtn.innerText = "Hide Password";
  } else {
    password.type = "password";
    showbtn.innerText = "Show Password";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = JSON.parse(localStorage.getItem("userdata"));
  if (userData.email === email.value && userData.password === password.value) {
    errorMesg.innerText = "";
    window.location = "./dashboard.html";
  } else {
    errorMesg.innerText = "Invalid email or password.";
  }
});
