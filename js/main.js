let closeIcon = document.querySelector(`.close`)
let show = document.querySelector(`.model`)
let btnShow = document.querySelector(`.btn-show`)
let wow = document.querySelectorAll(`.wow`)
window.onload = function(){
  window.scrollTo({
    top:0,
  })
  show.style.opacity =`1`;
}
function showOpacity(){
  show.style.display =`none`;
}

closeIcon.addEventListener(`click`,showOpacity);
btnShow.addEventListener(`click`,showOpacity);


// ##############################################





// ###############################################
let nav = document.querySelector(`.navbar`);
let btnnav = document.querySelector(`.btn-nav`);
let imgnav = document.querySelector(`.imgnav`);
let navitem = document.querySelectorAll(`.nav-item a`);


window.onscroll = function(){
  if(window.scrollY >= 60){
    nav.style.background = `var(--main-color)`;
    btnnav.style.background=`var(--color-h)`;
    btnnav.style.color=`var(--color-befor)`;
    imgnav.src= `img/pro-1/logo/logo color_2.svg`;
    navitem.forEach(function(ele){
      ele.style.color = `var(--color-h)`;
    })

  }else{
      nav.style.background = `none`;
      btnnav.style.background=` var(--main-color`;
      btnnav.style.color=`var(--color-h)`;
      imgnav.src= `img/pro-1/logo/ico-nav.svg`;
      navitem.forEach(function(ele){
        ele.style.color = `var(--main-color)`;
      })
    }
}
// ######################################################
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerGroup: 1,      // <<<----------------
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
    breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});


// ######################################################
let up = document.querySelector(`.up`);
up.onclick = function(){
  window.scrollTo({
    top:0,
  })
}
// ######################################################


