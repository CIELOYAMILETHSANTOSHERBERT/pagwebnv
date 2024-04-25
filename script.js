// scripts.js

$(document).ready(function () {
    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });

    // Contact Form Submission
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();

        // Simple validation
        if (name == '' || email == '' || message == '') {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        // Simulación de envío
        alert(
            '¡Gracias por tu mensaje, ' +
                name +
                '! Nos pondremos en contacto contigo lo antes posible.'
        );

        // Limpiar el formulario después del envío
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
});
