document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.split("/")[1] == "") {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        let navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                var navHeight = document.querySelector("nav").offsetHeight;
                gsap.to(window, {
                    duration: 0.6,
                    scrollTo: {
                        y: link.getAttribute("href"),
                        offsetY: navHeight,
                    },
                });
            });
        });
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            let idStr = `#${section.id}`;
            gsap.to(`${idStr}-main`, {
                scrollTrigger: {
                    trigger: idStr,
                    start: "25% bottom",
                },
                opacity: 1,
                duration: 0.7,
                ease: "circ.inOut",
            });
        });
    }
});
