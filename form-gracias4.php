 <?php



 // here we check if all fields are filled.
 $required = array('name', 'email', 'tel', 'empresa');
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
    $puesto = $_REQUEST['puesto'];
    $empresa = $_REQUEST['empresa'];
    $tel = $_REQUEST['tel'];
    $email = $_REQUEST['email'];
    $formulario = $_REQUEST['formulario'];
    $asunto = $_REQUEST['asunto'];

    $nivel = $_REQUEST['nivel'];
    $ayuda = $_REQUEST['ayuda'];
    $donde = $_REQUEST['donde'];
    $presupuesto = $_REQUEST['presupuesto'];

    $fullmessage = "Nombre: ".$name."\n"."E-mail: ".$email."\n"."Empresa: ".$empresa."\n"."Teléfono: ".$tel."\n"."Formulario: ".$formulario."\n"."¿Cuál es tu nivel de conocimiento en analítica de datos?: ".$nivel."\n"."¿Cómo podemos ayudarte?: ".$ayuda."\n"."¿Dónde almacenas tu data?: ".$donde."\n"."¿Cuál es el presupuesto de inversión en tecnología para el 2022 en pesos mexicanos?: ".$presupuesto;

  // Set your email address where you want to receive emails.
  
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