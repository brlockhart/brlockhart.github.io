"use strict";
console.log("TEST CONTENT 2");
// ************************************
// ****** BACKGROUND TRANSITION *******
// ************************************
window.addEventListener("scroll", function () {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Calculate the percentage of the scroll position relative to the viewport height
  const viewportHeight = window.innerHeight;
  const scrollPercent = Math.min((scrollPosition / viewportHeight) * 2, 1);

  // Calculate the new background color based on the scroll percentage
  const startColor = [255, 255, 255]; // Start with black [4, 4, 4]
  const endColor = [4, 4, 4]; // End with white [255, 255, 255]

  if (scrollPosition === 0) {
    document.body.style.backgroundColor = `rgb(${startColor.join(",")})`;
  } else {
    const newColor = startColor.map((start, index) => {
      const end = endColor[index];
      return Math.round(start + (end - start) * scrollPercent);
    });

    // Apply the new color to the body background
    document.body.style.backgroundColor = `rgb(${newColor.join(",")})`;
  }
});

// Set the initial background color explicitly on page load
document.body.style.backgroundColor = "rgb(255, 255, 255)";

// ************************************
// ***** CARDS CLICK EVENT / MODAL ******
// ************************************
const body = document.body;
const cardsOpen = document.querySelectorAll(".card-container");
const cardClose = document.querySelectorAll(".icon-close");
const modalContainer = document.querySelector(".modal-container");
const modalContainerCatz = document.querySelector(".modal-catz");
const modalContainerOmnifood = document.querySelector(".modal-omnifood");
const modalContainerTribalRites = document.querySelector(".modal-tribalrites");

cardsOpen.forEach((card) => {
  card.addEventListener("click", function () {
    const cardId = this.getAttribute("data-id");

    //adding to modalContainer
    if (cardId === "modal-catz") {
      modalContainerCatz.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    } else if (cardId === "modal-omnifood") {
      modalContainerOmnifood.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    } else {
      modalContainerTribalRites.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    }
  });
});
cardClose.forEach((iconClose) => {
  iconClose.addEventListener("click", function () {
    const cardId = this.getAttribute("class");

    if (cardId === "icon-close icon-close-catz") {
      modalContainerCatz.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    } else if (cardId === "icon-close icon-close-omnifood") {
      modalContainerOmnifood.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    } else {
      modalContainerTribalRites.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    }
  });
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    body.classList.remove("body-overflow");
    modalContainerCatz.classList.remove("card-slide-in");
    modalContainerOmnifood.classList.remove("card-slide-in");
    modalContainerTribalRites.classList.remove("card-slide-in");
  }
});

// ************************************
// ******** Hamburger *********
// ************************************
const iconHamburger = document.querySelector(`.icon-hamburger`);
const iconX = document.querySelector(`.icon-x`);
const mainNav = document.querySelector(`.main-nav-links`);
const header = document.querySelector(`.header-container`);
const mainNavLink = document.querySelectorAll(".main-nav-link");

iconHamburger.addEventListener("click", function () {
  header.classList.add(`nav-open`);
  body.classList.add("body-overflow");
});
iconX.addEventListener("click", function () {
  header.classList.remove(`nav-open`);
  body.classList.remove("body-overflow");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    body.classList.remove("body-overflow");
    header.classList.remove(`nav-open`);
  }
});
mainNavLink.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove(`nav-open`);
    body.classList.remove("body-overflow");
  });
});
// ************************************
// ******** FOOTER STUFF *********
// ************************************
document.getElementById("copyright-year").textContent = new Date().getFullYear() + " Lockhart Web Solutions";

("use strict");

// ************************************
// ****** BACKGROUND TRANSITION *******
// ************************************
window.addEventListener("scroll", function () {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Calculate the percentage of the scroll position relative to the viewport height
  const viewportHeight = window.innerHeight;
  const scrollPercent = Math.min((scrollPosition / viewportHeight) * 2, 1);

  // Calculate the new background color based on the scroll percentage
  const startColor = [255, 255, 255]; // Start with black [4, 4, 4]
  const endColor = [4, 4, 4]; // End with white [255, 255, 255]

  if (scrollPosition === 0) {
    document.body.style.backgroundColor = `rgb(${startColor.join(",")})`;
  } else {
    const newColor = startColor.map((start, index) => {
      const end = endColor[index];
      return Math.round(start + (end - start) * scrollPercent);
    });

    // Apply the new color to the body background
    document.body.style.backgroundColor = `rgb(${newColor.join(",")})`;
  }
});

// Set the initial background color explicitly on page load
document.body.style.backgroundColor = "rgb(255, 255, 255)";

// ************************************
// ***** CARDS CLICK EVENT / MODAL ******
// ************************************
const body = document.body;
const cardsOpen = document.querySelectorAll(".card-container");
const cardClose = document.querySelectorAll(".icon-close");
const modalContainer = document.querySelector(".modal-container");
const modalContainerCatz = document.querySelector(".modal-catz");
const modalContainerOmnifood = document.querySelector(".modal-omnifood");
const modalContainerTribalRites = document.querySelector(".modal-tribalrites");

cardsOpen.forEach((card) => {
  card.addEventListener("click", function () {
    const cardId = this.getAttribute("data-id");

    //adding to modalContainer
    if (cardId === "modal-catz") {
      modalContainerCatz.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    } else if (cardId === "modal-omnifood") {
      modalContainerOmnifood.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    } else {
      modalContainerTribalRites.classList.add("card-slide-in");
      body.classList.add("body-overflow");
    }
  });
});
cardClose.forEach((iconClose) => {
  iconClose.addEventListener("click", function () {
    const cardId = this.getAttribute("class");

    if (cardId === "icon-close icon-close-catz") {
      modalContainerCatz.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    } else if (cardId === "icon-close icon-close-omnifood") {
      modalContainerOmnifood.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    } else {
      modalContainerTribalRites.classList.remove("card-slide-in");
      body.classList.remove("body-overflow");
    }
  });
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    body.classList.remove("body-overflow");
    modalContainerCatz.classList.remove("card-slide-in");
    modalContainerOmnifood.classList.remove("card-slide-in");
    modalContainerTribalRites.classList.remove("card-slide-in");
  }
});

// ************************************
// ******** Hamburger *********
// ************************************
const iconHamburger = document.querySelector(`.icon-hamburger`);
const iconX = document.querySelector(`.icon-x`);
const mainNav = document.querySelector(`.main-nav-links`);
const header = document.querySelector(`.header-container`);
const mainNavLink = document.querySelectorAll(".main-nav-link");

iconHamburger.addEventListener("click", function () {
  header.classList.add(`nav-open`);
  body.classList.add("body-overflow");
});
iconX.addEventListener("click", function () {
  header.classList.remove(`nav-open`);
  body.classList.remove("body-overflow");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    body.classList.remove("body-overflow");
    header.classList.remove(`nav-open`);
  }
});
mainNavLink.forEach((link) => {
  link.addEventListener("click", function () {
    header.classList.remove(`nav-open`);
    body.classList.remove("body-overflow");
  });
});
// ************************************
// ******** FOOTER STUFF *********
// ************************************
document.getElementById("copyright-year").textContent = new Date().getFullYear() + " Lockhart Web Solutions";
