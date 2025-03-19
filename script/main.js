// Define the modal
var modalLogin = document.querySelector('.loginContainer');
var modalOpret = document.querySelector('.opretContainer');

// Open modal when clicking the login button
document.getElementById("loginKnap").onclick = function() {
    modalLogin.style.display = 'block';
};
document.getElementById("opretKnap").onclick = function() {
    modalOpret.style.display = 'block';
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modalLogin) {
        modalLogin.style.display = "none";
    }
};
window.onclick = function(event) {
    if (event.target === modalOpret) {
        modalOpret.style.display = "none";
    }
};