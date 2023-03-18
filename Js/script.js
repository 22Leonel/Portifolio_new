const header = document.querySelector("header")


window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

//----------Menu-------------------------
const navMenu = document.querySelector('.nav-menu')
const menu = document.querySelector('#menu-icon')


menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x')
    navMenu.classList.toggle('open')
})

//---------About-me btn Read  more---------------
let BoxReadMore = document.querySelector('.read-more') 
let btnReadMore = document.querySelector('.btnRead-more')

btnReadMore.addEventListener('click', function () {
   if(BoxReadMore.style.display == 'block'){
        BoxReadMore.style.display = 'none'
        btnReadMore.textContent = 'Ver mais'

    } else{
        BoxReadMore.style.display = 'block'
        btnReadMore.textContent = 'Ver menos'
    } 
})