$(function () {
    $('.lang').click(function () {
        $(this).toggleClass('active')
    })
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        winH = window.innerHeight;
        if (scrollPosition > (winH / 3)) {
            $('#header').addClass('wheel');
        } else {
            $('header').removeClass('wheel');
            $('.menu-wrap').css('display', 'none');
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
    // window.addEventListener("scroll", reveal);
    const intro = gsap.timeline();
    intro.from(".description .t1", { opacity: 0, duration: 1 })
        .to(".description .t1", { opacity: 1, duration: 1 })
        .to(".description .t1", { opacity: 0, duration: 1 })
        .from(".description .t2", { opacity: 0, duration: 1 }, "<") // 이전 페이드 아웃이 끝난 후 실행
        .to(".description .t2", { opacity: 1, duration: 1 })
        .to(".description .t2", { opacity: 0, duration: 1 })
        .from(".description .t3", { opacity: 0, duration: 1 }, "<")
        .to(".description .t3", { opacity: 1, duration: 1 })
        .to(".description .t3", { opacity: 0, duration: 1 })
        .from(".description .t4", { opacity: 0, duration: 1 }, "<")
        .to(".description .t4", { opacity: 1, duration: 1 })
        .to(".description .t4", { opacity: 0, duration: 1 });

    ScrollTrigger.create({
        animation: intro,
        trigger: ".sc-intro",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true
    });



    const showcase = gsap.timeline();
    showcase.to(".sc-showcase .case01 .txt", { opacity: 1, duration: 2 })
        .to(".sc-showcase .line01", { xPercent: 100 }, "text")
        .to(".sc-showcase .line03", { xPercent: -100 }, "text")
        .to(".sc-showcase .case01 .txt", { opacity: 0, duration: 2 })

    ScrollTrigger.create({
        animation: showcase,
        trigger: ".sc-showcase",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true
    });

    // const introTl = gsap.timeline();
    // introTl.from(".sc-intro .description .text.t1", { opacity: 0, stagger: 0.2, y: -100, borderRadius: 200 })
    //     .from(".sc-intro .description .text.t2", { opacity: 0, stagger: 0.2, y: -100, borderRadius: 200 })

    // ScrollTrigger.create({
    //     trigger: ".sc-intro",
    //     start: "top top",
    //     end: "+=600vh",
    //     scrub: true,
    //     pin: true,
    //     anticipatePin: 1,
    //     markers: true
    // });
})




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

