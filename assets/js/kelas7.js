/* ==========================================================
   INFORMATIKAVERSE v4.0
   kelas7.js
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    initBookmark();

    initComplete();

    initSearch();

    loadProgress();

});

/* ==========================================================
   BOOKMARK
========================================================== */

function initBookmark(){

    document.querySelectorAll(".course-card").forEach((card,index)=>{

        const star=document.createElement("button");

        star.innerHTML="⭐";

        star.className="bookmark-btn";

        card.appendChild(star);

        star.onclick=()=>{

            star.classList.toggle("active");

            saveBookmark(index,star.classList.contains("active"));

        }

    });

}

function saveBookmark(id,status){

    localStorage.setItem(

        "bookmark_"+id,

        status

    );

}

/* ==========================================================
   COMPLETE
========================================================== */

function initComplete(){

    document.querySelectorAll(".course-footer a")

    .forEach((btn,index)=>{

        btn.addEventListener("click",()=>{

            localStorage.setItem(

                "materi_"+index,

                "selesai"

            );

        });

    });

}

function loadProgress(){

    document.querySelectorAll(".course-card")

    .forEach((card,index)=>{

        if(

            localStorage.getItem(

            "materi_"+index

            )==="selesai"

        ){

            const chip=document.createElement("span");

            chip.className="status selesai";

            chip.innerHTML="✅ Selesai";

            card.prepend(chip);

        }

        if(

            localStorage.getItem(

            "bookmark_"+index

            )==="true"

        ){

            const star=card.querySelector(".bookmark-btn");

            if(star){

                star.classList.add("active");

            }

        }

    });

}

/* ==========================================================
   SEARCH
========================================================== */

function initSearch(){

    const input=document.getElementById("searchMateri");

    if(!input) return;

    input.addEventListener("keyup",()=>{

        const keyword=input.value.toLowerCase();

        document.querySelectorAll(".course-card")

        .forEach(card=>{

            const text=card.innerText.toLowerCase();

            if(text.includes(keyword)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

/* ==========================================================
   TOAST
========================================================== */

function toast(text){

    const div=document.createElement("div");

    div.className="toast";

    div.innerHTML=text;

    document.body.appendChild(div);

    Object.assign(div.style,{

        position:"fixed",

        bottom:"30px",

        right:"30px",

        background:"#10b981",

        color:"#fff",

        padding:"15px 20px",

        borderRadius:"15px",

        zIndex:"99999",

        transition:".4s"

    });

    setTimeout(()=>{

        div.remove();

    },2500);

}

/* ==========================================================
   MESSAGE
========================================================== */

console.log(

"Kelas VII Ready"

);
