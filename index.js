
let menu = document.querySelector('#menu');
let nav = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle('active');

}

const dark =document.querySelector('#dark');
 dark.addEventListener('click', function(){
    dark.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
 });
 
 
 

let search = document.querySelector('#search');
let searchIcon = document.querySelector('.search-icons');

search.onclick = () => {
  
    searchIcon.classList.toggle('show');
}


let logo = document.querySelector('#logo');
let login = document.querySelector('#login');

logo.onclick = () =>{
    login.classList.toggle('showlogin')
}


// window.onscroll = () =>{
//     if(top >= offset && top <offset + height){
//         navbar.forEach(links => {
//             links.classList.remove('active');
//             document.querySelector('header .navbar a[href*='+ id +']').classList.add('active');
//         })
//     }

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menu.classList.remove('fa-xmark');
    nav.classList.remove('active');
}






/* scroll revseal */
ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500,
    delay:400
 });
 ScrollReveal().reveal('.header , .heading ,.social-medial-icons ', { delay: 200 ,origin:'top'});
 ScrollReveal().reveal('.home-img , h3 ', { delay: 500 ,origin:'right'});
 ScrollReveal().reveal('.text ,p , .box ', { delay: 500 ,origin:'left'});
 ScrollReveal().reveal('h1 , .img-container , .content , .box1', { delay: 100 ,origin:'bottom'});
