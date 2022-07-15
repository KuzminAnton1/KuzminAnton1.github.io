$(function(){
    $('.menu-btn').on('click', function(){
        $('.menu-toggle').addClass('menu-toggle_active animate__animated animate__fadeInLeft wow');
        $('.main-toggle-menu').addClass('main-toggle-menu_active ');
        $('.menu-btn').removeClass('animate__animated animate__heartBeat');
        $('.sidebar').css('visibility','hidden')
        $('.sidebar').removeClass('animate__animated animate__zoomInLeft');
    })
    $('.menu-toggle__close').on('click',function(){
        $('.menu-toggle').removeClass('menu-toggle_active animate__animated animate__fadeInLeft wow');
        $('.main-toggle-menu').removeClass('main-toggle-menu_active ');
        $('.menu-btn').addClass('animate__animated animate__heartBeat');
        $('.sidebar').css('visibility','visible');
        $('.sidebar').addClass('animate__animated animate__zoomInLeft');

    })
    $('.nav__menu__item').on('click',function(){
        $('.menu-toggle').removeClass('menu-toggle_active animate__animated animate__fadeInLeft wow');
        $('.main-toggle-menu').removeClass('main-toggle-menu_active ');
        $('.menu-btn').addClass('animate__animated animate__heartBeat');
        $('.sidebar').css('visibility','visible');
        $('.sidebar').addClass('animate__animated animate__zoomInLeft');
    })

    new WOW().init();

    $(window).scroll(function(){
        if ($(window).scrollTop() > 700 && $(window).scrollTop() < 900){
            $('.pageup').fadeIn()
            $('.pageup svg').css('fill', '#158068')
        }else if($(window).scrollTop() > 900 && $(window).scrollTop() < 1600){
            $('.pageup').fadeIn()
            $('.pageup svg').css('fill', '#efeeb4')
        }else if($(window).scrollTop() > 1600 && $(window).scrollTop() < 2600){
            $('.pageup').fadeIn()
            $('.pageup svg').css('fill', '#158068')
        }else if($(window).scrollTop() > 2600){
            $('.pageup').fadeIn()
            $('.pageup svg').css('fill', '#efeeb4')            
        }else{
            $('.pageup').fadeOut()
        }
    })

    $('.policy-page').on('click',function(){
        $('.modal').toggleClass('modal_active');
        $('.menu-btn').removeClass('animate__animated animate__heartBeat');
    })
    $('.modal__close').on('click',function(){
        $('.modal').toggleClass('modal_active')
        $('.menu-btn').addClass('animate__animated animate__heartBeat');
    })

    $('#my-form').validate({
        rules: {
            name:{
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email:true
            },
            checkbox:{
                required: true
            }
        },
        messages:{
            name: {
                required: "Пожалуйста введите ваше имя",
                minlength: jQuery.validator.format("Введите больше {0} символов")
            },
            email:{
                required: "Пожалуйста введите ваш адрес электронной почты",
                email: "Неправильно введен адрес электронной почты"
            },
            checkbox:{
                required: "Дайте согласие на обработку ваших персональных данных"
            }
        }
    })

    $('#my-form').submit(function(e){
        e.preventDefault();
        if(!$(this).valid()){
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find('input').val("");


            $('#my-form').trigger('reset');
        });
        return false;
    });
});