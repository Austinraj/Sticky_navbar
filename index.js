const navbarEl = document.querySelector(".navbar");


const botEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(botEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > botEl.offsetTop - navbarEl.offsetHeight - 50)
    {
            navbarEl.classList.add("active");
        }else{
            navbarEl.classList.remove("active");
        }
});