// Login Form Submission
function login(event) {
    event.preventDefault(); // Prevents form submission for demonstration
    alert("Logged in successfully!");
  }
  
  // Signup Form Submission
  function signUp(event) {
    event.preventDefault(); // Prevents form submission for demonstration
    alert("Signed up successfully!");
  }
  

  /* Disable Right Click*/
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
/*Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U)*/
document.addEventListener('keydown', function(e) {
  // Disable F12 (Inspect)
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  // Disable Ctrl+Shift+I (Inspect)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
  }
  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }
});
function goBack() {
  window.history.back(); /* Navigates back to the previous page */
}
