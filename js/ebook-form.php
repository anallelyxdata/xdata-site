 <?php


 // here we check if all fields are filled.
 $required = array('NAME', 'EMAIL','PHONE','COMPANY');
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

    $name = $_REQUEST['NAME'];
    $email = $_REQUEST['EMAIL'];
    $phone = $_REQUEST['PHONE'];
    $company = $_REQUEST['COMPANY'];
    $formulario = $_REQUEST['FORMULARIO'];
    $asunto = $_REQUEST['ASUNTO'];
    

    $fullmessage = "Nombre: ".$name."\n"."E-mail: ".$email."\n"."Teléfono: ".$phone."Empresa: ".$company."E-book: ".$name.;

  // Set your email address where you want to receive emails.
   $to = 'marketing@x-data.mx';
   $subject = $_REQUEST['asunto'];;
   $send_email = mail($to,$subject,$fullmessage,$email);

  $to = 'anallely@x-data.mx';
   $subject = $_REQUEST['asunto'];;
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'contacto@x-data.mx';
   $subject = $_REQUEST['asunto'];;
   $send_email = mail($to,$subject,$fullmessage,$email);

   $to = 'yuritzi@x-data.mx';
   $subject = $_REQUEST['asunto'];;
   $send_email = mail($to,$subject,$fullmessage,$email);


   if ($send_email == false) {
     echo 'this is error';
   } else {
     echo 'this is success';
   }
   }
?>