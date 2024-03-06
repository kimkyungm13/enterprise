$(function () {
    // 스크롤 헤더
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) { // 스크롤 위치가 최상단이 아닌 경우
            // 마우스 휠을 아래로 스크롤할 때와 동일한 동작 수행
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
            $('.quick').css('display', 'none')
        } else {
            $('.quick').css('display', 'block')
        }
        lastScroll = curr
    });
})

