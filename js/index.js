$(function () {

    //GNB 호버이벤트
    $("#main_menu li").hover(function () {
        $(this).children(".main_categories").stop().slideDown(500);
    }, function () {
        $(this).children(".main_categories").stop().slideUp(500);
    });

    //슬라이더-------------------------------------------------------------------
    var isAnimate_main = false;
    var isAnimate_pick = false;
    
    //메인 슬라이더 이벤트
    $(".btn1.left").click(function () {
        if (!isAnimate_main) {
            isAnimate_main = true;
            prevSlide(".slide", 1000);
        }
        return false;
    });
    $(".btn1.right").click(function () {
        if (!isAnimate_main) {
            isAnimate_main = true;
            nextSlide(".slide", 1000);
        }
        return false;
    });

    //today pick 슬라이더 이벤트
    $(".btn2.left").click(function () {
        if (!isAnimate_pick) {
            isAnimate_pick = true;
            prevSlide(".pick_slide", 500);
        }
        return false;
    });
    $(".btn2.right").click(function () {
        if (!isAnimate_pick) {
            isAnimate_pick = true;
            nextSlide(".pick_slide", 500);
        }
        return false;
    });

    //슬라이더
    function prevSlide(target, time) {  //이전 슬라이드
        var index = ($(target+".on").index()-1);
        var slideLength = $(target).length;
        if (index < 0) index = (slideLength-1);
        $(target).not(".on").css("left", "-100%");
        $(target+".on").animate({"left": "100%"}, time, "easieEaseInOutQuad", function () {
            $(this).removeClass("on");
        });
        $(target).eq(index).animate({"left": 0}, time, "easieEaseInOutQuad", function () {
            $(this).addClass("on");
            if (target == ".slide") {isAnimate_main = false;}
            if (target == ".pick_slide") {isAnimate_pick = false;}
        });
    }

    function nextSlide(target, time) {  //다음 슬라이드
        var index = ($(target+".on").index()+1);
        var slideLength = $(target).length;
        if (index > slideLength-1) index = 0;
        $(target).not(".on").css("left", "100%");
        $(target+".on").animate({"left": "-100%"}, time, "easieEaseInOutQuad", function () {
            $(this).removeClass("on");
        });
        $(target).eq(index).animate({"left": 0}, time, "easieEaseInOutQuad", function () {
            $(this).addClass("on");
            if (target == ".slide") {isAnimate_main = false;}
            if (target == ".pick_slide") {isAnimate_pick = false;}
        });
    }

    function autoSlide() {  //메인 자동 슬라이드
        setInterval(function () {
            $(".btn1.right").trigger("click");
        }, 5000);
    }
    autoSlide();

    //서비스 탭메뉴--------------------------------------------------------------------
    //서비스 탭메뉴 초기화
    $("#ser_menu li a").removeClass("on");
    $(".ser_box").removeClass("on");
    $(".ser_line").css({"width": 0, "left": "50%"});
    
    $("#ser_menu li a").eq(0).addClass("on");
    $(".ser_box").eq(0).addClass("on");
    $(".ser_line").eq(0).css({"width": "100%", "left": 0});

    //서비스 탭메뉴 클릭이벤트
    $("#ser_menu li a").click(function () {
        var index = $(this).parent("li").index();

        $("#ser_menu li a").removeClass("on");
        $(".ser_box").removeClass("on");
        $(".ser_line").stop().animate({width: 0, left: "50%"}, 0);

        $(this).addClass("on");
        $(".ser_box").eq(index).addClass("on");
        $(".ser_line").eq(index).animate({width: "100%", left: 0}, 500);
        return false;
    });

});
