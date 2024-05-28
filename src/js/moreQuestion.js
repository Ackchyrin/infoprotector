document.querySelectorAll('.moreQuestion-questions__quest').forEach(el=>{
    el.addEventListener("click",()=>{
        el.classList.toggle('active')
        answer = el.querySelector('.moreQuestion-questions__quest-description')
        if(answer.style.height && answer.style.height !== '0px'){
            answer.style.height = '0px'
        }else{
            answer.style.height = answer.scrollHeight + 'px'
        }
    })
})
