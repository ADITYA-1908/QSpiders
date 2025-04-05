const loginForm = document.querySelector("#loginform");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#emailid");
const errorMesg = document.querySelector("#error");
const showbtn = document.querySelector("#showbtn");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); //to stop reloading page
  //   console.log(username.value);
  //   console.log(email.value);
  //   console.log(password.value);
  if (password.value.length > 6) {
    errorMesg.innerText = "";
    const userdetails = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    localStorage.setItem("userdata", JSON.stringify(userdetails));

    username.value = "";
    email.value = "";
    password.value = "";

    window.location = "./login.html";
  } else {
    errorMesg.style.color = "red";
    errorMesg.innerText = "your username/password is not sufficient length";
  }
  username.value = "";
});

showbtn.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showbtn.innerText = "Hide Password";
  } else {
    password.type = "password";
    showbtn.innerText = "Show Password";
  }
});
