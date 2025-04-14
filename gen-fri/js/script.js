// DOM Elements
const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileNav = document.getElementById('mobileNav');
const scrollTopBtn = document.querySelector('.scroll-to-top');

// 1. Toggle Mobile Nav via Burger Menu
if (burgerMenu) {
  burgerMenu.addEventListener('click', () => {
    const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
    burgerMenu.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle .nav-open on header
    header.classList.toggle('nav-open');

    // Toggle aria-hidden on the mobile nav
    if (mobileNav) {
      const navHidden = mobileNav.getAttribute('aria-hidden') === 'true' || false;
      mobileNav.setAttribute('aria-hidden', !navHidden);
    }
  });
}

// 2. Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// 3. Scroll to Top Smoothly
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



  const updatesFeed = document.getElementById('updatesFeed');

  function loadMoreUpdates() {
    const card = document.createElement('article');
    card.className = 'update-card friend-post';
    card.innerHTML = `
      <div class="update-header">
        <img src="images/friend2.jpg" alt="Nye ven" class="update-avatar" />
        <div>
          <h3>Jakob Hansen</h3>
          <time>${new Date().toLocaleTimeString()}</time>
        </div>
      </div>
      <p class="update-text">Glæder mig til workshop med Coding Pirates i morgen!</p>
    `;
    updatesFeed.appendChild(card);
  }

  updatesFeed.addEventListener('scroll', () => {
    if (updatesFeed.scrollTop + updatesFeed.clientHeight >= updatesFeed.scrollHeight - 50) {
      loadMoreUpdates();
    }
  });

  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      const isLiked = button.classList.toggle('liked');
      button.dataset.liked = isLiked;

      const label = button.querySelector('.like-label');
      label.textContent = isLiked ? 'Synes ikke alligevel' : 'Synes godt om';

      // Optional: handle count
      // You can store/update a like count span here if you add it
    });
  });

