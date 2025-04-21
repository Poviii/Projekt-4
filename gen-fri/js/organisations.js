// *********************** PENSUM ***********************

// Variabel og Array
var organisationer = ["Ventilen", "Røde Kors", "Coding Pirates", "Bifrost", "Modstrøm", "Natur & Ungdom", "Musik & Ungdom"];

// DOM
var likeKnapper = document.getElementsByClassName("like__button");

// Loop
for (var i = 0; i < likeKnapper.length; i++) {
    var knap = likeKnapper[i];

    // Event
    knap.addEventListener("click", function() {
        // If-else
        if (this.src.includes("../gen-fri/icons/black_icons/heart_black.svg")) {
            this.src = "../gen-fri/icons/orange_icons/heart_orange.svg";
            alert("Du har tilføjet en organisation!");
        } else {
            this.src = "../gen-fri/icons/black_icons/heart_black.svg";
            alert("Du har fjernet din tilmelding.");
        }
    });
}

// ********************* Ikke alle organisationer vises på samme tid ****************************

var organisationElementer = document.getElementsByClassName("tilmelding__button");
var scrollKnap = document.getElementById("scrollBtn");

// Variabler
var startIndex = 0;
var antalVises = 3;

// Funktion til at opdatere hvilke der vises
function visOrganisationer() {
    for (var i = 0; i < organisationElementer.length; i++) {
        if (i >= startIndex && i < startIndex + antalVises) {
            organisationElementer[i].classList.remove("hidden");
        } else {
            organisationElementer[i].classList.add("hidden");
        }
    }
}

// DOM - hent elementer
var organisationElementer = document.getElementsByClassName("tilmelding__button");
var scrollDown = document.getElementById("scrollDownBtn");
var scrollUp = document.getElementById("scrollUpBtn");

// Variabler
var startIndex = 0;
var antalVises = 3;

// Funktion til at vise de rigtige organisationer
function visOrganisationer() {
    for (var i = 0; i < organisationElementer.length; i++) {
        if (i >= startIndex && i < startIndex + antalVises) {
            organisationElementer[i].classList.remove("hidden");
        } else {
            organisationElementer[i].classList.add("hidden");
        }
    }
}

// ****************************** Scroll op og ned-knapper *********************************

visOrganisationer();

// Ned-knap
scrollDown.addEventListener("click", function() {
    if (startIndex + antalVises < organisationElementer.length) {
        startIndex += antalVises;
        visOrganisationer();
    }
});

// Op-knap
scrollUp.addEventListener("click", function() {
    if (startIndex - antalVises >= 0) {
        startIndex -= antalVises;
        visOrganisationer();
    }
});

// Vises ikke når der ikke er mere scroll
function visOrganisationer() {
    for (var i = 0; i < organisationElementer.length; i++) {
        if (i >= startIndex && i < startIndex + antalVises) {
            organisationElementer[i].classList.remove("hidden");
        } else {
            organisationElementer[i].classList.add("hidden");
        }
    }

    if (startIndex === 0) {
        scrollUp.classList.add("disabled");
    } else {
        scrollUp.classList.remove("disabled");
    }

    if (startIndex + antalVises >= organisationElementer.length) {
        scrollDown.classList.add("disabled");
    } else {
        scrollDown.classList.remove("disabled");
    }
}
