$(function(){
    $('.car_pic').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<div class="prev_btn"><i class="xi-angle-left"></i></div>',
        nextArrow:'<div class="next_btn"><i class="xi-angle-right"></i></div>',
        dots: true,
        customPaging: function( e,i){
            let dotDesc = [
                '[PALISADE]',
                '[GRANDEUR]',
                '[STARIA]',
                '[KONA]',
                '[CASPER]'
              ]
            let dotDesc2 = [
              '당신의 모든 세상',
              '성공을 새롭게 정의하다',
              '삶의 여유',
              'Be NIMBLE!',
              'case by CASPER'
            ]
          return `<div class="car_btn car_btn${i}">
            <div class="car_text">
              ${dotDesc[i]}
            </div>
            <div class="car_btn0${i}">
              ${dotDesc2[i]}
            </div>
            <div class="car_bar"></div>
          </div>`;
        }
    })
    $('.car_pic').on('afterChange',function(event, slick, currentSlide) {
      if( currentSlide == 0 ) {
        $('.car_btn').css('color','#888')
        $('.car_bar').css('background-color','#555')
        $('.car_btn0').css('color','#fff')
        $('.car_btn0 .car_bar').css('background-color','#fff')
        console.log($(this))

      }else if(currentSlide == 1) {
        $('.car_btn').css('color','#888')
        $('.car_bar').css('background-color','#555')
        $('.car_btn1').css('color','#fff')
        $('.car_btn1 .car_bar').css('background-color','#fff')
      }else if(currentSlide == 2) {
        $('.car_btn').css('color','#888')
        $('.car_bar').css('background-color','#555')
        $('.car_btn2').css('color','#fff')
        $('.car_btn2 .car_bar').css('background-color','#fff')
      }else if(currentSlide == 3) {
        $('.car_btn').css('color','#888')
        $('.car_bar').css('background-color','#555')
        $('.car_btn3').css('color','#fff')
        $('.car_btn3 .car_bar').css('background-color','#fff')
      }else if(currentSlide == 4) {
        $('.car_btn').css('color','#888')
        $('.car_bar').css('background-color','#555')
        $('.car_btn4').css('color','#fff')
        $('.car_btn4 .car_bar').css('background-color','#fff')
      }
    })
    $('.car_btn').mouseenter(function(){
      $(this).css('color','#fff')
      $(this).children('.car_bar').css('background-color','#fff')
    })
    $('.car_btn').mouseleave(function(){
      $(this).css('color','#888')
      $(this).children('.car_bar').css('background-color','#555')
    })

    $('.car_box').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:'<div class="prev_btn"><i class="xi-angle-left"></i></div>',
      nextArrow:'<div class="next_btn"><i class="xi-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    });

    $('.line_up_car1').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:'<div class="prev_car_btn"><i class="xi-angle-left"></i></div>',
      nextArrow:'<div class="next_car_btn"><i class="xi-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 821,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    });
    $(document).on('click','.xi-bars',function(){
      $(this).css('display','none')
      $('.xi-close').css('display','block')
      $('.hide_nav_frame1').css('display','block')
    });
    $(document).on('click','.xi-close',function(){
      $(this).css('display','none')
      $('.hide_nav_frame1').css('display','none')
      $('.xi-bars').css('display','block')
    });
});
