<?php 
if(isset($_GET['submit'])){
    $to = "agaphone@agaphone.com.br";
    $from = "agaphone@agaphone.com.br";
    $mensagem = utf8_encode('Remocao de Email');
    $email = $_GET['email'];
    $subject = $mensagem;
    $message = "Solicitação de remoção de email de: \n" . $email;

    $headers = "From:" . $from;
    $headers = "Content-Type: text/html; charset=UTF-8";
    mail($to,$subject,$message,$headers);

    header('Location: removido.html');
    }
?>