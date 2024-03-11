$(function () {
    $('.lang').click(function () {
        $(this).toggleClass('active')
    })
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
        $('#header').addClass('black');
    } else {
        $('#header').removeClass('black');
    } if ($(window).scrollTop() >= sectionPossibility) {
        $('#header').removeClass('black');
        $('body').addClass('black')
    } else {
        $('body').removeClass('black')

    }
});


// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();
//     var sectionIntro = $('.sc-intro').offset().top;
//     var sectionShowcase = $('.sc-showcase').offset().top;
//     var sectionChallenge = $('.sc-challenge').offset().top;
//     var sectionProve = $('.sc-prove').offset().top;
//     var sectionGallery = $('.sc-gallery').offset().top;
//     var sectionPossibility = $('.sc-possibility').offset().top;
//     var sectionDataid = $('.sc-dataid').offset().top;
//     var sectionFeature = $('.sc-feature').offset().top;
//     var sectionGround = $('.sc-ground').offset().top;

//     $('#header').toggleClass('black', $('#heading').toggleClass('black', scrollTop >= sectionChallenge && scrollTop < sectionProve || scrollTop >= sectionProve && scrollTop < sectionGallery || scrollTop >= sectionGallery))
// });