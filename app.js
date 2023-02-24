const nav = document.querySelector("nav");
const li = 

window.addEventListener("scroll",()=>{
    nav.classList.toggle("sticky", window.scrollY > 0);

});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');

}

const sr = ScrollReveal({
    distance:'45px',
    duration: 2700,
    reset:true
})

sr.reveal('.home-text',{delay:350,origin:'left'})
sr.reveal('.project ul',{delay:200,origin:'bottom'})
sr.reveal('.sub-service,.about,.contact',{delay:200,origin:'bottom'})

