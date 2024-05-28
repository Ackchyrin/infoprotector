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
        let activeMenuItem = null;

        sections.forEach(section => {
            const sectionId = section.getAttribute("id");
            const menuItem = document.querySelector(`.header-menu__item-scroll[data-section="${sectionId}"]`);
            if (isInViewport(section)) {
                activeMenuItem = menuItem;
            }
        });

        menuItems.forEach(item => {
            item.classList.remove("active");
        });

        if (activeMenuItem) {
            activeMenuItem.classList.add("active");
        }
    }

    window.addEventListener("load", updateMenu);
    window.addEventListener("scroll", updateMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetSectionId = this.getAttribute("data-section");
            const targetSection = document.getElementById(targetSectionId);
            heightTop = targetSection.offsetTop - 100
            window.scrollTo({
                top: heightTop,
                behavior: "smooth"
            });
        });
    });
}); 
