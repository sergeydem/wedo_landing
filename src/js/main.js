$( document ).ready(function() {

   function seoChangeButton(fisrt, second, slideOne, slideTwo) {
       $('.btn_arrow'+fisrt).addClass('active-button');
       $('.result-seo .btn_arrow'+ second).removeClass('active-button');
       $('.result-content'+slideOne).css('display', 'block');
       $('.result-content'+slideTwo).css('display', 'none');
   }

//блок результаты seo. переключение между слайдами
    $(".result-seo .btn_arrow.first-btn").on('click', function () {
        seoChangeButton('.first-btn', '.second-btn' , '.first-slide', '.second-slide');
    });
    $(".result-seo .btn_arrow.second-btn").on('click', function () {
        seoChangeButton( '.second-btn','.first-btn', '.second-slide', '.first-slide');
    });

// функция скролла к сео блокам
    function goToByScroll(id){
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $(".list-button_bottom .btn_arrow").on('click', function () {
        goToByScroll('id-btn-seo');
    });

//аккордион, контекстная реклама. десктоп
    $(".s-accordion .panel").on('click', function() {
        var $this = $(this);
        $this.css('width','55%');
        $(".s-accordion .panel").addClass('active-tab');
        $this.siblings('div').css('width','15%');
        $this.siblings($this).removeClass('active-tab');
    });

//таблица тарифов в контекстной рекламе
    function changeTable(col1, col2, one, two) {
        $(".custom-table " + col1).css("display","none");
        $(".custom-table "+ col2).css("display","table-cell");
        $(".btn-tariff.btn-tariff-"+one).addClass("btn-tariff_active");
        $(".btn-tariff.btn-tariff-"+two).removeClass("btn-tariff_active");
    }
    $(".btn-tariff.btn-tariff-one").click(function () {
        changeTable('.t-col3', '.t-col2', 'one', 'two')
    });
    $(".btn-tariff.btn-tariff-two").click(function () {
        changeTable('.t-col2', '.t-col3', 'two', 'one')
    });

//слайдер работ в контекстной рекламе
    $('.slider-work').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        dots: false,
        nav: true,
        navText: ["<img src='../img/Arrows-Back-icon.png'>","<img src='../img/Arrows-Back-icon.png'>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:1
            }
        }
    });

//слайдер другие методы
    $('.slider-other-mathods').owlCarousel({
        nav: false,
        dots: true,
        responsive:{
            0:{
                loop: true,
                items: 1
            },
            600:{
                margin: 10,
                loop: true,
                items: 2
            },
            1000:{
                dots: false,
                margin: 10,
                loop: false,
                items: 2,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });

//слайдер работ в smm
    $('.slider-result-smm').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        dots: false,
        nav: true,
        autoHeight:true,
        navText: ["<img src='../img/Arrows-Back-icon.png'>","<img src='../img/Arrows-Back-icon.png'>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:1
            }
        }
    });

//слайдер графиков
    $('.chart-slider1').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        dots: false,
        nav: true,
        navText: ["<img src='../img/Arrows-Back-icon.png'>","<img src='../img/Arrows-Back-icon.png'>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:3
            }
        }
    });
    $('.chart-slider2').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        dots: false,
        nav: true,
        navText: ["<img src='../img/Arrows-Back-icon.png'>","<img src='../img/Arrows-Back-icon.png'>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:3
            }
        }
    });

//слейдер продвижения им
    $('.slider-seo').owlCarousel({
        nav: false,
        dots: true,
        responsive:{
            0:{
                loop: true,
                items: 1
            },
            600:{
                margin: 10,
                loop: true,
                items: 2
            },
            1000:{
                dots: false,
                margin: 10,
                loop: false,
                items: 3,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });

//слайдер работ на стр ИМ
    $('.slider-work-im').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:7000, //Время смены слайда
        dots: false,
        nav: true,
        navText: ["<img src='../img/Arrows-Back-icon.png'>","<img src='../img/Arrows-Back-icon.png'>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:1
            }
        }
    });

//селектрик. вроде кастомный
    $(function() {
        $('select').selectric();
    });

//движения фона в шапке
    var currentX = '';
    var currentY = '';
    var movementConstant = .015;
    $(document).mousemove(function(e) {
        if(currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if(currentY == '') currentY = e.pageY;
        var ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('.parallax div').each(function(i, el) {
            var movement = (i + 1) * (xdiff * movementConstant);
            var movementy = (i + 1) * (ydiff * movementConstant);
            var newX = $(el).position().left + movement;
            var newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY + 'px');
        });
    });

//timeline
    (function() {
        'use strict';
        // define variables
        var items = document.querySelectorAll(".timeline li");
        // check if an element is in viewport
        // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

    })();

//открытие модального окна
    $('#myModal').on('shown.bs.modal', function () {
        // $('#myInput').focus()
    });

//плавый скролл
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

//Аякс отправка форм
//Документация: http://api.jquery.com/jquery.ajax/
// var formArr = ['order-kr-form','callback-form-kr','discover-form', 'freecalc-kr-form', 'callback-form'];
    var formArrModal = ['modal-callback-kr','modal-discover-kr','modal-order-kr','modal-free-cosult-kr', 'modal-freecalc-kr', 'myModal', 'modal-free-audit-seo', 'modal-order-promotion-seo1', 'modal-order-promotion-seo2', 'modal-order-consultation-seo', 'modal-discover-smm', 'modal-same-smm', 'modal-order-consultation-smm'];
    formArrModal.forEach(function (elem) {
        var singleFotm = $('#'+ elem).find('form');
        var _modal =  $('#'+ elem);
        singleFotm.submit(function () {
            var str =  $(this).find("input[id^='phone']").val();
            var found = str.match(/(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/);
            var testNumber = str && found !== null;
            if (testNumber) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(this).serialize()
                }).done(function() {
                    _modal.modal('toggle');
                    $('#modal-thank').modal('toggle');
                });
            }
            else {
                $('.errorMessage').css("display","block");
            }
            return false;
        })
    });


    $('#open-close').show();
    $('.wrap-alert').show();

    $('#open-close').click(function(event) {
        event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
        $('.wrap-alert').slideToggle();
    });


//PARALLAX в шапке стр ИМ
    $(window).scroll(function () {
        $(".header-im").css("background-position","50% " + (-$(this).scrollTop() / 2) + "px");
    });
//END PARALLAX

//HOVER BUTTON в таб на стр ИМ
    $(".table-container-footer .btn-pink").each(function (index, elem) {
        var elemIndex = index + 2;
        var _this = $(this);
        _this.hover(function(){
            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").css({"background-color": "rgba(68,125,152,.07)",  "transition": "all 0.3s ease-in"});
        },function(){
            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").css({"background-color": "transparent",  "transition": "all 0.3s ease-in"});
        }).click(function () {
            $(".table-container-body tr td").each(function () {
                if ($(this).hasClass( "clicked" )) $(this).removeClass("clicked")
            });

            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").addClass("clicked");
        });
    });


//TABS стр ИМ
    wrapper   = $(".tabs-im");
    tabs      = wrapper.find(".tab-im");
    tabToggle = wrapper.find(".tab-toggle-im");
    function openTab() {
        var content     = $(this).parent().next(".content"),
            activeItems = wrapper.find(".active");
        if(!$(this).hasClass('active')) {
            $(this).add(content).add(activeItems).toggleClass('active');
            wrapper.css('min-height', '400px' );
        }
    };

    tabToggle.on('click', openTab);
    tabToggle.first().trigger('click');
//END TABS


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


//таблица на стр ИМ
    var $body = $(".table-container-body"),
        $header = $(".table-container-header"),
        $footer = $(".table-container-footer");

// Get ScrollBar width(From: http://bootstrap-table.wenzhixin.net.cn/)
    var scrollBarWidth = (function () {
        var inner = $('<p/>').addClass('fixed-table-scroll-inner'),
            outer = $('<div/>').addClass('fixed-table-scroll-outer'),
            w1, w2;
        outer.append(inner);
        $('body').append(outer);
        w1 = inner[0].offsetWidth;
        outer.css('overflow', 'scroll');
        w2 = inner[0].offsetWidth;
        if (w1 === w2) {
            w2 = outer[0].clientWidth;
        }
        outer.remove();
        return w1 - w2;
    })();

// Scroll horizontal
    $body.on('scroll', function () {
        $header.scrollLeft($(this).scrollLeft());
        $footer.scrollLeft($(this).scrollLeft());
    });

// Redraw Header/Footer
    var redraw = function() {
        var tds = $body.find("> table > tbody > tr:first-child > td");
        tds.each(function (i) {
            var width = $(this).innerWidth(),
                lastPadding = (tds.length -1 == i ? scrollBarWidth : 0);
            lastHeader = $header.find("th:eq("+i+")").innerWidth(width + lastPadding);
            lastFooter = $footer.find("th:eq("+i+")").innerWidth(width + lastPadding);
        });
    };

// Selection
    $body.find("> table > tbody > tr > td").click(function(e) {
        $body.find("> table > tbody > tr").removeClass("info");
        $(e.target).parent().addClass('info');
    });

// Listen to Resize Window
    $(window).resize(redraw);
    redraw();
//конец таблицы на стр ИМ






});
