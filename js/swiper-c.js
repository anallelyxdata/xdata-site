// Slider blog
    var swiper = new Swiper(".mySwiper", {
         mousewheel: {
            invert: true,
          },
        navigation:{
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove:true,
        autoplay: {
           delay: 5000,
         },
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
       768: {
          slidesPerView: 2,
            spaceBetween: 30,
        },

        1200: {
          slidesPerView: 3,
        },
        1400:{
            slidesPerView: 3,
        }
      },
      loop: true,
    });