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

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === modalLogin) {
        modalLogin.style.display = "none";
    }
    if (event.target === modalOpret) {
        modalOpret.style.display = "none";
    }
};