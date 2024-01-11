const openMenu = document.getElementById('open-menu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('#nav_links');
const darkMode = document.querySelector('#moon');


closeMenu.addEventListener('click', ()=>{
    navMenu.classList.add('hidden')
});
openMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('hidden')
});

navLinks.forEach(links =>{
    links.addEventListener("click", ()=>{
        navMenu.classList.add('hidden') 
    })
})

darkMode.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode")
})

// gsap.to(".burger", {
//     duration:1, y:-15, yoyo:true, repeat:-1
// });

// ------------------Tabs----------------
const tabs = document.querySelectorAll(".tab_wrap ul li");

tabs.forEach(tab => {
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab =>{
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        
    })
})



