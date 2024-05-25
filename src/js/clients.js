const swiper = new Swiper('.swiper-clients', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.clients-swiper__container .swiper-button-next',
      prevEl: '.clients-swiper__container .swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 20
});

document.querySelectorAll('.clients-swiper').forEach(el=>el.querySelector('.clients-swiper__visible').addEventListener('click',()=>{el.classList.add('active')}))
document.querySelectorAll('.clients-swiper').forEach(el=>el.querySelector('.clients-swiper__hidden .clients-swiper__hidden-close').addEventListener('click',()=>{el.classList.remove('active')}))

