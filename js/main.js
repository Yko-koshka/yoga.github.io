// scroll

const header = document.querySelector(".header");

function scroll() {
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
}

scroll();

// anchors

let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      anchorId = this.getAttribute("href");
      document.querySelector(anchorId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

// Burger

const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".header-inner__nav");
const menuCloseItem = document.querySelector(".header-inner__nav-close");

function burger() {
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-inner__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-inner__nav_active");
  });
}

burger();
