<?php

// Contact subject
$subject ="Contacto dream-it.com.mx"; 

// Details
$message="$detail";

// Mail of sender
$mail_from="$customer_mail"; 

// From 
$header="from: $name <$mail_from>";

// Enter your email address
$to ='miguel@dream-it.com.mx';
$send_contact=mail($to,$subject,$message,$header);

// Check, if message sent to your email 
// display message "We've recived your information"
if($send_contact){
echo "We've recived your contact information";
}
else {
echo "ERROR";
}
?>