$(function () {
    // 스크롤 헤더
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        winH = window.innerHeight;
        if (scrollPosition > (winH / 3)) {
            $('#header').addClass('wheel');
            $('.side_bnr_wrap').css('display', 'block');
            // 추가로 필요한 동작을 여기에 추가합니다.
        } else {
            // 스크롤이 최상단에 도달했을 때 실행할 코드
            $('header').removeClass('wheel');
            $('.menu-wrap').css('display', 'none');
            // 추가로 필요한 동작을 여기에 추가합니다.
        }
    });
    //퀵메뉴
    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr > lastScroll

        ) {
            $('.quick').css('display', 'none');
        } else {
            $('.quick').css('display', 'block')
        }
        lastScroll = curr
    });
    function reveal() {
        var reveals = document.querySelectorAll(".text");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

})

$(window).scroll(function () {
    var sectionChallenge = $('.sc-challenge').offset().top;
    var sectionProve = $('.sc-prove').offset().top;
    var sectionPossibility = $('.sc-possibility').offset().top;

    if ($(window).scrollTop() >= sectionChallenge && $(window).scrollTop() < sectionPossibility) {
        $('.logo').addClass('black'); // 섹션 one에 도달하면 one 클래스를 추가
    } else {
        $('.logo').removeClass('black'); // 섹션 one보다 위에 있으면 one 클래스를 제거
    } if ($(window).scrollTop() >= sectionPossibility) {
        $('.logo').removeClass('black'); // 섹션 three 이후에는 one 클래스를 제거
        $('body').addClass('black')
    } else {
        $('body').removeClass('black')

    }
});
