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

    // Функция, которая определяет, находится ли элемент в видимой области окна
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для обновления активного пункта меню на основе текущего положения скролла
    function updateMenu() {
        let activeMenuItem = null; // Переменная для хранения активного пункта меню

        // Находим активный пункт меню
        sections.forEach(section => {
            const sectionId = section.getAttribute("id");
            const menuItem = document.querySelector(`.header-menu__item-scroll[data-section="${sectionId}"]`);
            if (isInViewport(section)) {
                activeMenuItem = menuItem;
            }
        });

        // Удаляем класс "active" у всех пунктов меню
        menuItems.forEach(item => {
            item.classList.remove("active");
        });

        // Если есть активный пункт, добавляем ему класс "active"
        if (activeMenuItem) {
            activeMenuItem.classList.add("active");
        }
    }

    // Обновляем активный пункт меню при загрузке страницы и при скролле
    window.addEventListener("load", updateMenu);
    window.addEventListener("scroll", updateMenu);

    // Плавный скролл к разделу при клике на пункт меню
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const targetSectionId = this.getAttribute("data-section");
            const targetSection = document.getElementById(targetSectionId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
