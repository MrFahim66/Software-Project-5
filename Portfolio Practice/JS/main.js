/* CHANGE BACKGROUND HEADER */
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* SERVICES */

const modalViews = document.querySelectorAll('..services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

/* MIXITUP FILTER PORTFOLIO */


/* Link Actice Work */


/* Swiper Testimonial */