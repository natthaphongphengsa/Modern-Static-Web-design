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


window.onload = (event) => {  
  var playList = [
    {
      genre:"Ceremony",
      url:"https://www.youtube.com/embed/Lnjab17j960",
      imgSrc:"https://i.ytimg.com/vi/Lnjab17j960/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFkoSzAP&rs=AOn4CLD2lw-0-PEdCpLgk0NfiN-2Vlc4vw"
    },
    {
      genre:"Ceremony",
      url:"https://www.youtube.com/embed/RY6HV1pNZmY",
      imgSrc:"https://i.ytimg.com/vi/RY6HV1pNZmY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGIoUjAP&rs=AOn4CLDHd7KOE0GhXkKeylp6YhSDx4wBNA"
    },
    {
      genre:"Ceremony",
      url:"https://www.youtube.com/embed/g_dL86WrF4E",
      imgSrc:"https://i.ytimg.com/vi/g_dL86WrF4E/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFIoPjAP&rs=AOn4CLAyExS0Hktv0KLABcp1-O2FeBOgsQ"
    },
    {
      genre:"Ceremony",
      url:"https://www.youtube.com/embed/ISRL6vYV3vE",
      imgSrc:"https://i.ytimg.com/vi/ISRL6vYV3vE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhFIGUoNjAP&rs=AOn4CLA9JoXBAbLU2hamAHS6sb4vx-Audg"
    },
    {
      genre:"Wedding",
      url:"https://www.youtube.com/embed/LRhHvluhbnY",
      imgSrc:"https://i.ytimg.com/vi/LRhHvluhbnY/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_h2AAvAQigIMCAAQARhZIFQoZTAP&rs=AOn4CLC3GmMOFHOn996y3aAkkKOA5hiQcg"
    },
    {
      genre:"Wedding",
      url:"https://www.youtube.com/embed/k3fcVIcDCsc",
      imgSrc:"https://i.ytimg.com/vi/5He0AQzKlcw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMxlsdXnVeWrn5UtuYFNqDeQ3dBA"
    },
    {
      genre:"Wedding",
      url:"https://www.youtube.com/embed/5He0AQzKlcw",
      imgSrc:"https://i.ytimg.com/vi/k3fcVIcDCsc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIGAoWjAP&rs=AOn4CLDN_NRJcDIch1DzJmoJKSwpEitA4Q"
    },
  ];

  const element = document.getElementById('youtubeplaylist');
  var genreCount = 0;

  for (let index = 0; index < playList.length; index++) {          
    const video = playList[index];

    const image = document.createElement("img");
    image.setAttribute('src', `${video.imgSrc}`);
    image.setAttribute('alt', `${video.url}`);
    image.setAttribute('class','w-100 rounded-4 projects');

    const span = document.createElement("span");
    span.style.fontFamily = "Noto Sans,Arial,Helvetica,sans-serif";
    span.style.color = "#fff";
    span.style.fontSize ="28px";

    const arrow = document.createElement("i");
    arrow.setAttribute('class','bi bi-caret-right-fill');
    arrow.style.fontSize = "16px";

    const videoElement = document.createElement("a");
    videoElement.setAttribute('class','col-lg-3 pb-4 bg-transparent border-0');
    videoElement.appendChild(image);
    videoElement.href = `${video.url}`;

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
  console.log(playList)
};