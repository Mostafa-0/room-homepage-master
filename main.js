// Navigation Bar Toggling
const navMenu = document.querySelector('.nav-menu'),
navHamburger = document.querySelector('.nav-hamburger'),
hamburgerIcon = document.querySelector('#hamburger-icon'),
closeIcon = document.querySelector('#close-icon');

hamburgerIcon.addEventListener('click', () => {
    navHamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navHamburger.classList.toggle('active')
})

// Slider
const sliderButtons = document.querySelectorAll('.angle'),
sliderImages = document.querySelector('.slider-images')
sliderText = document.querySelector('.slider-text'),
firstImg = document.querySelectorAll('.slider-img')[0];
firstText = document.querySelectorAll('.slider-text .text')[0];

let firstImgWidth = firstImg.clientWidth,
firstTextWidth = firstText.clientWidth,
scrollWidth = sliderImages.scrollWidth - sliderImages.clientWidth;

sliderButtons.forEach(angle => {
    angle.addEventListener('click', (e) => {
        if (angle.classList.contains('angle-left')) {
            sliderImages.scrollLeft -= firstImgWidth;
            sliderText.scrollLeft -= firstTextWidth;
        } else{
            sliderImages.scrollLeft += firstImgWidth;
            sliderText.scrollLeft += firstTextWidth;
        }

        console.log(scrollWidth);
        console.log(sliderImages.scrollLeft);
    })
});

// Slide to the last element when previous button is clicked from the first slide
sliderButtons[0].addEventListener('click', () => {
    if (sliderImages.scrollLeft == 0) {
        sliderImages.scrollLeft = firstImgWidth * 3;
        sliderText.scrollLeft = firstTextWidth * 3;
    }
})

// Rewing upon reaching the last slide
sliderButtons[1].addEventListener('click', () => {
        if (sliderImages.scrollLeft + 10 >= scrollWidth ) {
            sliderImages.scrollLeft = 0;
            sliderText.scrollLeft = 0;
        }
})

