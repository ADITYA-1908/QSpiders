const loginButton = document.getElementById("login-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

if (loginButton && modalOverlay && closeButton) {
  loginButton.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });
}

togglePassword.addEventListener("click", () => {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});
