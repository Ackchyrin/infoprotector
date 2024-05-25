document.querySelectorAll('.services-list__item').forEach(el=>el.querySelector('.services-list__item-visible').addEventListener('click',()=>{el.classList.add('active')}))
document.querySelectorAll('.services-list__item').forEach(el=>el.querySelector('.services-list__item-hidden .services-list__hidden-close').addEventListener('click',()=>{el.classList.remove('active')}))
