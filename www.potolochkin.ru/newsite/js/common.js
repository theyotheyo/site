window.odometerOptions = {
    format: '( ddd).dd',
    duration: 1000
};
$(document).ready(function () {
    function initExamplesSlider() {
        $('.examples_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            fade: true,
            asNavFor: '.examples_thumbnails',
            prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="prev-arrow" width="24px" height="42px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M23.985,39.194 L21.164,41.994 L2.827,23.799 L2.827,23.799 L0.006,20.999 L21.164,0.005 L23.985,2.804 L5.648,21.000 L23.985,39.194 Z"/></svg>',
            nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="next-arrow" width="25px" height="44px"> <path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M3.000,43.213 L0.172,40.384 L18.556,21.999 L0.172,3.615 L3.000,0.786 L24.213,21.999 L3.000,43.213 Z"/></svg>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    dots: true
                  }
                }
              ]
        });

        $('.examples_thumbnails').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.examples_slider',
            focusOnSelect: true
        });
    }

    function initVideoPopups() {
        $('[data-fancybox="video_popup"]').fancybox({
            buttons: [
                'close'
            ]
        })
    }

    function fillStarsRate() {
        var remainder = 0

        $('.stars_rate').each((i, el) => {
            var rate = $(el).data('rate')
            remainder = Math.round(rate % 1 * 10) / 10
            var isNotUsed = true
            var first = true
            for (var i = 0; i < 5; i++) {
                if (i + 1 > rate) {
                    if (isNotUsed) {
                        $(el).append('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="15px" height="14px"><path fill-rule="evenodd"  fill="rgb(211, 217, 220)"d="M7.506,-0.011 L9.757,4.688 L15.011,5.336 L11.149,8.888 L12.144,13.988 L7.506,11.484 L2.867,13.988 L3.862,8.888 L-0.000,5.336 L5.254,4.688 L7.506,-0.011 Z"/></svg>')
                        $(el).append('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="' + 15 * remainder + 'px" style="transform:translateX(-15px);margin-right:-10px" height="14px"><defs> <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="rgb(252,153,61)" stop-opacity="1" /><stop offset="100%" stop-color="rgb(211, 217, 220)" stop-opacity="1" /></linearGradient>  </defs>  <path fill="url(#PSgrad_0)" d="M7.506,-0.011 L9.757,4.688 L15.011,5.336 L11.149,8.888 L12.144,13.988 L7.506,11.484 L2.867,13.988 L3.862,8.888 L-0.000,5.336 L5.254,4.688 L7.506,-0.011 Z"/></svg>')
                        isNotUsed = false
                    } else if (first) {
                        $(el).append('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-left:' + (15 - 15 * remainder) + 'px;margin-right:5px;" width="15px" height="14px"><path fill-rule="evenodd"  fill="rgb(211, 217, 220)"d="M7.506,-0.011 L9.757,4.688 L15.011,5.336 L11.149,8.888 L12.144,13.988 L7.506,11.484 L2.867,13.988 L3.862,8.888 L-0.000,5.336 L5.254,4.688 L7.506,-0.011 Z"/></svg>')
                        first = false
                    } else {
                        $(el).append('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right:5px;" width="15px" height="14px"><path fill-rule="evenodd"  fill="rgb(211, 217, 220)"d="M7.506,-0.011 L9.757,4.688 L15.011,5.336 L11.149,8.888 L12.144,13.988 L7.506,11.484 L2.867,13.988 L3.862,8.888 L-0.000,5.336 L5.254,4.688 L7.506,-0.011 Z"/></svg>')
                    }
                    continue;
                }
                $(el).append('<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right:5px;" width="15px" height="14px"><defs> <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="rgb(252,153,61)" stop-opacity="1" /><stop offset="100%" stop-color="rgb(211, 217, 220)" stop-opacity="1" /></linearGradient>  </defs>  <path fill="url(#PSgrad_0)" d="M7.506,-0.011 L9.757,4.688 L15.011,5.336 L11.149,8.888 L12.144,13.988 L7.506,11.484 L2.867,13.988 L3.862,8.888 L-0.000,5.336 L5.254,4.688 L7.506,-0.011 Z"/></svg>')
            }
        })
    }

    function setFirstScreenVideo() {
        function setWhiteColor(){
            $('.firstscreen_caption p, .logo_text p:last-child, .header_phone p, .callback_button').css({
                borderColor: '#fff',
                color: '#fff'
            })
        }

        function setFirstScreenText(screen){
            switch(screen){
                case 'weekend': 
                    $('.firstscreen_cloud_text').html('Позвони <span class="big_cloud_highlight"><span class="black">в</span> выходные <span class="black">и</span></span> получи супер-скидку -44% на все виды потолков')
                    break
                case 'night':
                    $('.firstscreen_cloud_text').html('Оставь заявк<span class="big_cloud_highlight"><span class="black">у</span> ночью <span class="black">и</span></span> получи супер-скидку -44% на все виды потолков')
                    break
                case 'calendar':
                    $('.firstscreen_cloud_text').html('П<span class="big_cloud_highlight"><span class="black">о </span><span id="day_of_week"></span> <span class="black">у</span></span> нас скидка -44% на натяжные потолки')
                    break
            }
        }

        var hour = new Date().getHours();
        var currentDay = new Date().getDay();
        // проверка выходного дня
        if (currentDay == 6 || currentDay == 0) {
            if($('body').hasClass('mobile')){
                $('.firstscreen').css('background-color', '#6bce3f')
            }else{
                $('.weekend_bg').show()
            }
            $('.weekend_bg, .weekend_video').show()
            setFirstScreenText('weekend')
            hideStars()
        } else if(!((hour >= 22) || (hour <= 6))){
            if($('body').hasClass('mobile')){
                $('.firstscreen').css('background-color', '#3a8dca')
            }else{
                $('.calendar_bg').show()
            }
            hideRuffles()
            $('.calendar_video').show()
            setWhiteColor()
            $('body').addClass('calendar_video_display')
            setFirstScreenText('calendar')
            hideStars()
        }else{
            if($('body').hasClass('mobile')){
                $('.firstscreen').css('background-color', '#311069')
            }else{
                $('.night_bg').show()
            }
            hideRuffles()
            $('.night_video').show();
            setWhiteColor()
            setFirstScreenText('night')
        }
    }

    function setPromoDate() {
        // последний день месяца
        function getLastDayOfMonth(year, month) {
            var date = new Date(year, month + 1, 0);
            return date.getDate();
        }
        var date = new Date()
        var days = ['воскресеньям', 'понедельникам', 'вторникам', 'средам', 'четвергам', 'пятницам', 'субботам'];

        function getWeekDay(date) {
            var day = date.getDay();
        
            return days[day];
        }

        $('#day_of_week').text(getWeekDay(date))

        // проверка месяца
        switch (date.getMonth()) {
            case 0:
                $('.promo_month').html('января')
                break
            case 1:
                $('.promo_month').html('февраля')
                break
            case 2:
                $('.promo_month').html('марта')
                break
            case 3:
                $('.promo_month').html('апреля')
                break
            case 4:
                $('.promo_month').html('мая')
                break
            case 5:
                $('.promo_month').html('июня')
                break
            case 6:
                $('.promo_month').html('июля')
                break
            case 7:
                $('.promo_month').html('августа')
                break
            case 8:
                $('.promo_month').html('сентября')
                break
            case 9:
                $('.promo_month').html('октября')
                break
            case 10:
                $('.promo_month').html('ноября')
                break
            case 11:
                $('.promo_month').html('декабря')
                break
        }

        // проверка дат
        foo = date.getDate();
        switch (true) {
            case foo >= 1 && foo <= 4:
                $('.promo_day').html('5')
                break
            case foo >= 5 && foo <= 9:
                $('.promo_day').html('10')
                break
            case foo >= 10 && foo <= 14:
                $('.promo_day').html('15')
                break
            case foo >= 15 && foo <= 19:
                $('.promo_day').html('20')
                break
            case foo >= 20 && foo <= 24:
                $('.promo_day').html('25')
                break
            case foo >= 25 && foo <= getLastDayOfMonth(date.getFullYear(), date.getMonth()):
                $('.promo_day').html(getLastDayOfMonth(date.getFullYear(), date.getMonth()))
                break
        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.digits_block').offset().top - 700) {
            $('.odometer').each(function (i, el) {
                $(el).text($(el).data('digit'))
            })
        }
        if ($(this).scrollTop() > $('.line_rate_box').offset().top - 600) {
            $('.line_rate_filled').each(function (i, el) {
                $(el).animate({
                    width: $(el).data('width')
                }, 1000)
            })
        }
    });

    $('.reviews_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        draggable: false,
        swipe: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    $('.more_reviews_btn').click(function(){
        $('.reviews_wrapper').slick('slickNext');
    })

    function resizeHandler(){
        if(window.innerWidth < 991){
            $('.firstscreen_video').css('left', '')
        }else if(window.innerWidth < 1199){
            $('.calendar_video_display .calendar_video').css({left: $('.calendar_video_display .bubble2').offset().left - 150})
        }else if($('body').hasClass('calendar_video_display')){
            $('.calendar_video_display .calendar_video').css({left: $('.calendar_video_display .bubble2').offset().left - 50})
        }
        if(window.innerWidth > 1920){
            $('.weekend_video').css({left: $('.firstscreen_cloud_wrapper').offset().left - 700})
            $('.night_video').css({left: $('.firstscreen_cloud_wrapper').offset().left - 400})
        }else{
            $('.firstscreen_video').not('.calendar_video_display .calendar_video').css('left','')
        }
        if(window.innerWidth < 768){
            $('.vertical_layout').removeClass('vertical_layout')
        }
        if(window.innerWidth < 420){
            $('.advantages_items').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                fade: true,
                prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="advantages_prev" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="42px"><defs><linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="rgb(255,155,51)" stop-opacity="1" /><stop offset="100%" stop-color="rgb(255,190,78)" stop-opacity="1" /></linearGradient></defs><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M23.985,39.195 L21.164,41.994 L0.006,21.000 L2.827,18.200 L2.827,18.200 L21.164,0.005 L23.985,2.804 L5.648,20.999 L23.985,39.195 Z"/><path fill="url(#PSgrad_0)"d="M23.985,39.195 L21.164,41.994 L0.006,21.000 L2.827,18.200 L2.827,18.200 L21.164,0.005 L23.985,2.804 L5.648,20.999 L23.985,39.195 Z"/></svg>',
                nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" class="advantages_next" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="44px"><defs><linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%"><stop offset="0%" stop-color="rgb(255,155,51)" stop-opacity="1" /><stop offset="100%" stop-color="rgb(255,190,78)" stop-opacity="1" /></linearGradient></defs><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M3.000,43.213 L0.172,40.384 L18.557,22.000 L0.172,3.615 L3.000,0.786 L24.213,22.000 L3.000,43.213 Z"/><path fill="url(#PSgrad_0)"d="M3.000,43.213 L0.172,40.384 L18.557,22.000 L0.172,3.615 L3.000,0.786 L24.213,22.000 L3.000,43.213 Z"/></svg>'
            });
        }
    }

    function hideRuffles(){
        $('.ruffle1_img, .ruffle2_img').hide()
    }

    function hideStars(){
        $('.star1, .star2, .star3').hide()
    }

    window.onresize = resizeHandler

    $('.open-popup-link').magnificPopup();

    $('.close_popup, .popup_button').click(function(){
        $('.popup').magnificPopup('close')
    })

    $('input[type="tel"]').inputmask({"mask": "(999) 999 99 99"});

    $('.popup_button').click(function(){
        $(this).parents('form').submit()
    })

    $('.tooltop_button').click(function(){
        $('.dropdown_tooltip').fadeOut(200)
    })

    $('.dropdown_select').click(function(){
        if($('.dropdown_wrap').hasClass('active')){
            $('.dropdown_wrap').removeClass('active')
            return
        }
        $('.dropdown_wrap').addClass('active')
    })

    function getChar(event) {
        if (event.which == null) {
          if (event.keyCode < 32) return null;
          return String.fromCharCode(event.keyCode) // IE
        }
  
        if (event.which != 0 && event.charCode != 0) {
          if (event.which < 32) return null;
          return String.fromCharCode(event.which) // остальные
        }
  
        return null; // специальная клавиша
    }

    $('.area_input, .lights_input').on('keypress', function(e){
        e = e || event;
      
        if (e.ctrlKey || e.altKey || e.metaKey) return;
      
        var chr = getChar(e);
      
        // с null надо осторожно в неравенствах,
        // т.к. например null >= '0' => true
        // на всякий случай лучше вынести проверку chr == null отдельно
        if (chr == null) return;
      
        if (chr < '0' || chr > '9') {
          return false;
        }
    })

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".dropdown_wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active') // скрываем его
		}
    });

    $('.area_input, .lights_input').on('focus', function(e){
        this.value = '';
    });
    
    setFirstScreenVideo()
    setPromoDate()
    initCalcLogic()
    fillStarsRate()
    initVideoPopups()
    initExamplesSlider()
    resizeHandler()
})

$(document).on('click','.tooltop_button',function(){
    $.ajax({
        type: "POST",
        url: "/closeban/",
        data: {
        },
        success: function(result){
            console.log(result);
        }
    });
})

$(document).on('submit','#modalform',function(){
    dataLayer.push({'event': 'perezvoni'});
})

$(document).on('submit','.calcform',function(){
    dataLayer.push({'event': 'zamershik'});
})