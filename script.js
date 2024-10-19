// ----------menu icon navbar---------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};


// ----------scroll sections active link---------
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    // sections.forEach(sec => {
    //     let top = window.scrollY;
    //     let offset = sec.offsetTop - 150;
    //     let height = sec.offsetHeight;
    //     let id = sec.getAttribute('id');

    //     if(top >= offset && top < offset + height) {
    //         navlinks.forEach(links => {
    //             links.classList.remove('active');
    //             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    //         });
    //     };
    // });


// ----------sticky navbar---------
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// ----------remove menu icon navbar when click navbar link(scroll)---------
// menuIcon.classList.remove('fa-bars');
// navbar.classList.remove('active');
// };


};











// ----------dark light mode---------
let modeBtn = document.querySelector('#mode');
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode == "light") {
        currMode = "dark";
        // document.querySelector('body').style.backgroundColor = "#09021f";
        document.querySelector('body').style.backgroundColor = "#09021f";
        document.querySelector('body').style.color = "white";
        document.querySelector('.services-container').style.color = "black";      
        document.querySelector('.profession').style.backgroundColor = "#09021f";
        document.querySelector('.tech-container').style.backgroundColor = "#09021f";
    } else {
        currMode = "light";
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('body').style.color = "black";
        document.querySelector('.tech-container').style.backgroundColor = "white";
    }
    console.log(currMode);
});
