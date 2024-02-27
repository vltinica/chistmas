"use strict";
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// * Menu show
if (navToggle instanceof HTMLElement && navMenu instanceof HTMLElement) {
    navToggle.addEventListener("click", (event) => {
        navMenu.classList.add("show-menu");
    });
}
// * Menu hidden
if (navClose instanceof HTMLElement && navMenu instanceof HTMLElement) {
    navClose.addEventListener("click", (event) => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.remove("show-menu");
};
navLinks.forEach((n) => n.addEventListener("click", linkAction));
/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById("title-data");
const numberData = document.getElementById("number-data");
const textData = document.getElementById("text-data");
const msgChristmas = document.getElementById("msg-christmas");
const christmasCountdown = () => {
    let now = new Date(); // Get today's date
    let currentMonth = now.getMonth() + 1; //Get the current month
    let currentDay = now.getDate(); //Get the current day of the month
    //Calculate the year the next Christmas will be
    let nextChristmasYear = now.getFullYear();
    if (currentMonth == 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }
    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
    let christmasDay = new Date(nextChristmasDate);
    let timeLeft = christmasDay.getTime() - now.getTime();
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    //Don't calculate the time left if it is Christmas day
    if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
        days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        seconds = Math.floor((timeLeft / 1000) % 60);
    }
    //Show missing days
    if (numberData) {
        numberData.innerHTML = days < 10 ? `0${days}` : days.toString();
    }
    if (textData) {
        textData.innerHTML = "Days";
    }
    //Show missing hours
    if (currentDay == 24 && numberData) {
        numberData.innerHTML = hours < 10 ? `0${hours}` : hours.toString();
        if (textData) {
            textData.innerHTML = "Hours";
        }
    }
    //Show missing minutes.Countdown, 0 hours left ,show minutes (00: 59)
    if (currentDay == 24 && hours === 0 && numberData) {
        numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes.toString();
        if (textData) {
            textData.innerHTML = "Minutes";
        }
    }
    //Show missing seconds.Countdown, 0 minutes left, show seconds (00:00:59)
    if (currentDay == 24 && hours === 0 && minutes === 0 && numberData) {
        numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds.toString();
        if (textData) {
            textData.innerHTML = "Seconds";
        }
    }
    //Show message on Christmas Day
    if (currentMonth == 12 && currentDay == 25 && titleData && msgChristmas) {
        titleData.style.display = "none";
        msgChristmas.style.display = "block";
        msgChristmas.innerHTML = "Today is Dec 25, Merry Christmas";
    }
    //Show remaining days & remove Christmas message
    if (currentMonth == 12 && currentDay == 26 && titleData && msgChristmas) {
        titleData.style.display = "block";
        msgChristmas.style.display = "none";
    }
};
setInterval(christmasCountdown, 1000);
