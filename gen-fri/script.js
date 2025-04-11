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
      tabs.forEach((t) => t.classList.remove("main-content__tab--active"));
      tabContents.forEach((content) => (content.style.display = "none"));

      // Activate the clicked tab
      tab.classList.add("main-content__tab--active");
      const target = tab.getAttribute("data-tab");
      document.querySelector(`[data-tab-content="${target}"]`).style.display =
        "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".main-content__tab");
  const tabContents = document.querySelectorAll("[data-tab-content]");
  const tabIndicator = document.querySelector(".main-content__tab-indicator");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active state from all tabs
      tabs.forEach((t) => t.classList.remove("main-content__tab--active"));
      tabContents.forEach((content) => (content.style.display = "none"));

      // Activate the clicked tab
      tab.classList.add("main-content__tab--active");
      const target = tab.getAttribute("data-tab");
      document.querySelector(`[data-tab-content="${target}"]`).style.display =
        "block";

      // Move the tab indicator
      const tabRect = tab.getBoundingClientRect();
      const tabsContainerRect = tab.parentElement.getBoundingClientRect();
      tabIndicator.style.width = `${tabRect.width}px`;
      tabIndicator.style.transform = `translateX(${
        tabRect.left - tabsContainerRect.left
      }px)`;
    });
  });

  // Initialize the tab indicator position
  const activeTab = document.querySelector(".main-content__tab--active");
  if (activeTab) {
    const activeTabRect = activeTab.getBoundingClientRect();
    const tabsContainerRect = activeTab.parentElement.getBoundingClientRect();
    tabIndicator.style.width = `${activeTabRect.width}px`;
    tabIndicator.style.transform = `translateX(${
      activeTabRect.left - tabsContainerRect.left
    }px)`;
  }

  const carouselContainer = document.querySelector(
    ".event-carousel__container"
  );
  const prevButton = document.querySelector(".event-carousel__prev");
  const nextButton = document.querySelector(".event-carousel__next");

  let scrollPosition = 0;

  prevButton.addEventListener("click", () => {
    const boxWidth = document.querySelector(".event-box").offsetWidth + 16; // Box width + gap
    scrollPosition = Math.min(scrollPosition + boxWidth, 0); // Prevent scrolling past the start
    carouselContainer.style.transform = `translateX(${scrollPosition}px)`;
  });

  nextButton.addEventListener("click", () => {
    const boxWidth = document.querySelector(".event-box").offsetWidth + 16; // Box width + gap
    const maxScroll = -(
      carouselContainer.scrollWidth - carouselContainer.offsetWidth
    );
    scrollPosition = Math.max(scrollPosition - boxWidth, maxScroll); // Prevent scrolling past the end
    carouselContainer.style.transform = `translateX(${scrollPosition}px)`;
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

// Tilmeld Popup function