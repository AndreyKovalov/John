
let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__body');
menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('_active');
   menu.classList.toggle('_active');
})
