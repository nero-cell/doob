'use strict';

$(function() {
    $('a').click(function() {
        let scrollingTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(scrollingTo).offset().top
        }, 1000);
    });

    if ($(this).width() < 768) {
        $('.header__contact-us-button')
            .appendTo('.header__links');
    } else {
        $('.header__contact-us-button')
            .appendTo('.header__menu');
    }

    $(window).resize(function() {
        if ($(this).width() < 768) {
            $('.header__contact-us-button')
                .appendTo('.header__links');
        } else {
            $('.header__contact-us-button')
                .appendTo('.header__menu');
        }
    });

    
    $('.header__lang-settings').click(function() {
        $('.header__lang-menu').slideToggle(300);
    });

    $('.header__burger').click(function() {
        $(this).toggleClass('open');
        $('.header__links').slideToggle(300);
    });

    $(window).click(function(event) {
        let langSettings = document
            .querySelector('.header__lang-settings');

        if (!langSettings.contains(event.target)) {
            $('.header__lang-menu').slideUp(300);
        }

        
        let headerLinks = document.querySelector('.header__links');
        let headerBurger = document.querySelector('.header__burger');

        if (!headerLinks.contains(event.target) 
            && !headerBurger.contains(event.target)
            && $(window).width() <= 1100) {
            $('.header__burger').removeClass('open');
            $('.header__links').slideUp(300);
        }
    });


    $('.blog__item').mouseenter(function() {
        $(this).addClass('active');
        $(this).find('.blog__item-title').addClass('active');
        $(this).find('.blog__date').addClass('active');
        $(this).find('.blog__text').addClass('active');
        $(this).find('.blog__arrow img').attr('src', 'img/blog/blog02.svg');
    });

    $('.blog__item').mouseleave(function() {
        $(this).removeClass('active');
        $(this).find('.blog__item-title').removeClass('active');
        $(this).find('.blog__date').removeClass('active');
        $(this).find('.blog__text').removeClass('active');
        $(this).find('.blog__arrow img').attr('src', 'img/blog/blog01.svg');
    });
});