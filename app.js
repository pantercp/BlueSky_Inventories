// Burger and Drop Menu

const burgerBtn = document.querySelector('.row-burger');
const dropMenu = document.querySelector('.drop-menu');
const navTitle = document.querySelector('.logo-title');

let menuOpen = false;
burgerBtn.addEventListener('click', () => {
  if (!menuOpen) {
    burgerBtn.classList.add('open');
    dropMenu.classList.add('open');
    navTitle.classList.add('open');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    dropMenu.classList.remove('open');
    navTitle.classList.remove('open');
    menuOpen = false;
  }
});

// Page Finder

const pageFinder = document.querySelector(".page-finder");
const pageList = document.querySelector(".drop-list").children;

document.addEventListener('DOMContentLoaded', function() {
   for(pageItem of pageList){
    if(pageFinder.id == pageItem.firstChild.innerHTML){
      pageItem.classList.add("open")
    }
   }
}, false);



// Intersection Animations

const header = document.querySelector("#header");
const sectionOne = document.querySelector(".hero-section");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 0.3,
  // rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
  (function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  },
    appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})