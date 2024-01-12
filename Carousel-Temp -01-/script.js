//Get Button Elements (Using Data Attributes)
const buttons = document.querySelectorAll("[data-carousel-button]");

//Loop through each buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        //Check if Data Attr == 'next' / 'prev' and set and offset
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        //Get the Slides by Selecting the Parent Data Attr and Selecting Slides Data Attr
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        //Select slide with the Attr 'data-active'
        const activeSlide = slides.querySelector("[data-active]");

        //Convert Slides to an Array and Get Index of Active Slides
        //Add to the Offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        //If Last Img
        if (newIndex < 0) newIndex = slides.children.length - 1;
        //If 1st Img
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

    });
});