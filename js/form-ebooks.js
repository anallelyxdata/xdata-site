$(document).ready(function () {

    $('#form-entusiasmo').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_messageE').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "https://x-data.mx/blog-form.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    window.location.href = "https://x-data.mx/gracias";
                    $('.output_messageE').text('¡Tus datos se han enviado! En breve nuestro te contactará para más información.');
                }
                else if (y == 'miss') {
                    $('.output_messageE').text('¡Ups! Parece que olvidaste dejar tus datos');
                }
                else {
                    $('.output_messageE').text('¡Ups! Hubo un error el enviar el mensaje');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });


    $('#form-ebook-guia').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "https://x-data.mx/blog-form.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    filePath = 'https://x-data.mx/valoracion/Guia_valoracion.pdf'
                    var link=document.createElement('a');
                    link.href = filePath;
                    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
                    link.click();


                    $('.output_message-footer').text('¡Felicidades! Ya tienes tu e-book');
                    window.location.href = "https://x-data.mx/gracias";
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

    $('#form-ebook-datadriven').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "https://x-data.mx/blog-form.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {

                    filePath = 'https://x-data.mx/valoracion/Data_driven.pdf'
                    var link=document.createElement('a');
                    link.href = filePath;
                    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
                    link.click();


                    $('.output_message-footer').text('¡Felicidades! Ya tienes tu e-book');
                    window.location.href = "https://x-data.mx/gracias";

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


