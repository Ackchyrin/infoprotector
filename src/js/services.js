document.querySelectorAll('.services-list__item').forEach(el=>el.querySelector('.services-list__item-visible').addEventListener('click',()=>{el.classList.add('active')}))
document.querySelectorAll('.services-list__item').forEach(el=>el.querySelector('.services-list__item-hidden .services-list__hidden-close').addEventListener('click',()=>{el.classList.remove('active')}))


if(window.innerWidth <= 880){
    let colItemService = 0
    let offsetHeightService = 0
    let permanentHeughtService = document.querySelector('.services-list').clientHeight

    document.querySelectorAll('.services-list__item').forEach((el,index)=>{
        colItemService = colItemService + index
        if(index > 4){
            return
        }
        offsetHeightService = offsetHeightService + el.clientHeight + 7
    })

    if(colItemService < 4){
        document.querySelector('.services-mobile__open').style.display = 'none'
    }

    document.querySelector('.services-list').style.height = offsetHeightService + 'px'

    document.querySelector('.services-mobile__open').addEventListener('click',()=>{
        document.querySelector('.services-list__item').classList.toggle('active')
        document.querySelector('.services-mobile__open').classList.toggle('active')

        if(document.querySelector('.services-mobile__open').classList.contains('active')){
            document.querySelector('.services-mobile__open').innerHTML = 'Скрыть <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 9L12.5 15L18.5 9" stroke="#1E272E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
            smoothHeightTransition(document.querySelector('.services-list'), permanentHeughtService, 400, true);
        }else{
            document.querySelector('.services-mobile__open').innerHTML = 'Раскрыть полностью <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 9L12.5 15L18.5 9" stroke="#1E272E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
            smoothHeightTransition(document.querySelector('.services-list'), offsetHeightService, 400, false);
        }

    })

}

document.addEventListener("DOMContentLoaded", function() {
    const svgContainer = document.querySelector(".service-animation");
    const circlePath = document.getElementById("circle-path");
    const plusPath = document.getElementById("plus-path");

    svgContainer.addEventListener("mouseover", () => {
        circlePath.classList.remove("circle-animate-out");
        plusPath.classList.remove("plus-animate-out");

        circlePath.classList.add("circle-animate-in");
        plusPath.classList.add("plus-animate-in");
    });

    svgContainer.addEventListener("mouseout", () => {
        circlePath.classList.remove("circle-animate-in");
        plusPath.classList.remove("plus-animate-in");

        circlePath.classList.add("circle-animate-out");
        plusPath.classList.add("plus-animate-out");
    });
});
