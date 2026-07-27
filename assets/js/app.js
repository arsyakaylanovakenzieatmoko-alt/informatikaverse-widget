/* ==========================================================
   INFORMATIKAVERSE v4.0
   Global Application Script
========================================================== */

"use strict";

/* ==========================================================
   APP
========================================================== */

const App = {

    init() {

        this.theme();

        this.sidebar();

        this.activeMenu();

        this.smoothScroll();

        this.lazyImage();

        this.ripple();

        this.tooltip();

        this.loadingButton();

        this.floatAnimation();

        this.keyboardShortcut();

        console.log("✔ InformatikaVerse Loaded");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

/* ==========================================================
   THEME
========================================================== */

App.theme = function(){

    const btn = document.getElementById("themeToggle");

    if(!btn) return;

    const saved = localStorage.getItem("theme");

    if(saved==="light"){

        document.body.classList.add("light-mode");

    }

    btn.onclick=()=>{

        document.body.classList.toggle("light-mode");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("light-mode")

            ? "light"

            : "dark"

        );

    }

}

/* ==========================================================
   SIDEBAR
========================================================== */

App.sidebar=function(){

    const toggle=document.getElementById("menuToggle");

    const sidebar=document.querySelector(".sidebar");

    if(!toggle||!sidebar) return;

    toggle.onclick=()=>{

        sidebar.classList.toggle("open");

    }

}

/* ==========================================================
   ACTIVE MENU
========================================================== */

App.activeMenu=function(){

    const current=location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar a").forEach(link=>{

        const href=link.getAttribute("href");

        if(href===current){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

App.smoothScroll=function(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.onclick=function(e){

            e.preventDefault();

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

}

/* ==========================================================
   LAZY IMAGE
========================================================== */

App.lazyImage=function(){

    const images=document.querySelectorAll("img[data-src]");

    if(images.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img=entry.target;

                img.src=img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    images.forEach(img=>observer.observe(img));

}

/* ==========================================================
   RIPPLE EFFECT
========================================================== */

App.ripple=function(){

    document.querySelectorAll(

        ".btn-primary,.btn-outline"

    ).forEach(btn=>{

        btn.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const size=Math.max(

                this.clientWidth,

                this.clientHeight

            );

            circle.style.width=size+"px";

            circle.style.height=size+"px";

            circle.style.left=

                e.offsetX-size/2+"px";

            circle.style.top=

                e.offsetY-size/2+"px";

            circle.className="ripple";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

}

/* ==========================================================
   TOOLTIP
========================================================== */

App.tooltip=function(){

    document.querySelectorAll("[data-tooltip]")

    .forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            const tip=document.createElement("div");

            tip.className="tooltip";

            tip.innerHTML=item.dataset.tooltip;

            document.body.appendChild(tip);

            const rect=item.getBoundingClientRect();

            tip.style.left=

                rect.left+"px";

            tip.style.top=

                rect.top-45+"px";

            item.tip=tip;

        });

        item.addEventListener("mouseleave",()=>{

            if(item.tip){

                item.tip.remove();

            }

        });

    });

}

/* ==========================================================
   BUTTON LOADING
========================================================== */

App.loadingButton=function(){

    document.querySelectorAll(".loading-btn")

    .forEach(btn=>{

        btn.onclick=function(){

            const text=this.innerHTML;

            this.disabled=true;

            this.innerHTML=

            '<i class="fa-solid fa-spinner fa-spin"></i> Loading';

            setTimeout(()=>{

                this.disabled=false;

                this.innerHTML=text;

            },1800);

        }

    });

}

/* ==========================================================
   FLOAT EFFECT
========================================================== */

App.floatAnimation=function(){

    document.querySelectorAll(".floating")

    .forEach((el,index)=>{

        el.animate([

            {

                transform:"translateY(0)"

            },

            {

                transform:"translateY(-12px)"

            },

            {

                transform:"translateY(0)"

            }

        ],{

            duration:3000+(index*300),

            iterations:Infinity

        });

    });

}

/* ==========================================================
   KEYBOARD SHORTCUT
========================================================== */

App.keyboardShortcut=function(){

    document.addEventListener("keydown",e=>{

        if(e.altKey && e.key==="a"){

            location.href="ai.html";

        }

        if(e.altKey && e.key==="7"){

            location.href="kelas7.html";

        }

        if(e.altKey && e.key==="8"){

            location.href="kelas8.html";

        }

        if(e.altKey && e.key==="9"){

            location.href="kelas9.html";

        }

    });

}

/* ==========================================================
   GLOBAL UTILITIES
========================================================== */

const Util={

    random(min,max){

        return Math.floor(

            Math.random()*(max-min+1)

        )+min;

    },

    formatDate(){

        return new Date()

        .toLocaleDateString(

            "id-ID",

            {

                weekday:"long",

                day:"numeric",

                month:"long",

                year:"numeric"

            }

        );

    },

    greeting(){

        const h=new Date().getHours();

        if(h<11) return "Selamat Pagi";

        if(h<15) return "Selamat Siang";

        if(h<18) return "Selamat Sore";

        return "Selamat Malam";

    }

};

/* ==========================================================
   BRANDING
========================================================== */

console.log(
"%cInformatikaVerse v4.0",
"color:#10b981;font-size:18px;font-weight:bold;"
);

console.log(
"%cAI Learning Platform SMP Negeri Satap 6 Majenang",
"color:#22c55e;font-size:12px;"
);
