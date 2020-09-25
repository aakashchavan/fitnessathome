$(function(){
    $('.slider__items').slick({
        slidesToShow: 2,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Предыдущее видео"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Следующее видео"></button>'
    });

    $('.catalog__slides').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Предыдущее видео"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Следующее видео"></button>'
    });

  
});
