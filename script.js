/* ==========================================
   INFORMATIKAVERSE v3.0
   SMP Negeri Satap 6 Majenang
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       BACK TO TOP BUTTON
    =============================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /* ===============================
       SCROLL ANIMATION
    =============================== */

    const animated = document.querySelectorAll(
        ".menu-card,.feature-card,.stat-box,.teacher-card,.hero-left,.hero-right,.ai-content,.ai-image"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all .8s ease";

            }

        });

    }, {
        threshold: 0.15
    });

    animated.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";

        observer.observe(item);

    });

    /* ===============================
       HEADER SHADOW
    =============================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(3,20,15,.88)";
            header.style.backdropFilter = "blur(18px)";
            header.style.boxShadow = "0 12px 25px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(0,0,0,.25)";
            header.style.boxShadow = "none";

        }

    });

    /* ===============================
       ACTIVE MENU
    =============================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

    function activeMenu() {

        const scrollY = window.scrollY;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === "#" + sectionId
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ===============================
       COUNTER ANIMATION
    =============================== */

    const counters = document.querySelectorAll(".stat-box h2");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseInt(
                counter.innerText.replace(/\D/g, "")
            );

            if (isNaN(target)) return;

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 80));

            const update = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = current + "+";

                    requestAnimationFrame(update);

                }

            };

            update();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ===============================
       FLOATING AI EFFECT
    =============================== */

    const aiButton = document.querySelector(".floating-ai");

    if (aiButton) {

        setInterval(() => {

            aiButton.animate([
                { transform: "translateY(0px)" },
                { transform: "translateY(-8px)" },
                { transform: "translateY(0px)" }
            ], {
                duration: 1800,
                easing: "ease-in-out"
            });

        }, 2200);

    }

    /* ===============================
       SMOOTH INTERNAL LINK
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});
