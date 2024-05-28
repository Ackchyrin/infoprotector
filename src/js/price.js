document.querySelectorAll('.price-question__quest').forEach(el=>{
    el.addEventListener("click",()=>{
        el.classList.toggle('active')
        answer = el.querySelector('.price-question__quest-description')
        if(answer.style.height && answer.style.height !== '0px'){
            answer.style.height = '0px'
        }else{
            answer.style.height = answer.scrollHeight + 'px'
        }
    })
})
