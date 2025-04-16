// 📌 Et array med objekter - hvert objekt er et event med info
const events = [
    {
      title: "KOMsammen - Filmaften",
      location: "Odense",
      date: "26. maj",
      org: "Ventilen",
      logo: "img/ventilen-logo.webp"
    },
    {
      title: "Landsindsamling",
      location: "Odense",
      date: "5. juni",
      org: "Røde Kors",
      logo: "img/roede-kors-logo.webp"
    },
    {
      title: "Regions møde",
      location: "Odense",
      date: "13. juni",
      org: "Coding Pirates",
      logo: "img/coding-pirate-logo.webp"
    },
    {
      title: "Fællesspisning",
      location: "Odense",
      date: "20. juni",
      org: "Ventilen",
      logo: "img/ventilen-logo.webp"
    },
    {
      title: "Ferielejre møde",
      location: "Odense",
      date: "28. juni",
      org: "Rød kors",
      logo: "img/roede-kors-logo.webp"
    }
  ];
  
  // 📌 Variabler (pensum) til at holde styr på hvilket slide vi er på
  let currentIndex = 0;
  let visibleCards = getVisibleCards(); // responsiv funktion
  
  // 📌 DOM-manipulation: Vi henter HTML-elementer via klasser
  const carousel = document.querySelector(".carousel-container");
  const dotsContainer = document.querySelector(".dots");
  
  // 📌 Funktion med if-else (pensum): Afgør hvor mange kort der vises afhængig af skærmstørrelse
  function getVisibleCards() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 3;
  }
  
  // 📌 Funktion der looper gennem events-array og genererer kort i DOM'en
  function renderCards() {
    carousel.innerHTML = ""; // ryd tidligere indhold
  
    events.forEach((event) => {
      // For hvert event opretter vi et DOM-element (et kort)
      const card = document.createElement("div");
      card.className = "event-card";
  
      // 🧠 DOM-manipulation og objekter: Vi bruger properties fra event-objektet
      card.innerHTML = `
        <img src="${event.logo}" alt="logo">
        <h3>${event.title}</h3>
        <div class="event-info">
          <p>📍 ${event.location}</p>
          <p>📅 ${event.date}</p>
        </div>
        <div class="button-group">
          <button onclick="alertInfo('${event.title}', '${event.org}')">Info</button>
          <button>Deltag</button>
        </div>
      `;
  
      // 📌 Tilføjer kortet til DOM'en
      carousel.appendChild(card);
    });
  
    updateCarousel(); // sørger for korrekt placering
    renderDots();     // opdaterer dots
  }
  
  // 📌 Funktion til at vise info-popup (DOM + alert)
  function alertInfo(title, org) {
    alert(`Event: ${title}\nArrangør: ${org}`);
  }
  
  // 📌 Funktion: Går én slide frem hvis det er muligt (if-statement)
  function nextSlide() {
    if (currentIndex + visibleCards < events.length) {
      currentIndex++;
      updateCarousel(); // opdater visningen
    }
  }
  
  // 📌 Funktion: Går én slide tilbage hvis muligt
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  // 📌 Funktion: Opdaterer hvor langt vi skal "translate" kortene (DOM + operatorer)
  function updateCarousel() {
    const cardWidth = carousel.querySelector(".event-card")?.offsetWidth || 280;
    const gap = 20; // mellemrum mellem kort
    const offset = currentIndex * (cardWidth + gap); // Operatorer: gang og plus
    carousel.style.transform = `translateX(-${offset}px)`;
  
    updateDots(); // opdater hvilken dot der er aktiv
  }
  
  // 📌 Funktion: Genererer dots til navigation (DOM + loop)
  function renderDots() {
    dotsContainer.innerHTML = "";
    const totalDots = Math.ceil(events.length - visibleCards + 1);
  
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      if (i === currentIndex) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    }
  }
  
  // 📌 Funktion: Opdaterer dot-markering (DOM + loop + if)
  function updateDots() {
    const allDots = document.querySelectorAll(".dot");
  
    allDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }
  
  // 📌 Event listener (DOM): Når vinduet ændres, genberegnes layout
  window.addEventListener("resize", () => {
    const newVisible = getVisibleCards();
  
    if (newVisible !== visibleCards) {
      visibleCards = newVisible;
  
      // Hvis currentIndex er ude af synk, juster det
      if (currentIndex > events.length - visibleCards) {
        currentIndex = Math.max(0, events.length - visibleCards);
      }
  
      renderCards(); // Genopbyg carousel
    }
  });
  
  // 📌 Event listeners til navigation med pile
  document.querySelector(".nav-button.left").addEventListener("click", prevSlide);
  document.querySelector(".nav-button.right").addEventListener("click", nextSlide);
  
  // 📌 Starter hele carousel når siden loader
  renderCards();