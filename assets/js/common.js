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

    // const prove = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".sc-prove",
    //         start: "0% 80%",
    //         end: "100% 95%",
    //         scrub: 0,
    //         // markers: true
    //     }
    // })
    // prove.to(".sc-prove", { '--x': 0 }, 'a')
    //     .to(".sc-prove .line01", { xPercent: -163 }, 'a')
    //     .to(".sc-prove .line03", { xPercent: 134 }, 'a')


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
    $(`[data-theme="white"]`).each(function () {
        ScrollTrigger.create({
            trigger: $(this),
            start: "0% 50%",
            end: "100% 50%",
            // markers:true,
            toggleClass: {
                targets: "header",
                className: "black",
            },
        })
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



    gsap.to('.sc-feature', {
        scrollTrigger: {
            trigger: ".sc-feature",
            start: "0% 100%",
            end: "100% 70%",
            scrub: 0,
            // markers: true,
        },
        '--x': 0,
    })

    gsap.from('.sc-feature .title', {
        scrollTrigger: {
            trigger: ".sc-feature",
            start: "0% 45%",
            end: "100% 30%",
            scrub: 0,
            // markers: true,
            onEnter: function () {
                $('.sc-feature').addClass('blur')
            },
            onLeaveBack: function () {
                $('.sc-feature').removeClass('blur')
            }
        },
        opacity: 0
    })
    $('.sc-prove').each(function (i, el) {
        const prove = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: `0% 80%`,
                end: "100% 95%",
                scrub: 0,
            }
        });
        prove.to($(this), { '--x': 0 }, 'a')
            .from($(this).find("span:nth-child(1)"), { transform: 'translateX(0%)' }, 'a')
            .from($(this).find("span:nth-child(3)"), { transform: 'translateX(0%)' }, 'a')

    })
    gsap.to('.sc-service .slide', {
        scrollTrigger: {
            trigger: '.sc-service',
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
    const asset = gsap.timeline();
    asset.to('.sc-asset .slide', {
        scrollTrigger: {
            trigger: '.sc-asset',
            start: '20% top',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true,
            markers: true,
            onUpdate: function (self) {
                step = Math.round(self.progress * 3);

                $('.sc-asset').attr('data-step', step + 1)

                if (self.progress > 0.5) {
                    $('.title-item').text('전통금융')

                } else {
                    $('.title-item').text('미래금융')

                }
            },
            onEnter() {
                $('.sc-asset .down').addClass('show');
            },
            onLeave() {
                $('.sc-asset .down').removeClass('show');
            },
            onEnterBack() {
                $('.sc-asset .down').addClass('show');
            },
            onLeaveBack() {
                $('.sc-asset .down').removeClass('show');
            }
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    }).from('.sc-asset .list', {
        scrollTrigger: {
            trigger: '.sc-asset .card',
            start: 'top top',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true,
            markers: true,
        },
        opacity: 0,
    })




    visual = gsap.timeline();
    visual.from('.sc-creator .text-box', {
        scrollTrigger: {
            trigger: '.sc-creator .visual',
            start: 'top top',
            end: '100% 100%',
            scrub: 0,
            markers: true
        },
        opacity: 0
    }).to('.sc-creator .text-box', { opacity: 0 });

    gsap.to('.sc-creator .slide', {
        scrollTrigger: {
            trigger: '.sc-creator',
            start: '20% top',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true,
            markers: true
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    })
});
