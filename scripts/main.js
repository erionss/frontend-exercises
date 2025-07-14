document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("successBtn").addEventListener("click", () => {
    showPopup("This is a success message!", "success");
  });

  document.getElementById("errorBtn").addEventListener("click", () => {
    showPopup("This is an error message!", "error");
  });
});
