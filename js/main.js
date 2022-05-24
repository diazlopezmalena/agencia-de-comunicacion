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
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplaySpeed: 3000
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplaySpeed: 3000
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
        $('body').removeClass('scroll-up');
    });
    
    // Ocultar y mostrar nav según scroll
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll == 0) {
            body.classList.remove(scrollUp);
            return;
        }
        
        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    });
});