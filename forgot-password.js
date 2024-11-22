function sendVerificationCode() {
    const phone = document.getElementById("phone").value;
    const phoneMessage = document.getElementById("phone-message");

    // Check for valid Bangladeshi phone numbers
    if (phone.match(/^01[3-9][0-9]{8}$/)) {
        // Simulate sending OTP (API call could be here)
        phoneMessage.textContent = "Verification code sent to your phone.";
        phoneMessage.style.color = "#49b3f0";

        // Show verification code input
        document.getElementById("verification-section").style.display = "block";
    } else {
        phoneMessage.textContent = "Please enter a valid Bangladeshi phone number (11 digits starting with '01').";
        phoneMessage.style.color = "red";
    }
}

// Handle form submission
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const verificationCode = document.getElementById("verification-code").value;
    const verificationMessage = document.getElementById("verification-message");

    // Simulate verification check
    if (verificationCode === "123456") {  // Example OTP code
        verificationMessage.textContent = "Verification successful! Redirecting...";
        verificationMessage.style.color = "#49b3f0";
        
        // Redirect to reset password page after verification
        setTimeout(() => window.location.href = "reset-password.html", 1500);
    } else {
        verificationMessage.textContent = "Invalid verification code. Please try again.";
        verificationMessage.style.color = "red";
    }
});
