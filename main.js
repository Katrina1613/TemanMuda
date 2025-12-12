// ======================
// NAVBAR TOGGLE
// ======================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ======================
// SCROLL REVEAL CONFIG
// ======================
const scrollRevealOption = {
  distance: "60px",
  duration: 1200,
  delay: 200,
  easing: "ease-out",
  reset: true, // 🔥 animasi akan muncul lagi setiap kali discroll
};

// ======================
// HEADER SECTION
// ======================
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  origin: "top",
  scale: 0.8,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 400,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 600,
});
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});

// ======================
// EXPLORE SECTION
// ======================
const explore = document.querySelector(".explore__wrapper-inner");
if (explore) {
  const exploreContent = Array.from(explore.children);
  exploreContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    explore.appendChild(duplicateNode);
  });
}

ScrollReveal().reveal(".explore__text", {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 200,
  scale: 0.9,
});

// ======================
// ABOUT SECTION
// ======================
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about__content", {
  ...scrollRevealOption,
  origin: "right",
  interval: 200,
});

// ======================
// DESTINATION / CARD SECTIONS
// ======================
ScrollReveal().reveal(".destination__card, .discover__card, .banner__card", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 200,
  scale: 0.9,
});

// ======================
// MIXITUP FILTER
// ======================
document.addEventListener("DOMContentLoaded", function () {
  var containerEl = document.querySelector("#mix-container");

  if (containerEl) {
    mixitup(containerEl);
  } else {
    console.log("Mix container tidak ditemukan");
  }
});

// ======================
// SHOWCASE SECTION
// ======================
ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  origin: "top",
  delay: 300,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 600,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 900,
  scale: 1.1,
});

// =================================
// SWIPER DENAH – FIX SLIDESPER VIEW
// =================================
const denahSwiper = new Swiper(".denah-slide", {
  loop: true,
  slidesPerView: 1, // ❗ penting → tampil 1 saja
  centeredSlides: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".denah-next",
    prevEl: ".denah-prev",
  },
});

const testimonialSwiper = new Swiper(".testimonial-slider", {
  loop: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  speed: 650 /* animasi lebih smooth */,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 } /* tampil 3 card */,
  },
});

// ======================
// FOOTER / CTA SECTION
// ======================
ScrollReveal().reveal("footer, .cta, .contact__form, .social__icons", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 150,
  scale: 0.9,
});

// ======================
// SWIPER SLIDER (if used)
// ======================
const cardSwiper = new Swiper(".card-slider", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
