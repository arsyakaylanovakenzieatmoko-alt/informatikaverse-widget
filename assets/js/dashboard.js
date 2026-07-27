/* ==========================================================
   INFORMATIKAVERSE v4.0
   dashboard.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();
    initCounters();
    initProgressAnimation();
    initScrollReveal();
    initBackToTop();
    initCards();
    initGreeting();
    initClock();
    initToast();

});

/* ==========================================================
   LOADER
========================================================== */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 800);

    });

}

/* ==========================================================
   COUNTER
========================================================== */

function initCounters() {

    const numbers = document.querySelectorAll(".stat-card h2");

    numbers.forEach((el) => {

        const text = el.textContent.trim();

        const target = parseInt(text.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const speed = Math.max(15, Math.floor(1500 / target));

        const timer = setInterval(() => {

            current++;

            if (text.includes("+")) {

                el.textContent = current + "+";

            } else {

                el.textContent = current;

            }

            if (current >= target) {

                clearInterval(timer);

                el.textContent = text;

            }

        }, speed);

    });

}

/* ==========================================================
   PROGRESS BAR
========================================================== */

function initProgressAnimation() {

    const bars = document.querySelectorAll(".progress-fill");

    bars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initScrollReveal() {

    const elements = document.querySelectorAll(

        ".card,.stat-card,.course-card,.shortcut-card,.hero-dashboard"

    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .15

    });

    elements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = ".7s";

        observer.observe(el);

    });

}

/* ==========================================================
   BACK TO TOP
========================================================== */

function initBackToTop() {

    const btn = document.getElementById("topBtn");

    if (!btn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            btn.style.display = "block";

        } else {

            btn.style.display = "none";

        }

    });

    btn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   CARD EFFECT
========================================================== */

function initCards() {

    const cards = document.querySelectorAll(

        ".card,.course-card,.stat-card,.badge-card,.shortcut-card"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}

/* ==========================================================
   GREETING
========================================================== */

function initGreeting() {

    const title = document.querySelector(".topbar h1");

    if (!title) return;

    const hour = new Date().getHours();

    let greet = "Selamat Datang";

    if (hour >= 5 && hour < 11) {

        greet = "Selamat Pagi";

    } else if (hour < 15) {

        greet = "Selamat Siang";

    } else if (hour < 18) {

        greet = "Selamat Sore";

    } else {

        greet = "Selamat Malam";

    }

    title.innerHTML = `${greet} 👋`;

}

/* ==========================================================
   LIVE CLOCK
========================================================== */

function initClock() {

    const topbar = document.querySelector(".topbar p");

    if (!topbar) return;

    function updateClock() {

        const now = new Date();

        const time = now.toLocaleTimeString("id-ID", {

            hour: "2-digit",

            minute: "2-digit",

            second: "2-digit"

        });

        topbar.innerHTML = `Waktu saat ini : <strong>${time}</strong>`;

    }

    updateClock();

    setInterval(updateClock, 1000);

}

/* ==========================================================
   TOAST
========================================================== */

function initToast() {

    setTimeout(() => {

        showToast(

            "🤖 INFOBOT AI siap membantu belajar hari ini."

        );

    }, 1800);

}

/* ==========================================================
   TOAST COMPONENT
========================================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    Object.assign(toast.style, {

        position: "fixed",

        top: "25px",

        right: "25px",

        background: "#10b981",

        color: "#fff",

        padding: "16px 22px",

        borderRadius: "14px",

        fontWeight: "600",

        zIndex: "99999",

        boxShadow: "0 10px 30px rgba(0,0,0,.25)",

        opacity: "0",

        transform: "translateY(-20px)",

        transition: ".4s"

    });

    requestAnimationFrame(() => {

        toast.style.opacity = "1";

        toast.style.transform = "translateY(0)";

    });

    setTimeout(() => {

        toast.style.opacity = "0";

        toast.style.transform = "translateY(-20px)";

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3500);

}

/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(
`%c
╔════════════════════════════════════╗
║      INFORMATIKAVERSE v4.0         ║
║   AI Learning Platform Dashboard   ║
╚════════════════════════════════════╝
`,
"color:#10b981;font-size:14px;font-weight:bold;"
);
