function showButtonSpinner(buttonElement) {
    // Save original button text so we can restore it later
    buttonElement.dataset.originalText = buttonElement.innerHTML;

    buttonElement.innerHTML = `<div class="button-spinner"></div>`;
    buttonElement.disabled = true; // disable button while loading
}

function hideButtonSpinner(buttonElement) {
    buttonElement.innerHTML = buttonElement.dataset.originalText;
    buttonElement.disabled = false; // Re-enable button
}
