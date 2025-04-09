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
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main-content__tab");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active state from all tabs
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      // Hide all tab contents
      tabContents.forEach((content) => (content.style.display = "none"));

      // Activate the clicked tab
      tab.setAttribute("aria-selected", "true");
      const target = tab.getAttribute("data-tab");
      document.querySelector(`[data-tab-content="${target}"]`).style.display =
        "block";
    });
  });
});

// Get the button
let mybutton = document.getElementById("scrollUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
