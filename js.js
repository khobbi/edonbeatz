// for fade in effect
document.addEventListener("DOMContentLoaded", function (){
    const sections = document.querySelectorAll('.sect');

    function fadeInSections(){
        sections.forEach(section => {
            const bounding = section.getBoundingClientRect();
            if(bounding.top < window.innerHeight && bounding.bottom >= 0){
                section.style.opacity = 1;
            }
        });
    }

    window.addEventListener('scroll', fadeInSections);
    window.addEventListener('resize', fadeInSections);

    fadeInSections(); //call it once to initially show visible sections
});

// toggle button
function toggleMenu(button){
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    button.classList.toggle('active');
}