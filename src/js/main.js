import './vendor';

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('loaded');
    setTimeout(function() {
        preloader.style.display = "none";
    }, 2000);
};

$(document).ready(() => {
    var $window = $(window),
        topSlider = $('.slider-items'),
        productSlider = $('.product-slider-items.owl-carousel'),
        $nav = $('nav .submenu a'),
        $menu = $('#menu'),
        $header = $('header'),
        $newsSlider = $('.news-items.owl-carousel'),
        $iProductSlider = $('.js-product-slider'),
        $iProductDots = $('.js-product-slider-dots'),
        $fProductSlider = $('[data-fancybox="product-gallery"]'),
        $pDetailsShowBtn = $('.show-btn'),
        $pDetailsHideBtn = $("#hide-btn"),
        $otherSlider = $('.products-items.owl-carousel'),
        $phone = $('#phone'),
        $btn = $('.buttonRectangle');


    // header slider start
    var action = false,
        clicked = false;
    var Owl = {

        init: function() {
            Owl.carousel();
        },

        carousel: function() {
            var owl;
            $(document).ready(function() {

                owl = topSlider.owlCarousel({
                    items: 1,
                    autoplay: false,
                    autoHeight: true,
                    loop: true,
                    mouseDrag: false,
                    autoplaySpeed: 2000,
                    navSpeed: 2000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    autoplayHoverPause: false,
                    dotsContainer: '.slider-name-list',
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="422.562" height="799.781" viewBox="0 0 422.562 799.781"><path d="M54.978,400.089L416.119,38.9A22.635,22.635,0,0,0,384.11,6.883L6.882,384.167a22.561,22.561,0,0,0,0,32.013L384.11,793.3a22.77,22.77,0,0,0,15.921,6.7,22.074,22.074,0,0,0,15.92-6.7,22.561,22.561,0,0,0,0-32.013Z" transform="translate(-0.219 -0.219)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="423" height="800" viewBox="0 0 423 800"><path d="M368.184,400.02L6.669,761.312a22.65,22.65,0,0,0,32.042,32.022L416.33,415.947a22.554,22.554,0,0,0,0-32.022L38.711,6.706A22.8,22.8,0,0,0,22.773,0,22.106,22.106,0,0,0,6.837,6.706a22.555,22.555,0,0,0,0,32.021Z"/></svg>'],
                    onInitialized: startProgressBar,
                    onTranslate: resetProgressBar,
                    onTranslated: startProgressBar,
                    responsive: {
                        0: {
                            nav: false,
                            dots: true,
                            dotsContainer: false,
                        },
                        768: {
                            dots: true,
                            nav: true,
                        }
                    },
                });

                $('.owl-next').on('click', function() {
                    action = 'next';
                });

                $('.owl-prev').on('click', function() {
                    action = 'prev';
                });

                $('.slider-name').on('click', 'li', function(e) {
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                });
            });
        }
    };

    Owl.init();

    function startProgressBar() {
        $(".active .slide-progress i").css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress i").css({
            width: 0,
            transition: "width 0s"
        });
    }

    productSlider.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M26.055 47.042a3.11 3.11 0 0 1-2.263.944 3.244 3.244 0 0 1-2.264-.944L.925 26.265a3.164 3.164 0 0 1-.936-2.282c0-.866.312-1.653.936-2.282L21.528.924a3.185 3.185 0 0 1 4.527 0 3.25 3.25 0 0 1 0 4.565L7.715 23.983l18.34 18.494a3.25 3.25 0 0 1 0 4.565z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M.95 46.951a3.144 3.144 0 0 0 2.277.942c.785 0 1.648-.314 2.276-.942l20.723-20.723a3.144 3.144 0 0 0 .942-2.276c0-.863-.314-1.648-.942-2.276L5.503.953a3.222 3.222 0 0 0-4.553 0 3.222 3.222 0 0 0 0 4.553l18.447 18.446L.95 42.398a3.222 3.222 0 0 0 0 4.553z" /></svg>'],
        responsive: {
            0: {
                items: 1,
                margin: 20,
                autoWidth: false,
                navSpeed: 1000,
                dragEndSpeed: 1000,
            },
            768: {
                items: 2,
                margin: 70,
                autoWidth: true,
                navSpeed: 2000,
                dragEndSpeed: 2000,
            },
            1024: {
                items: 3,
                margin: 70,
                autoWidth: true,
                onInitialized: resetAddClass,
                onTranslate: startAddClass,
            }

        },
    });

    function startAddClass() {
        $(".active .product-slider-item").css({
            transform: "translate3d(-50px,0,0)",
            transition: "transform  2s cubic-bezier(.35, 0, 0, 1.01)"
        });
    }

    function resetAddClass() {
        $(".product-slider-item").css({
            transform: "translate3d(0,0,0)",
            transition: "transform  2s cubic-bezier(.35, 0, 0, 1.01)"
        });
    }

    $iProductSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.mobile-slider-info span').html('<i>' + i + '</i>' + '/' + '<font>' + slick.slideCount + '</font>');
    });

    $iProductDots.slick({
        asNavFor: ".js-product-slider",
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.product-details-slider-dots__btn--prev',
        nextArrow: '.product-details-slider-dots__btn--next',
        vertical: true,
        infinite: false,
        swipeToSlide: false,
        focusOnSelect: true,
    });

    $iProductSlider.slick({
        asNavFor: ".js-product-slider-dots",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
    });

    if ($window.width() >= 1024) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100 && !$header.hasClass('is-open')) {
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            }
        });
    } else {
        setTimeout(function() {
            $('.js-product-slider-mobile--info').fadeOut();
        }, 3000);
    }
    var bg = $('#changeImg').data('img');

    $nav.on({

        mouseenter: function() {
            var $thisSrc = $(this).data('src');
            $('#changeImg img').attr("src", $thisSrc);
        },
        mouseleave: function() {
            $('#changeImg img').attr("src", bg);
        }
    });

    $menu.on('click', function() {
        $('.mobile-menu, header').toggleClass('is-open');
        if ($header.hasClass('sticky')) {
            $header.removeClass('sticky')
        } else if ($(window).scrollTop() > 100 && !$header.hasClass('is-open')) {
            $header.addClass('sticky')
        }
        $('body').toggleClass('overflow');
    });

    $('.submenu-toggle').on('click', function() {
        $(this).toggleClass('is-active')
        $('.submenu').slideToggle();
    });

    $(window).on("load", function() {
        $(".mobile-menu-left").mCustomScrollbar({
            scrollInertia: 0,
            theme: "dark",
        });
    });

    $newsSlider.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 25,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayHoverPause: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M26.055 47.042a3.11 3.11 0 0 1-2.263.944 3.244 3.244 0 0 1-2.264-.944L.925 26.265a3.164 3.164 0 0 1-.936-2.282c0-.866.312-1.653.936-2.282L21.528.924a3.185 3.185 0 0 1 4.527 0 3.25 3.25 0 0 1 0 4.565L7.715 23.983l18.34 18.494a3.25 3.25 0 0 1 0 4.565z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M.95 46.951a3.144 3.144 0 0 0 2.277.942c.785 0 1.648-.314 2.276-.942l20.723-20.723a3.144 3.144 0 0 0 .942-2.276c0-.863-.314-1.648-.942-2.276L5.503.953a3.222 3.222 0 0 0-4.553 0 3.222 3.222 0 0 0 0 4.553l18.447 18.446L.95 42.398a3.222 3.222 0 0 0 0 4.553z" /></svg>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            }
        },
    });

    $otherSlider.owlCarousel({
        dots: false,
        nav: true,
        loop: false,
        thumbs: false,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M26.055 47.042a3.11 3.11 0 0 1-2.263.944 3.244 3.244 0 0 1-2.264-.944L.925 26.265a3.164 3.164 0 0 1-.936-2.282c0-.866.312-1.653.936-2.282L21.528.924a3.185 3.185 0 0 1 4.527 0 3.25 3.25 0 0 1 0 4.565L7.715 23.983l18.34 18.494a3.25 3.25 0 0 1 0 4.565z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48"><path d="M.95 46.951a3.144 3.144 0 0 0 2.277.942c.785 0 1.648-.314 2.276-.942l20.723-20.723a3.144 3.144 0 0 0 .942-2.276c0-.863-.314-1.648-.942-2.276L5.503.953a3.222 3.222 0 0 0-4.553 0 3.222 3.222 0 0 0 0 4.553l18.447 18.446L.95 42.398a3.222 3.222 0 0 0 0 4.553z" /></svg>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    });

    $fProductSlider.fancybox({
        loop: false,
        thumbs: {
            autoStart: true,
            axis: 'x'
        },
        buttons: [
            "zoom",
            // "share",
            "slideShow",
            "fullScreen",
            // "download",
            // "thumbs",
            "close"
        ],
    });

    $.fancybox.defaults.i18n.ru = {
        CLOSE: "Закрыть",
        NEXT: "Cледующий",
        PREV: "Предыдущий",
        ERROR: "Не удалось загрузить запрос. <br/> Пожалуйста, попробуйте еще раз.",
        PLAY_START: "Начать слайд-шоу",
        PLAY_STOP: "Пауза слайд-шоу",
        FULL_SCREEN: "Полный экран",
        THUMBS: "Эскизы",
        DOWNLOAD: "Cкачать",
        SHARE: "Поделиться",
        ZOOM: "Увеличить"
    };
    $.fancybox.defaults.lang = 'ru';

    var $pDetailsShowBtnShowTxt = $pDetailsShowBtn.html();
    var $pDetailsShowBtnHideTxt = $pDetailsHideBtn.html();

    $pDetailsShowBtn.on('click', function() {
        $('#product-details').slideToggle();
        $(this).toggleClass('show-btn hide-btn ico-down ico-up');
        if ($(this).hasClass('hide-btn')) {
            $(this).html($pDetailsShowBtnHideTxt);
        } else {
            $(this).html($pDetailsShowBtnShowTxt);
        }
    });

    $pDetailsHideBtn.on('click', function() {
        $('#product-details').slideUp();
        $pDetailsShowBtn.toggleClass('show-btn hide-btn ico-down ico-up');
        if ($pDetailsShowBtn.hasClass('hide-btn')) {
            $pDetailsShowBtn.html($pDetailsShowBtnHideTxt);
        } else {
            $pDetailsShowBtn.html($pDetailsShowBtnShowTxt);
        }
    });

    let onlyNumber = function onlyNumber(e) {
        let key = e.charCode || e.keyCode || 0;

        if (
            key === 8 ||
            key === 9 ||
            key === 13 ||
            key === 46 ||
            key === 110 ||
            key === 190 ||
            key >= 35 && key <= 40
        ) {} else if (key >= 48 && key <= 57 || key >= 96 && key <= 105) {} else {
            e.preventDefault();
        }
    };

    $phone.keydown(onlyNumber);

    var $btnWidth = $btn.innerWidth();

    $btn.mouseenter(function() {
        $(this).children('.buttonRectangle__hover').css({
            "right": "auto",
            "left": "0",
        }).animate({ "width": "100%" }, 200);
        $(this).children('.buttonRectangle__hover').children().css({
            "right": "auto",
            "left": "0",
        }).animate({ "width": $btnWidth, }, 1);
    });
    $btn.mouseleave(function(e) {
        $(this).children('.buttonRectangle__hover').css({
            "right": "0px",
            "left": "auto",
        }).animate({ "width": "0" }, 300)
        $(this).children('.buttonRectangle__hover').children().css({
            "right": "0px",
            "left": "auto",
        }).animate({ "width": $btnWidth, }, 1);
    });
});