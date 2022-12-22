document.getElementById('currentYear').innerHTML = new Date().getFullYear();

function rotateToggleIcon(){
  var toggleIcon = document.getElementById('toggle-icon');
  if(toggleIcon.classList.contains('rotate-toggle-icon')){
    toggleIcon.classList.remove('rotate-toggle-icon');
    toggleIcon.classList.remove('toggle-icon-hover');
  }
  else{
    toggleIcon.classList.add('rotate-toggle-icon');
    toggleIcon.classList.add('toggle-icon-hover');
  }
}
document.getElementById('goToTop').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".filmSwiper", {
  slidesPerView:3,
  spaceBetween: 5,
  slidesPerGroup:3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 5,
    }
  }, 
});

var swiper2 = new Swiper(".GallerySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});