 <?php


 // here we check if all fields are filled.
 $required = array('name', 'email', 'tel', 'empresa', 'reto');
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
    $empresa = $_REQUEST['empresa'];
    $tel = $_REQUEST['tel'];
    $reto = $_REQUEST['reto'];
    $formulario = $_REQUEST['formulario'];
    $asunto = $_REQUEST['asunto'];

    $fullmessage = "Nombre: ".$name."\n"."E-mail: ".$email."\n"."Empresa: ".$empresa."\n"."Teléfono: ".$tel."Reto: ".$reto."Formulario: ".$formulario;

  // Set your email address where you want to receive emails.
   // $to = 'marketing@x-data.mx';
   // $subject = $_REQUEST['asunto'];;
   // $send_email = mail($to,$subject,$fullmessage,$email);

   // $to = 'yuritzi@x-data.mx';
   // $subject = $_REQUEST['asunto'];;
   // $send_email = mail($to,$subject,$fullmessage,$email);

   // $to = 'lilian@x-data.mx';
   // $subject = $_REQUEST['asunto'];;
   // $send_email = mail($to,$subject,$fullmessage,$email);

  $to = 'anallely@x-data.mx';
   $subject = $_REQUEST['asunto'];;
   $send_email = mail($to,$subject,$fullmessage,$email);


   if ($send_email == false) {
     echo 'this is error';
   } else {
     echo 'this is success';
   }
   }
?>