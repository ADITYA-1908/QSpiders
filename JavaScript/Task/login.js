const loginButton = document.getElementById("login-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");

if (loginButton && modalOverlay && closeButton) {
  loginButton.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });
}

// const loginForm = document.querySelector("#login-form");
// const username = document.querySelector("#username");
// const password = document.querySelector("#password");
// function demo(e) {
//   e.prevent.Default();
//   console.log(username.value);
//   console.log(password.value);
//   username.value = "";
// }
