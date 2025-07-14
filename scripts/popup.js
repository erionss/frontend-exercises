function showPopup(message, type = "success") {
  const popupContainer = document.getElementById("popupContainer");

  const toast = document.createElement("div");
  toast.classList.add("toast", type, "show");
  toast.innerText = message;

  popupContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      popupContainer.removeChild(toast);
    }, 500);
  }, 3000);
}
