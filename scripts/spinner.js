function showSpinner() {
  const spinnerOverlay = document.getElementById("spinnerContainer");
  spinnerOverlay.classList.remove("hidden");
}

function hideSpinner() {
  const spinnerOverlay = document.getElementById("spinnerContainer");
  spinnerOverlay.classList.add("hidden");
}
