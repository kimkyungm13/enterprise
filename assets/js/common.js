
window.onload = function () {
    // history.scrollRestoration = 'auto';
    // history.scrollRestoration = "manual";

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
    // body bg 변경
    ScrollTrigger.create({
        trigger: '[data-theme="dark"]',
        start: '0 70%',
        end: '100% 20%',
        // markers: true,
        toggleClass: {
            targets: 'body',
            className: 'black'
        },
    })
    //bg에 따라 header변경
    $(`[data-theme="white"]`).each(function () {
        const startValue = $(this).attr('data-start');
        const endValue = $(this).attr('data-end');
        ScrollTrigger.create({
            trigger: $(this),
            start: startValue,
            end: endValue,
            duration: 0.5,
            // markers: true,
            toggleClass: {
                targets: "header",
                className: "black",
            },
        })
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

    //showcase timeline
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

    //possibility 가로스크롤
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
            return window.innerWidth - 100
        }
    })


    //feature bg blur
    gsap.to('.sc-feature', {
        scrollTrigger: {
            trigger: ".sc-feature",
            start: "0% 100%",
            end: "100% 85%",
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



    gsap.set('.service-area1 .bg04 img:nth-child(2)', { autoAlpha: 0 })
    gsap.set('.service-area3 .main-title-card', { autoAlpha: 0 })
    const serviceArea1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.service-area1',
            start: '0% 0%',
            end: '100% 0%',
            scrub: 0,
            oninvalidOnRefresh: true,
            // markers:true,
        },
    })
    serviceArea1.to('.service-area1 .content', {
        x: function () {
            // console.log(document.querySelector('.service-area1 .headline').offsetWidth);
            return -$('.service-area1 .headline').outerWidth() - 100
            // return -555.95-100
            // return -document.querySelector('.service-area1 .headline').offsetWidth-100
        }
    })
    serviceArea1.to('.service-area1 .card-list:nth-child(1)', {
        duration: 1,
        x: 100
    }, 'a')
    serviceArea1.to('.service-area1 .card-list:nth-child(2)', {
        duration: 1,
        xPercent: -100,
        x: 100 - 40
    }, 'a')
    serviceArea1.to('.service-area1 .card-list:nth-child(3)', {
        duration: 1,
        x: 100 - (40 * 2),
        xPercent: -200,
    }, 'a')
    serviceArea1.to('.service-area1 .card-list:nth-child(4)', {
        duration: 1,
        x: 100 - (40 * 3),
        xPercent: -300,
    }, 'a')

    serviceArea1.to('.service-area1 .bg04 img:nth-child(1)', {
        autoAlpha: 0
    }, 'b-=1')
    serviceArea1.to('.service-area1 .bg04 img:nth-child(2)', {
        autoAlpha: 1
    }, 'b-=0.5').to('.service-area1 .bg04 img:nth-child(2)', {
        autoAlpha: 0
    },)


    ScrollTrigger.create({
        trigger: '.service-area2',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        onEnter: function () {
            gsap.set('.service-area1', { autoAlpha: 0 })
            gsap.set('.service-area2', { autoAlpha: 1 })
            gsap.set('.service-area2 .card-text', { autoAlpha: 1, duration: 1 })
        },
        onLeaveBack: function () {
            gsap.set('.service-area1', { autoAlpha: 1 })
            gsap.set('.service-area2', { autoAlpha: 0 })
        }
    })

    ScrollTrigger.create({
        trigger: '.service-area3',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        onEnter: function () {
            gsap.set('.service-area2 .main-title-card', { autoAlpha: 0 })
            gsap.set('.service-area3 .main-title-card', { autoAlpha: 1 })
        },
        onLeaveBack: function () {
            gsap.set('.service-area2 .main-title-card', { autoAlpha: 1 })
            gsap.set('.service-area3 .main-title-card', { autoAlpha: 0 })
        }
    })
    const serviceArea3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.service-area3',
            start: '0% 0%',
            end: '100% 0%',
            scrub: 0,
            oninvalidOnRefresh: true,
            // markers:true,
        },
    })
    serviceArea3.to('.service-area3 .card-slide', {
        x: -100
    })

    serviceArea3.to('.service-area3 .card-list:nth-child(1)', {
        duration: 1,
        x: 100
    }, 'a')
    serviceArea3.to('.service-area3 .card-list:nth-child(2)', {
        duration: 1,
        xPercent: -100,
        x: 100 - 40
    }, 'a')
    serviceArea3.to('.service-area3 .card-list:nth-child(3)', {
        duration: 1,
        x: 100 - (40 * 2),
        xPercent: -200,
    }, 'a')
    serviceArea3.to('.service-area3 .card-list:nth-child(4)', {
        duration: 1,
        x: 100 - (40 * 3),
        xPercent: -300,
    }, 'a')


    ScrollTrigger.create({
        trigger: '.service-area4',
        start: '0% 0%',
        end: '100% 100%',
        // markers: true,
        onEnter: function () {
            gsap.set('.service-area3 ', { autoAlpha: 0 })
            gsap.set('.service-area4 ', { autoAlpha: 1 })
            gsap.to('.service-area4 p', { autoAlpha: 1, dalay: 1 })
        },
        onLeaveBack: function () {
            gsap.set('.service-area3 ', { autoAlpha: 1 })
            gsap.set('.service-area4 ', { autoAlpha: 0 })

        }
    })

    //title text center ani
    $('.sc-prove').each(function (i, el) {
        const prove = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: `0% 72%`,
                end: "100% 95%",
                scrub: 0,
            }
        });
        prove.to($(this), { '--x': 0 }, 'a')
            .from($(this).find("span:nth-child(1)"), { transform: 'translateX(0%)' }, 'a')
            .from($(this).find("span:nth-child(3)"), { transform: 'translateX(0%)' }, 'a')
    })


    gsap.to('.sc-asset .slide', {
        scrollTrigger: {
            trigger: '.sc-asset',
            start: '0% 01%',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true,
            // markers: true,
            onUpdate: function (self) {
                step = Math.round(self.progress * 1);
                // $('.sc-asset').attr('data-step', step + 1)
                if (self.progress > 0.5) {
                    $('.title-item').text('미래금융')
                } else {
                    $('.title-item').text('전통금융')
                }
            },
            toggleClass: {
                targets: ".sc-asset .down",
                className: "show"
            }
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    });
    // const asset = gsap.timeline();
    // asset.to('.sc-asset .bg01 .contents, .sc-asset .bg02 .contents', {
    //     scrollTrigger: {
    //         trigger: '.sc-asset',
    //         start: '0 10%',
    //         end: '100% 100%',
    //         // markers: true,
    //         // onEnter() {
    //         //     $('.sc-asset .card').addClass('show');
    //         // },
    //     },
    //     autoAlpha: 1,
    // }).to('.sc-asset .bg03 .contents', {
    //     scrollTrigger: {
    //         trigger: '.sc-asset',
    //         start: '0 -80%',
    //         end: '100% 100%',
    //         markers: true,
    //         // onEnter() {
    //         //     $('.sc-asset .card').addClass('show');
    //         // },
    //     },
    //     autoAlpha: 1,
    // }, 'a').to('.sc-asset li.card-list.bg03 .card img', {
    //     scrollTrigger: {
    //         trigger: '.sc-asset',
    //         start: '0 -80%',
    //         end: '100% 100%',
    //         markers: true,
    //     },
    //     'filter': 'blur(30px)'
    // }, 'a').to('.sc-asset .slide', {
    //     scrollTrigger: {
    //         trigger: '.sc-asset',
    //         start: '0% 0%',
    //         end: '100% 100%',
    //         scrub: 0,
    //         oninvalidOnRefresh: true,
    //         // markers: true,
    //         onUpdate: function (self) {
    //             step = Math.round(self.progress * 1);
    //             // $('.sc-asset').attr('data-step', step + 1)
    //             if (self.progress > 0.5) {
    //                 $('.title-item').text('미래금융')
    //             } else {
    //                 $('.title-item').text('전통금융')
    //             }
    //         },
    //         toggleClass: {
    //             targets: ".sc-asset .down",
    //             className: "show"
    //         }
    //     },
    //     xPercent: -100,
    //     x: function () {
    //         return window.innerWidth
    //     }
    // })

    $(`[data-list="card"]`).each(function (i, el) {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: '0 10%',
                end: '100% 100%',
                // duration: 0.5,
                // markers: true,
                onEnter: function () {
                    $(el).find('.card').addClass('show');
                }, // 'this' 바인딩
            }
        });
    });

    const visible = gsap.timeline();
    $(`[data-list="card"]`).each(function (i, el) {
        visible.to($(this).find('.bg01 .contents'), {
            scrollTrigger: {
                trigger: el,
                start: '0 10%',
                end: '100% 100%',
                invalidateOnRefresh: true,
                // markers: true,
            },
            autoAlpha: 1,
        }, 'a').to($(this).find('.bg02 .contents'), {
            scrollTrigger: {
                trigger: el,
                start: '0 10%',
                end: '100% 100%',
                invalidateOnRefresh: true
                // markers: true,
            }, autoAlpha: 1,
        }, 'a').to($(this).find('.bg03 .contents'), {
            scrollTrigger: {
                trigger: el,
                start: '0 -80%',
                end: '100% 100%',
                // markers: true,
                invalidateOnRefresh: true
            }, autoAlpha: 1,
        }, 'b').to($(this).find('.bg04 .contents'), {
            scrollTrigger: {
                trigger: el,
                start: '0 -80%',
                end: '100% 100%',
                // markers: true,
                invalidateOnRefresh: true
            }, autoAlpha: 1,
        }, 'b').to($(this).find('.bg03 .card .card-img-box'), {
            scrollTrigger: {
                trigger: el,
                start: '0 -80%',
                end: '100% 100%',
                // markers: true,
                invalidateOnRefresh: true
            },
            'filter': 'blur(30px)',
        }, 'b');
        if ($(this).find('.card-img-box').length > 0) {
            visible.to($(this).find('.card-img-box'), {
                scrollTrigger: {
                    trigger: el,
                    start: '0 10%',
                    end: '100% 100%',
                    // markers: true,
                    invalidateOnRefresh: true,
                },
                'filter': 'blur(30px)'
            }, 'b');
        }
    })

    // // 공통 ScrollTrigger 설정을 위한 함수
    // function createScrollTrigger(el, start, end, markers = false) {
    //     return {
    //         trigger: el,
    //         start: start,
    //         end: end,
    //         invalidateOnRefresh: true,
    //         markers: markers
    //     };
    // }

    // // GSAP 타임라인 생성
    // const visible = gsap.timeline();

    // $(`[data-list="card"]`).each(function (i, el) {
    //     const $el = $(this);

    //     // bg01, bg02, bg03, bg04 애니메이션을 위한 공통 설정
    //     const sections = ['.bg01 .contents', '.bg02 .contents', '.bg03 .contents', '.bg03 .card .card-img-box'];

    //     // 애니메이션 순서 정의
    //     sections.forEach((selector, index) => {
    //         const start = index === 3 ? '0 -80%' : '0 10%'; // bg03 .card .card-img-box의 start는 다르게 설정
    //         const end = '100% 100%';

    //         visible.to($el.find(selector), {
    //             scrollTrigger: createScrollTrigger(el, start, end, index === 3),
    //             autoAlpha: index < 3 ? 1 : undefined, // bg03 .card .card-img-box는 autoAlpha를 설정하지 않음
    //             filter: selector.includes('.card-img-box') ? 'blur(30px)' : undefined, // .card-img-box에만 filter 적용
    //         }, index < 3 ? 'a' : 'b'); // a와 b는 애니메이션 순서에 따라 다르게 적용
    //     });
    // });



    const visual = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-creator .sticky-wrapper',
            start: '0% 0%',
            end: '100% 100%',
            scrub: 0,
            // duration: 3,
            // markers: true
        }
    });
    visual.to('.sc-creator .text-box,.sc-creator .visual .icon', {
        autoAlpha: 1,
    },).to('.sc-creator .text-box,.sc-creator .visual .icon', {
        autoAlpha: 0,
    },)

    gsap.to('.sc-creator .slide', {
        scrollTrigger: {
            trigger: '.sc-creator .slide-sticky',
            start: '0% top',
            end: '100% 100%',
            scrub: 0,
            oninvalidOnRefresh: true,
            // markers: true
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth
        }
    })
    ScrollTrigger.refresh();
};
