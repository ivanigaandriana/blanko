document.addEventListener("DOMContentLoaded",() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView:1,
        // spaceBetween:20,
        pagination:{
            el:'.review-dots',
            bulletActiveClass:'review-dot-active',
            bulletClass:'review-dot',
            clickable:true
        }
    });
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('open');
    })

    
});