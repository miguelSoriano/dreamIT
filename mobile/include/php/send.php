<?php
/*if(!isset($_POST['submit']))
{
  //This page should not be accessed directly. Need to submit the form.
  echo "ERROR. Para accesar aqui, debes envíar el formulario. :) ";
}*/
$name = $_POST['name'];
$email = $_POST['email'];
$need = $_POST['needs'];
$have = $_POST['haves'];

echo $name;


//Validate first
/*if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['need']) ||
   empty($_POST['have']))
{
    echo "Todos los campos son requeridos.";
exit;
}*/

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = $email;
$email_subject = "Nuevo Proyecto | Dream-IT :D";
$email_body = "Recibimos un nuevo mensaje de $name.\n".
    " ¡Hola!\n ¿Por qué no $need un proyecto?\n Tenemos $have que nos gustaría compartirles.\n Pueden escribir a: \n    $email \n ¡Saludos! \n $name";

$to = "miguel@dream-it.com.mx";//emailDestino

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_from \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: ../../index.html');

// echo "success";


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>