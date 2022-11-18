$(document).ready(function () {

    $('#form-contacto').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "js/form-contacto.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    window.location.href = "https://x-data.mx/gracias";
                    $('.output_message-footer').text('¡Gracias por tus respuestas! En breve nuestro equipo de ventas te contactará para continuar con tu proceso.');  
                }
                else if (y == 'miss') {
                    $('.output_message-footer').text('¡Ups! Parece que olvidaste dejar tus datos');
                }
                else {
                    $('.output_message-footer').text('¡Ups! Hubo un error el enviar el mensaje');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });

});