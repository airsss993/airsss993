function scrollToAnchor() {
    const target = document.getElementById("target");
    const targetPos = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: targetPos,
        behavior: "smooth"
    })
}

document.addEventListener("DOMContentLoaded",
    () => {
        if (!window.matchMedia("(max-width: 768px)").matches) {
            gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

            const tl = gsap.timeline({
                defaults: {
                    duration: 0.65,
                    ease: "power1.out",
                }
            })

// HOVER BTN

            const btns = document.querySelectorAll('.button');

            btns.forEach((btn) => {
                const btnbg = btn.querySelector('.btn-bg');

                btn.addEventListener('mouseenter', () => {
                    gsap.killTweensOf(btnbg);
                    gsap.set(btnbg, {left: '-100%'});
                    gsap.to(btnbg, {
                        left: 0,
                        opacity: 1,
                        duration: 0.4,
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.killTweensOf(btnbg);
                    gsap.to(btnbg, {
                        left: '100%',
                        opacity: 0,
                        duration: 0.4,
                        onComplete: () => {
                            gsap.set(btnbg, {left: '-100%', opacity: 0});
                        },
                    });
                });
            });


// HERO SECTION

            tl.from('.hero-background', {
                scale: 2,
                duration: 2.5,
                ease: 'power4.inOut'
            }).fromTo('.hero-background p', {
                opacity: 0
            }, {
                opacity: 1,
            }).fromTo('.hero-background h1', {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
            }).fromTo('.hero-background .start-btn', {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
            }).fromTo('header', {
                y: -30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                delay: 0.55,
            })

// FIRST SECTION

            gsap.from('.section-1 .text__container', {
                scrollTrigger: {
                    trigger: '.section-1',
                    start: '-20% center center',
                    end: 'bottom',
                },
                x: -300,
                opacity: 0,
            })

            gsap.from('.section-1 img', {
                scrollTrigger: {
                    trigger: '.section-1',
                    start: '-20% center center',
                    end: 'bottom',
                },
                x: 300,
                opacity: 0,
            })

// EDU BLOCK
            gsap.from('.edu-block', {
                scrollTrigger: {
                    trigger: '.section-2',
                    start: 'top center',
                },
                x: -55,
                opacity: 0,
                duration: 1,
                stagger: 0.35,
            })

// THIRD SECTION

            gsap.from('.section-3 .text__container', {
                scrollTrigger: {
                    trigger: '.section-3',
                    start: '-20% center center',
                    end: 'bottom',
                },
                x: 300,
                opacity: 0,
            })

            gsap.from('.section-3 img', {
                scrollTrigger: {
                    trigger: '.section-3',
                    start: '-20% center center',
                    end: 'bottom',
                },
                x: -300,
                opacity: 0,
            })

// SKILLS SECTION

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.section-4',
                    start: '-10% center center',
                },
                defaults: {
                    duration: 0.65,
                    ease: "power1.out",
                }
            });

            gsap.set('.section-4 .skills', {
                x: 300, opacity: 0
            })
            gsap.set('.section-4 .text__container', {
                x: -300, opacity: 0
            })
            gsap.set('.bar', {
                opacity: 0
            })
            gsap.set('.progress span', {
                opacity: 0
            })

            tl2.to('.section-4 .skills', {
                opacity: 1, x: 0
            }).to('.section-4 .text__container', {
                opacity: 1, x: 0
            }).to('.bar', {
                opacity: 1
            }).to('.progress span', {
                opacity: 1
            });

// FOOTER

            gsap.from('footer', {
                scrollTrigger: {
                    trigger: 'footer',
                    start: '-205% center bottom',
                    onEnter: () => gsap.to('footer', {scale: 1, opacity: 1}),
                    onLeaveBack: () => gsap.to('footer', {scale: 0.5, opacity: 0}),
                },
                scale: 0.5,
                opacity: 0,
            });
        }
    });
    





