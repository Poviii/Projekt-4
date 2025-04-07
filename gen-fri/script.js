// Existing code

// Update burger menu functionality
const burgerMenuIcon = document.querySelector(".burger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

burgerMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !burgerMenuIcon.contains(event.target)
  ) {
    mobileMenu.classList.remove("open");
  }
});

// Function to handle responsiveness
function handleResponsiveness() {
  const sidemenu = document.querySelector(".sidemenu");
  const mainContent = document.querySelector(".main-content");
  const mainHeader = document.querySelector(".main-header");
  const pageTitle = document.querySelector(".page-title");
  const searchBar = document.querySelector(".search-bar");

  if (window.innerWidth >= 1024) {
    sidemenu.style.display = "block";
    burgerMenuIcon.style.display = "none";
    mainContent.style.marginLeft = "250px";
    mainHeader.style.display = "flex";
    pageTitle.style.display = "block";
    searchBar.style.display = "flex";
    mobileMenu.classList.remove("open");
  } else {
    sidemenu.style.display = "none";
    burgerMenuIcon.style.display = "block";
    mainContent.style.marginLeft = "0";
    mainHeader.style.display = "flex";
    pageTitle.style.display = "none";
    searchBar.style.display = "none";
  }
}

// Initial call
handleResponsiveness();

// Listen for window resize events
window.addEventListener("resize", handleResponsiveness);
