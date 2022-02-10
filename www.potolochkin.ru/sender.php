<?php
	$phone = $_POST['phone'];
 

	$to = "al.cozy@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Телефон: $phone";
	mail($to, $subject, $msg, "From: $to ");

?>

