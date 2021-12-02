$(function(){

    $('.header-slider').slick({
        dots: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/arrow-top.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/arrow-bottom.svg" alt=""></button>',
    });
    
    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="product-prev product-arrow"><img src="images/product-top.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next product-arrow"><img src="images/product-bottom.svg" alt=""></button>',
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,  
      });

});