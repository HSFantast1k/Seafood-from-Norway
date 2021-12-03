$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.header-slider').slick({
      dots: true,
      fade: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/arrow-top.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/arrow-bottom.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 371,
          settings: {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }
      ]
  });
  
  $('.product__name').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="product-prev product-arrow"><img src="images/product-top.svg" alt=""></button>',
      nextArrow: '<button type="button" class="product-next product-arrow"><img src="images/product-bottom.svg" alt=""></button>',
      asNavFor: '.product__content',
      vertical: true,
      responsive: [
        {
          breakpoint: 891,
          settings: {
            slidesToShow: 2,
            vertical: false,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            vertical: false,
            arrows: false,
            dots: true,
          }
        }
      ]
    });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,        
  });

});