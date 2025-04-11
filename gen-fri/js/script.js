/* Burger Menu Toggle */
const burgerBtn = document.getElementById("burger-btn");
const sidebar = document.getElementById("sidebar");

if (burgerBtn && sidebar) {
  burgerBtn.addEventListener("click", () => {
    const isVisible = sidebar.classList.toggle("sidebar--visible");
    const icon = burgerBtn.querySelector("img");
    if (icon) {
      if (isVisible) {
        icon.src = "icons/black_icons/circle-xmark.svg";
        icon.alt = "Close Menu";
      } else {
        icon.src = "icons/black_icons/burgermenu_black.svg";
        icon.alt = "Menu";
      }
    }
  });
}

/* Dark Mode Toggle */
const themeToggle = document.getElementById("theme-toggle");
const rootElement = document.documentElement;
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme");
    rootElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  });
}

/* Tab Toggle Functionality */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main-content__tab");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      tabContents.forEach((content) => {
        content.style.display = "none";
      });
      tab.setAttribute("aria-selected", "true");
      const targetTab = tab.getAttribute("data-tab");
      const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });
});

/* Scroll to Top Button */
const scrollBtn = document.querySelector(".scrollUpBtn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
