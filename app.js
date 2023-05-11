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

const header = document.querySelector("#header");
const sectionOne = document.querySelector(".hero-section");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
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