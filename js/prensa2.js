$('#col1').click(function() {
    $('#col1').css('display', 'none');
    $('#col2').css('display', 'flex');
});

$('#col2').click(function() {
    $('#col2').css('display', 'none');
    $('#col3').css('display', 'flex');
});

$('#col3').click(function() {
    $('#col3').css('display', 'none');
    $('#col4').css('display', 'flex');
});

$('#col4').click(function() {
    $('#col4').css('display', 'none');
    $('#col5').css('display', 'flex');
});

$('#col5').click(function() {
    $('#col5').css('display', 'none');
    $('#col6').css('display', 'flex');
});

$('#col6').click(function() {
    $('#col6').css('display', 'none');
    $('#col1').css('display', 'flex');
    $('#collapseExample5').removeClass('show');
    $('#collapseExample4').removeClass('show');
    $('#collapseExample3').removeClass('show');
    $('#collapseExample2').removeClass('show');
    $('#collapseExample').removeClass('show');
});

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false
    // },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination1",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});

document.documentElement.style.setProperty('--swiper-theme-color', 'transparent');