document.addEventListener("DOMContentLoaded", () => {
  const successBtn = document.getElementById("successBtn");
  const errorBtn = document.getElementById("errorBtn");

  successBtn.addEventListener("click", () => {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      showPopup("This is a success message!", "success");
    }, 2000); // Simulate loading delay
  });

  errorBtn.addEventListener("click", () => {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      showPopup("This is an error message!", "error");
    }, 2000); // Simulate loading delay
  });
});

