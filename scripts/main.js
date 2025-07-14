document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");
  const emailInput = document.getElementById("emailInput");

  signupBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    showButtonSpinner(signupBtn);

    setTimeout(() => {
      if (validateEmail(email)) {
        showPopup("Registration successful!", "success");
      } else {
        showPopup("Invalid email address!", "error");
      }

      hideButtonSpinner(signupBtn);
    }, 2000);
  });
});


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
