$(function(){
    $('.persons-list-item__link_detail').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.persons-list-item').eq(i).toggleClass('persons-list-item__active');
            $('.persons-list-item').eq(i).removeClass('persons-list-item__hidden');
        })
    })
    $('.persons-list-item__link_back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.persons-list-item').eq(i).toggleClass('persons-list-item__hidden');
            $('.persons-list-item').eq(i).removeClass('persons-list-item__active');
        })
    })

    $('#registration-form').validate({
        rules:{
            name:{
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            name: {
                required: "Please enter your name",
            },
            email:{
                required: "Please enter your email",
                email: "incorrect email input"
            },
            password:{
                required: "Please enter your password",
            }
        }
    });

    $('#modal-form').validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            email:{
                required: "Please enter your email",
                email: "incorrect email input"
            },
            password:{
                required: "Please enter your password",
            }
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 900){
            $('.pageup').fadeIn()
        }else{
            $('.pageup').fadeOut()
        }
    })

    new WOW().init();
})