let colItem = 0
let offsetHeight = 0
let permanentHeught = document.querySelector('.tariffs-list__items').clientHeight

document.querySelectorAll('.tariffs-list__items-item').forEach((el,index)=>{
    colItem = colItem + index
    if(index > 6){
        return
    }
    offsetHeight = offsetHeight + el.clientHeight + 5
})

if(colItem < 6){
    document.querySelector('.tariffs-open').style.display = 'none'
}

document.querySelector('.tariffs-list__items').style.height = offsetHeight + 'px'

document.querySelector('.tariffs-open').addEventListener('click',()=>{
    document.querySelector('.tariffs-list__items').classList.toggle('active')
    document.querySelector('.tariffs-open').classList.toggle('active')

    if(document.querySelector('.tariffs-open').classList.contains('active')){
        document.querySelector('.tariffs-open').innerHTML = 'Скрыть <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 9L12.5 15L18.5 9" stroke="#1E272E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        smoothHeightTransition(document.querySelector('.tariffs-list__items'), permanentHeught, 400);
    }else{
        document.querySelector('.tariffs-open').innerHTML = 'Раскрыть полностью <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 9L12.5 15L18.5 9" stroke="#1E272E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        smoothHeightTransition(document.querySelector('.tariffs-list__items'), offsetHeight, 400);
    }

})

function smoothHeightTransition(element, targetHeight, duration) {
    const startHeight = element.clientHeight;
    const heightDifference = targetHeight - startHeight;
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        element.style.height = startHeight + heightDifference * progress + "px";
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}


