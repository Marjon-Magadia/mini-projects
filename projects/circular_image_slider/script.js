const circular_slider = document.querySelector('.wrapper'),
    slides = document.querySelectorAll('.slides'),
    images = document.querySelectorAll(".slides img");

slides.forEach((slide, i) => {
    slide.onclick = () => {
        circular_slider.style.transform = `rotateZ(-${360 / 5 * (i + 4)}deg)`;

        images.forEach((img, i) => {
            img.style.setProperty('--img-no', 2);
            img.classList.remove('active');
        })
        slide.querySelector('img').classList.add('active');
    }
}) 
