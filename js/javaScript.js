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
  loop: false,
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
      slidesPerGroup:1,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup:1,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup:1,
    }
  }, 
});

fetch('./data/video.json')
.then((response) => response.json())
.then((json) => fetchVideo(json));

function fetchVideo(playList){      
  const element = document.getElementById('youtubeplaylist');
  var genreCount = 0;

  for (let index = 0; index < playList.length; index++) {          
    const video = playList[index];

    const videoElement = document.createElement("a");
    const innerElement = document.createElement("div");
    const overlay = document.createElement("div");
    const text = document.createElement("div");
    const image = document.createElement("img");
    const span = document.createElement("span");
    const arrow = document.createElement("i");
    const playIcon = document.createElement("i");

    playIcon.setAttribute('class','position-absolute text-primary m-0 bi bi-play-circle fs-1');

    image.setAttribute('src', `${video.poster}`);
    image.setAttribute('alt', `${video.link}`);
    image.setAttribute('class','w-100 rounded-4');

    overlay.setAttribute('class','videoInnerOverlay rounded-4 d-flex justify-content-center align-items-center');    
    overlay.append(playIcon);  

    innerElement.setAttribute('class','projects position-relative rounded-4');
    innerElement.append(image);    
    innerElement.append(overlay); 

    span.style.fontFamily = "Noto Sans,Arial,Helvetica,sans-serif";
    span.style.color = "#fff";
    span.style.fontSize ="28px";
    span.style.marginBottom = "6px";

    arrow.setAttribute('class','bi bi-caret-right-fill');
    arrow.style.fontSize = "16px";

    videoElement.setAttribute('class','col-lg-3 pb-4 bg-transparent border-0 responsive-w-50');
    videoElement.append(innerElement);
    videoElement.href = `${video.link}`;

    if(video.genre == "Ceremony"){
      if(genreCount == 0){
        span.innerHTML = `${video.genre} `;
        span.append(arrow);
        element.append(span);
        genreCount++;
      }
      element.append(videoElement);
    }
    else if(video.genre == "Wedding"){
      if(genreCount == 1){
        span.innerHTML = `${video.genre} `;
        span.append(arrow);
        element.append(span);
        genreCount++;
      }
      element.append(videoElement);
    }
  }
};

var ul = document.getElementsByClassName("navbar-nav");
var li = ul[0].children;

for (var i = 0; i < li.length; i++) {
  var link = li[i].children[0];
  link.addEventListener("click", function() 
  {
    for (let y = 0; y < li.length; y++) {
      var current = li[y].children[0];
      if(current.classList.contains('active')){
        current.classList.remove("active");
      }

      this.classList.add("active");    
    }
    Close();
  });
}

function Close(){    
  var element = document.getElementById('navbartoggle');
  element.classList.remove('show');
  element.classList.remove('collapsing');
  rotateToggleIcon(); 
}