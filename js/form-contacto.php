 <?php


 // here we check if all fields are filled.
 $required = array('name', 'email', 'phone');
 $error = false;
 foreach($required as $field) {
   if (empty($_REQUEST[$field])) {
     $error = true;
   }
 }

 //if something is not filled(empty) and error is true
 if ($error) {
   echo 'this is miss';
 }
 // if everything is filled then we execute the mail function
 else {

    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $company = $_REQUEST['company'];
    $phone = $_REQUEST['phone'];
    $country = $_REQUEST['country'];
    $message = $_REQUEST['message'];

    $fullmessage = "Nombre: ".$name."\n"."E-mail: ".$email."\n"."Empresa: ".$company."\n"."Teléfono: ".$phone."\n"."País: ".$country."\n"."Mensaje: ".$message;

  // Set your email address where you want to receive emails.
    $to = 'marketing@x-data.mx';
   $subject = "Llenaron el formulario de contacto del sitio web:)";
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'contacto@x-data.mx';
   $subject = "Llenaron el formulario de contacto del sitio web:)";
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'yuritzi@x-data.mx';
   $subject = "Llenaron el formulario de contacto del sitio web:)";
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'lilian@x-data.mx';
   $subject = "Llenaron el formulario de contacto del sitio web:)";
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'anallely@x-data.mx';
   $subject = "Llenaron el formulario de contacto del sitio web:)";
   $send_email = mail($to,$subject,$fullmessage,$email);


   if ($send_email == false) {
     echo 'this is error';
   } else {
     echo 'this is success';
   }
   }
?>