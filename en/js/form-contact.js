$(document).ready(function () {

    $('#form-contacto').on('submit', function () {
        // Add text 'loading...' right after clicking on the submit button. 
        $('.output_message-footer').text('Enviando...');
        var form = $(this);
        $.ajax({
            // if it can't find email.php just chahge the url path to the full path, including your domain and all folders.
            url: "https://x-data.mx/en/js/form-contact.php",
            method: form.attr('method'),
            data: form.serialize(),
            success: function (result) {

                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES
                let d = result.split(" ");
                let y = d.slice(-1)[0];
                // THIS IS WHAT I HAVE ADDED TO REMOVE EXCESS SPACES

                if (y == 'success') {
                    $('.output_message-footer').text('Thanks for your answers! Our sales team will contact you shortly to continue with your process.');  
                }
                else if (y == 'miss') {
                    $('.output_message-footer').text('Oops! Some form inputs are empty.');
                }
                else {
                    $('.output_message-footer').text('Oops! Something went wrong.');
                }
            }
        });

        // Prevents default submission of the form after clicking on the submit button. 
        return false;
    });

});