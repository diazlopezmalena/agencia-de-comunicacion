$(document).ready(function(){
    //carousel
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    // Formulario - Contacto
    let boton = document.getElementById("btn");
    boton.onclick = () =>{divFormulario.style.display = "flex";}

    let cerrar = () =>{divFormulario.style.display ="none";}

    let divFormulario = document.getElementById("form");
    let salir = document.getElementById("salir");
    
    divFormulario.addEventListener("click", cerrar);
    salir.addEventListener("click", cerrar);
    
    // Cerrar nav hamburguesa al hacer click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-collapse').removeClass('show').addClass('hide');
    })
});