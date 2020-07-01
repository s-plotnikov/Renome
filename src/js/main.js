$(function () {

    $('.slider__inner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/slider-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/slider-right.png" alt=""></button>',
        // responsive: [
        //   {
        //     breakpoint: 900,
        //     settings: {
        //       arrows: false,
        //     }
        //   },
        // ]
      });

      $('.shop__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/shop_slider/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/shop_slider/arrow-right.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: true,
            }
          },
        ]
      });

      $('.menu__btn').on('click', function(){
        $('.header__menu').slideToggle();
      });
});