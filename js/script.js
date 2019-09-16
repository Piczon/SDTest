
let navbar = document.querySelector(".navbar-desktop");

window.onscroll = function() {
    "use strict";
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.backgroundColor = "#000";
        navbar.style.boxShadow = "0px 0px 11px 0px rgba(0,0,0,0.75)";
    }
    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
}




function dropdownMobile() {

    let navbarMobile = document.querySelector(".navbar-mobile");
    let dropdown = document.querySelector(".dropdown-box");
    let dropdownState = window.getComputedStyle(dropdown, null).display;

    if(dropdownState === "none") {
        dropdown.style.display = "block";
        
    }
    else {
        dropdown.style.display = "none";
        
    }
}