const cookie_bar = document.querySelector(".cookie-bar");
var cookie_accept_button = document.querySelector(".cookie-bar-content button");


//Hides cookie bar when user accepts the cookie policy
cookie_accept_button.addEventListener('click', () => {
    cookie_bar.style.display = "none";

})