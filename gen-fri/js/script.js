


// header - Casper
const toggle   = document.querySelector('.nav-toggle');
const menu     = document.getElementById('primary-menu');
const html     = document.documentElement;

// Funktion der toggler menuen
function toggleMenu() {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';

  // If-else demonstreret tydeligt
  if (isOpen) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    html.classList.remove('no-scroll');
  } else {
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    html.classList.add('no-scroll');
  }

  // Kald ekstra funktion der kører et loop
  logMenuState(isOpen);
}

// Eventlistener (Event)
toggle?.addEventListener('click', toggleMenu);

// Array + loop + funktion
const logMessages = [
  'Menu er lukket.',
  'Menu er åben.',
  'Brugeren toggler menuen.',
];

function logMenuState(isOpen) {
  // Loop igennem arrayet
  logMessages.forEach((msg, index) => {
    if (index === 2) {
      console.log(msg); // log altid sidste besked
    } else if (index === 1 && !isOpen) {
      console.log(msg); // hvis menu åbnes
    } else if (index === 0 && isOpen) {
      console.log(msg); // hvis menu lukkes
    }
  });
}

// 2. Show/Hide Scroll to Top Button - Martin

const scrollTopBtn = document.querySelector('.scroll-to-top');
let mybutton = document.getElementById('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});






// Updates Feed

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


  const scrollBox = document.querySelector('.updates-scroll-box');
  const feedContainer = document.getElementById('updatesFeed');
  const loadingIndicator = document.getElementById('loadingIndicator');
  let isLoading = false;

  const templates = [
    () => `
      <article class="update-card friend-post">
        <div class="update-header">
          <img src="images/lucia.png" alt="Lucia" class="update-avatar" />
          <div>
            <h3>@lucia syntes godt om et opslag</h3>
            <time>for 5 minutter siden</time>
          </div>
        </div>
        <p class="update-text">"Det her var en fed artikel at læse!"</p>
      </article>
    `,
    () => `
      <article class="update-card news-post">
        <img src="images/news1.png" class="update-image" alt="Nyhed" />
        <div class="update-content">
          <h3 class="update-title">Ny teknologi mod klimaændringer</h3>
          <p class="update-text">Forskere har udviklet en metode til at opsamle CO2 direkte fra luften.</p>
          <div class="update-tags">
            <span class="tag">#klima</span>
            <span class="tag">#viden</span>
          </div>
          <time class="update-time">1 time siden</time>
        </div>
      </article>
    `,
    () => `
      <article class="update-card">
        <div class="update-header">
          <img src="images/friend2.png" alt="Jonas" class="update-avatar" />
          <div>
            <h3>Jonas Larsen</h3>
            <time>for 3 timer siden</time>
          </div>
        </div>
        <p class="update-text">“Fik endelig mit første padeltrofæ i dag! 😎”</p>
        <div class="update-tags">
          <span class="tag">#padel</span>
          <span class="tag">#sejr</span>
        </div>
      </article>
    `
  ];

  function loadPosts() {
    if (isLoading) return;
    isLoading = true;
    loadingIndicator.style.display = 'block';

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const randomPost = templates[Math.floor(Math.random() * templates.length)];
        feedContainer.insertAdjacentHTML('beforeend', randomPost());
      }
      loadingIndicator.style.display = 'none';
      isLoading = false;
    }, 800);
  }

  scrollBox.addEventListener('scroll', () => {
    const threshold = scrollBox.scrollHeight - scrollBox.scrollTop - scrollBox.clientHeight;
    if (threshold < 100 && !isLoading) {
      loadPosts();
    }
  });

  // KALENDER
  document.addEventListener('DOMContentLoaded', loadPosts);


// Global variables to hold the current month and year
let currentDate = new Date();
let selectedDate = null;
let events = {
  '4/5/2025': 'Frivillig event – Miljørensning i lokalområdet 🌍',
'4/15/2025': 'Team-møde med @johan – Fælles projektopdatering 🔄',
'4/20/2025': 'Padelturnering for unge – Kom og vær med! 🏓',
'4/25/2025': 'Hackathon for sociale initiativer 💻 – Tilmeld dig nu!',
'5/2/2025': 'Workshop om frivilligt arbejde og CV-opbygning 👥',
'5/10/2025': 'Online debat om unges rolle i samfundet 🌍',
'5/18/2025': 'Fællesspisning for unge – Kom og mød nye venner 🍽️',
'5/30/2025': 'Udendørs yoga-event for mental sundhed 🧘‍♂️'
};

// Function to change the month and year
function changeMonth(direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  renderCalendar();
}

function changeYear(direction) {
  currentDate.setFullYear(currentDate.getFullYear() + direction);
  renderCalendar();
}

// Function to render the calendar
function renderCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  document.getElementById('calendar-title').innerText = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
  
  // Clear the calendar days grid
  const grid = document.querySelector('.calendar-days');
  grid.innerHTML = '';
  
  // Add empty cells for the days before the 1st of the month
  for (let i = 0; i < firstDay.getDay(); i++) {
    grid.innerHTML += `<div class="empty-day"></div>`;
  }
  
  // Add the actual days of the month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dayDiv = document.createElement('div');
    dayDiv.innerText = day;
    dayDiv.classList.add('calendar-day');
    dayDiv.onclick = () => openEventPopup(day);
    
    // Highlight the selected date
    if (selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year) {
      dayDiv.classList.add('selected');
    }

    // Highlight the current day
    const today = new Date();
    if (today.getDate() === day && today.getMonth() === month && today.getFullYear() === year) {
      dayDiv.classList.add('current-day');
    }
    
    // Check if the day has an event and add an icon if it does
    const formattedDate = `${month + 1}/${day}/${year}`;
    if (events[formattedDate]) {
      const iconPlaceholder = document.createElement('img');
      iconPlaceholder.src = 'icons/black_icons/add_black.svg'; // Replace with your actual icon path
      iconPlaceholder.alt = 'Event Icon';
      iconPlaceholder.classList.add('event-icon');
      dayDiv.appendChild(iconPlaceholder);
    }
    
    grid.appendChild(dayDiv);
  }
}

// Function to open the popup for adding/editing an event
function openEventPopup(day) {
  selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  const formattedDate = selectedDate.toLocaleDateString();
  document.getElementById('event-date').innerText = formattedDate;
  
  // Populate the popup with any existing event for the selected date
  document.getElementById('event-details').value = events[formattedDate] || '';
  
  document.getElementById('event-popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('event-popup').style.display = 'none';
}

// Function to save the event
function saveEvent() {
  const eventDetails = document.getElementById('event-details').value;
  const formattedDate = selectedDate.toLocaleDateString();
  
  if (eventDetails.trim() === '') {
    delete events[formattedDate];
  } else {
    events[formattedDate] = eventDetails;
  }
  
  closePopup();
  renderCalendar();
}

// Initial render
renderCalendar();



document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".leaderboard-filters .filter-btn");
  const leaderboardItems = document.querySelectorAll(".leaderboard-list .leaderboard-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Remove active class from all filter buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      leaderboardItems.forEach(item => {
        // If the selected filter is 'all', display every item
        if (filterValue === "all") {
          item.style.display = "";
        } else {
          // Otherwise, only display items matching the filter
          // Ensure each item has a corresponding data-category attribute in your HTML
          if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});