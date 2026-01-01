// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "Switch to Light Mode";
} else {
  themeToggle.textContent = "Switch to Dark Mode";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  themeToggle.textContent =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
});
