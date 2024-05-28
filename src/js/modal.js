function openModal(){
    document.querySelector('html').style.overflow = 'hidden'
    document.querySelector('.modal-background').classList.add('active')
    document.querySelector('.modal').classList.add('active')
}

function closeModal(){
    document.querySelector('html').style.overflow = 'initial'
    document.querySelector('.modal-background').classList.remove('active')
    document.querySelector('.modal').classList.remove('active')
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' || event.key === 'Esc'){
        closeModal()
    }
})

openModal()
