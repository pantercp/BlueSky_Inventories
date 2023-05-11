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
