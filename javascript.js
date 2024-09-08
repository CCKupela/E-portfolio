// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  console.log("Dark mode is working");
}

// Check user preferences (optional)
// You can use localStorage or other methods to persist the user's choice
// For simplicity, I'm just checking the system preference here
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  toggleDarkMode();
}