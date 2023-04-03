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
   
    BoxReadMore.classList.toggle('view')
    
})

//Modal-Window ===============

function openModal(nModal) {
    const btnViewModal = document.querySelector('.btnViewSite')
    const windowModal = document.querySelectorAll('#windowModal')
    let n = nModal

    //windowModal[n].length -1;
    windowModal[n].classList.add('open')
    
  
    windowModal[n].addEventListener('click', (e) =>{
        if (e.target.id == 'close' || e.target.id == 'windowModal') {
            windowModal[n].classList.remove('open')
        }
    
    })
    
}

