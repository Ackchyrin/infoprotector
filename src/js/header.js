window.addEventListener('scroll', function() {
    if(window.scrollY > 600){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".menuScroll");
    const menuItems = document.querySelectorAll(".header-menu__item-scroll");
    let currentActiveSectionId = null;

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateMenu() {
        let newActiveSectionId = null;

        sections.forEach(section => {
            if (isInViewport(section)) {
                newActiveSectionId = section.getAttribute("id");
            }
        });

        if (newActiveSectionId) {
            currentActiveSectionId = newActiveSectionId;
        }

        menuItems.forEach(item => {
            const itemSectionId = item.getAttribute("data-section");
            if (itemSectionId === currentActiveSectionId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    window.addEventListener("load", updateMenu);
    window.addEventListener("scroll", updateMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetSectionId = this.getAttribute("data-section");
            const targetSection = document.getElementById(targetSectionId);
            const heightTop = targetSection.offsetTop - 100;
            window.scrollTo({
                top: heightTop,
                behavior: "smooth"
            });
        });
    });
});

document.querySelector('.mobile-menu__bottom').innerHTML = document.querySelector('.header-menu').innerHTML

document.querySelectorAll('.mobile-menu .header-menu__item').forEach(el=>{
    el.addEventListener('click',closeMenuMobile)
})

function openMenuMobile(){
    document.querySelector('html').style.overflow = 'hidden'
    document.querySelector('.mobile-menu').classList.add('active')
}

function closeMenuMobile(){
    document.querySelector('html').style.overflow = 'initial'
    document.querySelector('.mobile-menu').classList.remove('active')
}

document.querySelector('.header-logo').addEventListener('click',()=>{document.querySelector('.header-menu__item').click()})
