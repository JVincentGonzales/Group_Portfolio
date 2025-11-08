// assets/js/theme.js
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Get any previously saved preference
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Helper functions
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// ========== APPLY PREVIOUS SELECTION ==========
if (selectedTheme) {
  // If user has selected before, apply it
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](lightTheme);
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
} else {
  // Default: DARK mode (so we ensure lightTheme class is NOT active)
  document.body.classList.remove(lightTheme);
  themeButton.classList.remove(iconTheme);
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "bx bx-sun");
}

// ========== TOGGLE MANUALLY ==========
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  // Save the user's new choice
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
