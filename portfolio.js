
const section=document.querySelectorAll("section");

const nav=document.querySelector(".nav-list");
const cancel=document.querySelector(".cancel-img");
const menu=document.querySelector(".menu-icon");
menu.addEventListener("click",()=>{
    nav.classList.add("active3")
})
cancel.addEventListener("click",()=>{
    nav.classList.remove("active3")
})

const lists=document.querySelectorAll(".nav-list a");
window.onscroll =()=>{
    section.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop-50;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){
    lists.forEach(link=>{
        link.classList.remove("active");
        link.classList.remove("active2");
        document.querySelector('.nav-list a[href*='+ id +']').classList.add("active")
        document.querySelector('.nav-list a[href*='+ id +']').classList.add("active2")
         nav.classList.remove("active3")
    });
        };
    });
};
const innercircle1=document.querySelector(".innercircle1")
const html=document.querySelector(".html")
var html1=0;
var html2=90;

let progress=setInterval(() => {
    html1++
    if(html1 == html2){
      clearInterval(progress);
    }
html.textContent=`${html1}%`;
innercircle1.style.background=`conic-gradient( rgb(216, 216, 219)${html1 * 3.5}deg,#e9e4e4 0deg)`;
},50);
const innercircle2=document.querySelector(".innercircle2")
const css=document.querySelector(".css")
var css1=0;
var css2=90;

let progress2=setInterval(() => {
    css1++
    if(css1 == css2){
      clearInterval(progress2);
    }
css.textContent=`${css1}%`;
innercircle2.style.background=`conic-gradient( rgb(216, 216, 219)${css1 * 3.5}deg,#e9e4e4 0deg)`;
},50);
const innercircle3=document.querySelector(".innercircle3")
const bootstrap=document.querySelector(".bootstrap")
var boot1=0;
var boot2=70;

let progress3=setInterval(() => {
    boot1++
    if(boot1 == boot2){
      clearInterval(progress3);
    }
bootstrap.textContent=`${boot1}%`;
innercircle3.style.background=`conic-gradient( rgb(216, 216, 219)${boot1 * 3.5}deg,#e9e4e4 0deg)`;
},50);
const innercircle4=document.querySelector(".innercircle4")
const javascript=document.querySelector(".javascript")
var java1=0;
var java2=60;

let progress4=setInterval(() => {
    java1++
    if(java1 == java2){
      clearInterval(progress4);
    }
javascript.textContent=`${java1}%`;
innercircle4.style.background=`conic-gradient( rgb(216, 216, 219)${java1 * 3.5}deg,#e9e4e4 0deg)`;
},50);
const innercircle5=document.querySelector(".innercircle5")
const jq=document.querySelector(".jquery")
var jq1=0;
var jq2=60;

let progress5=setInterval(() => {
    jq1++
    if(jq1 == jq2){
      clearInterval(progress5);
    }
jq.textContent=`${jq1}%`;
innercircle5.style.background=`conic-gradient( rgb(216, 216, 219)${jq1 * 3.5}deg,#e9e4e4 0deg)`;
},50);