function validatePasswords() {
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");
    const successModal = document.getElementById("success-modal");

    // Validate matching passwords and length
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return false;
    } else {
        errorMessage.textContent = "";

        // Show success modal
        successModal.style.display = "flex";

        // Clear form fields
        document.getElementById("new-password").value = "";
        document.getElementById("confirm-password").value = "";

        return false; // Prevent form submission
    }
}

function closeModal() {
    document.getElementById("success-modal").style.display = "none";
}
