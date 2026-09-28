
        document.addEventListener("DOMContentLoaded", () => {
            const tl = gsap.timeline();

            // 1. Headline Mask Reveal
            tl.to(".heading-main", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15
            }, "+=0.2")

            // 2. Sub-headline & CTA Fade Up
            .to("#hero-content", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "-=0.5")

            // 3. Nav Fade In
            .to("#site-header", {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "<"); 
            
            // Navbar Scroll Behavior
            let lastScrollY = window.scrollY;
            const nav = document.getElementById("site-header");
            
            window.addEventListener("scroll", () => {
                if (window.scrollY > lastScrollY && window.scrollY > 80) {
                    // Scrolling down & past the top threshold
                    nav.classList.add("nav-hidden");
                } else {
                    // Scrolling up
                    nav.classList.remove("nav-hidden");
                }
                lastScrollY = window.scrollY;
            }, { passive: true });

            // 4. Team & Manifesto Section Intersection Observer
            const teamObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        // Find lines inside this specific section
                        const lines = entry.target.querySelectorAll(".team-line");
                        gsap.to(lines, {
                            y: "0%",
                            duration: 1.2,
                            ease: "power4.out",
                            stagger: 0.15
                        });
                        teamObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            document.querySelectorAll(".team_section, .manifesto_section").forEach(section => {
                teamObserver.observe(section);
            });

            // 5. Portfolio Horizontal Scroll with ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            const portfolioTrack = document.querySelector(".portfolio-track");
            const portfolioWrap = document.querySelector(".portfolio-track-wrap");

            if (portfolioTrack && portfolioWrap) {
                const totalScrollWidth = portfolioTrack.scrollWidth - portfolioWrap.offsetWidth;

                gsap.to(portfolioTrack, {
                    x: -totalScrollWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".portfolio_section",
                        start: "top top",
                        end: () => "+=" + (totalScrollWidth + window.innerWidth),
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                });
                        }

            // 6. Professional Fade In Animation
            // Excluding hero and portfolio sections to prevent ScrollTrigger pinning conflicts
            gsap.utils.toArray('.section:not(.hero_main):not(.portfolio_section)').forEach(section => {
                gsap.from(section, {
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
                        });
        });
    
