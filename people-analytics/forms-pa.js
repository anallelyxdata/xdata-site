$(document).ready(function () {

    $('#baiwa-demo').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "forms-pa.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    $('.output_message').text('¡Tus datos se han enviado! En breve nuestro equipo te contactará para más información.');
                }
                else if (y == 'miss') {
                    $('.output_message').text('¡Ups! Parece que olvidaste dejar tus datos');
                }
                else {
                    $('.output_message').text('¡Ups! Hubo un error el enviar el mensaje');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });

    $('#baiwa-pruebasincosto').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "https://x-data.mx/people-analytics/forms-pa-sincosto.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    $('.output_message').text('¡Tus datos se han enviado! En breve nuestro equipo te contactará para más información.');
                }
                else if (y == 'miss') {
                    $('.output_message').text('¡Ups! Parece que olvidaste dejar tus datos');
                }
                else {
                    $('.output_message').text('¡Ups! Hubo un error el enviar el mensaje');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });

   

});