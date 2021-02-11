var burger = document.querySelector('.burger');
var ul = document.querySelector('ul');
burger.addEventListener('click', () => {
    ul.classList.toggle('active');
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 25,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
});        
