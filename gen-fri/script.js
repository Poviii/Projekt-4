// Burgermenu toggle
const burgerBtn = document.getElementById("burger-btn");
const sidebar = document.getElementById("sidebar");

burgerBtn?.addEventListener("click", () => {
  const isSidebarVisible = sidebar.classList.toggle("sidebar--visible");

  // Toggle the icon based on the sidebar visibility
  const icon = burgerBtn.querySelector("img");
  if (isSidebarVisible) {
    icon.src = "icons/black_icons/circle-xmark.svg"; // Close icon
    icon.alt = "Close Menu";
  } else {
    icon.src = "icons/black_icons/burgermenu_black.svg"; // Burger menu icon
    icon.alt = "Menu";
  }
});

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

themeToggle?.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
});

// Tab toggle functionality
const tabs = document.querySelectorAll(".main-content__tab");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("main-content__tab--active"));

    // Hide all tab contents
    tabContents.forEach((content) => (content.style.display = "none"));

    // Add active class to the clicked tab
    tab.classList.add("main-content__tab--active");

    // Show the corresponding tab content
    const target = tab.getAttribute("data-tab");
    document.querySelector(`[data-tab-content="${target}"]`).style.display =
      "block";
  });
});
