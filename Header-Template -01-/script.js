const primaryNav = document.querySelector(".primary-nav");
const btnNav = document.querySelector(".btnNav-toggle");

btnNav.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") { 
        primaryNav.setAttribute('data-visible', true);
        btnNav.setAttribute('aria-expanded', true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        btnNav.setAttribute('aria-expanded', false);
    }
});