$(function () {
    $('.lang').click(function () {
        $(this).toggleClass('active')
    })
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        winH = window.innerHeight;
        if (scrollPosition > (winH / 3)) {
            $('#header').addClass('wheel');
        } else {
            $('header').removeClass('wheel');
            $('.menu-wrap').css('display', 'none');
        }
    });

    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        if (curr < lastScroll

        ) {
            $('.top').addClass('show');
        } else {
            $('.top').removeClass('show')
        }
        lastScroll = curr
    });
    $('.top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });


    // gsap common
    gsap.defaults({
        ease: "none"
    })

    // intro gsap tl
    const intro = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-intro",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true
        }
    });

    intro.to(".sc-intro .sticky", { '--opacity': 1 }, 'a')
        .to(".description .t1", { opacity: 1 }, 'a')
        .to(".description .t1", { opacity: 0 })
        .from(".description .t2", { opacity: 0 })
        .to(".description .t2", { opacity: 1 })
        .to(".description .t2", { opacity: 0 })
        .from(".description .t3", { opacity: 0 })
        .to(".description .t3", { opacity: 1 })
        .to(".description .t3", { opacity: 0 })
        .from(".description .t4", { opacity: 0 })
        .to(".description .t4", { opacity: 1 })


    const showcase = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-showcase",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true
        }
    });
    showcase.to(".sc-showcase .title", { opacity: 1 }, "a")
        .to(".sc-showcase .sticky", { '--opacity': 1 }, "a")
        .to(".sc-showcase .sticky", { '--opacity': 0 }, "b")
        .to(".sc-showcase .line01", { xPercent: 100 }, "b")
        .to(".sc-showcase .line03", { xPercent: -100 }, "b")
        .to(".sc-showcase .title", { opacity: 0 })
        .to(".sc-showcase .bg .img:nth-child(3)", { height: 0 })
        .to(".sc-showcase .bg .img:nth-child(2)", { height: 0 })
        .to(".sc-showcase .desc", { opacity: 1 }, "c")
        .to(".sc-showcase .sticky", { '--opacity': 1 }, "c")

    const prove = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-prove",
            start: "0% 80%",
            end: "100% 95%",
            scrub: 0,
            markers: true
        }
    })
    prove.to(".sc-prove", { '--x': 0 }, 'a')
        .to(".sc-prove .line01", { xPercent: -163 }, 'a')
        .to(".sc-prove .line03", { xPercent: 134 }, 'a')


    // body bg 변경
    ScrollTrigger.create({
        trigger: '[data-theme="dark"]',
        start: '0% 50%',
        end: '100% 50%',
        toggleClass: {
            targets: 'body',
            className: 'black'
        },
    })

    gsap.to('.sc-possibility .slide-sub', {
        scrollTrigger: {
            trigger: '.sc-possibility',
            start: '0% 0%',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    })
});
