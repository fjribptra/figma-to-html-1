const humberger = document.querySelector('.humberger')
const nav = document.querySelector('nav')
const navUl = document.querySelector('#navUl')

function humbergerToogle() {
    humberger.classList.toggle('active')
    
    if(humberger.classList[1] == 'active') {
        navUl.style.display = 'flex'
    } else {
        navUl.style.display = 'none'
    
    }
}