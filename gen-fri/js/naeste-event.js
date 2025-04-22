// array med objekter
const carouselEvents = [
    {
      title: "KOMsammen - Filmaften",
      location: "Odense",
      date: "26. maj",
      org: "Ventilen",
      logo: "/images/ventilen-logo.webp"
    },
    {
      title: "Landsindsamling",
      location: "Odense",
      date: "5. juni",
      org: "Røde Kors",
      logo: "/images/roede-kors-logo.webp"
    },
    {
      title: "Regions møde",
      location: "Odense",
      date: "13. juni",
      org: "Coding Pirates",
      logo: "/images/coding-pirate-logo.webp"
    },
    {
      title: "Fællesspisning",
      location: "Odense",
      date: "20. juni",
      org: "Ventilen",
      logo: "/images/ventilen-logo.webp"
    },
    {
      title: "Ferielejre møde",
      location: "Odense",
      date: "28. juni",
      org: "Rød kors",
      logo: "/images/roede-kors-logo.webp"
    }
  ];
  
  //  Variabler 
  let currentIndex = 0;
  let visibleCards = getVisibleCards(); 
  
  //  DOM-manipulation
  const carousel = document.querySelector(".carousel-container");
  const dotsContainer = document.querySelector(".dots");
  
  //  Funktion med if-else 
  function getVisibleCards() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }
  
  function renderCards() {
    carousel.innerHTML = ""; 
  
    carouselEvents.forEach((event) => {
      
      const card = document.createElement("div");
      card.className = "event-card";
  
     
      card.innerHTML = `
        <img src="${event.logo}" alt="logo">
        <h3>${event.title}</h3>
        <div class="event-info">
          <p>  ${event.location}</p>
          <p>📅 ${event.date}</p>
        </div>
        <button id="learnMoreBtn">Learn more</button>
          <div id="popup">
              <span id="closePopup">&times;</span>
              <h2 id="eventTitle"></h2>
              <p id="eventDescription"></p>
              <ul id="eventDetails"></ul>
              <button href="#" id="popupSignupBtn">Sign up</button>
          </div>
      `;
  
      carousel.appendChild(card);
    });
  
    updateCarousel(); 
    renderDots();    
  }
  

  function alertInfo(title, org) {
    alert(`Event: ${title}\nArrangør: ${org}`);
  }
  
  
  function nextSlide() {
    if (currentIndex + visibleCards < carouselEvents.length) {
      currentIndex++;
      updateCarousel(); 
    }
  }
  
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  
  function updateCarousel() {
    const cardWidth = carousel.querySelector(".event-card")?.offsetWidth || 280;
    const gap = 20; 
    const offset = currentIndex * (cardWidth + gap); 
    carousel.style.transform = `translateX(-${offset}px)`;
  
    updateDots(); 
  }
  
  
  function renderDots() {
    dotsContainer.innerHTML = "";
    const totalDots = Math.ceil(carouselEvents.length - visibleCards + 1);
  
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      if (i === currentIndex) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    }
  }
  
  //  Opdaterer dot-markering  + loop + if
  function updateDots() {
    const allDots = document.querySelectorAll(".dot");
  
    allDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }
  
  
  window.addEventListener("resize", () => {
    const newVisible = getVisibleCards();
  
    if (newVisible !== visibleCards) {
      visibleCards = newVisible;
  
      
      if (currentIndex > carouselEvents.length - visibleCards) {
        currentIndex = Math.max(0, carouselEvents.length - visibleCards);
      }
  
      renderCards(); 
    }
  });
  

  document.querySelector(".nav-button.left").addEventListener("click", prevSlide);
  document.querySelector(".nav-button.right").addEventListener("click", nextSlide);
  

  renderCards();