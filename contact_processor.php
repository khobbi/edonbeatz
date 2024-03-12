<?php 
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $fullname = $_POST["fullname"];
        $user_email = $_POST["email"];
        $telephone = $_POST["telephone"];
        $message = $_POST["message"];

        $to = "edonbeatz1@gmail.com";
        $subject = "Form from Site";
        $email_body = "Full name: $fullname\nTelephone: $telephone\nEmail: $user_email\n\n".
        "$message\n";

        $headers = "From: $user_email";

        if(mail($to, $subject, $email_body, $headers)){
            echo "Message sent successfully!";
        } else {
            echo "Error sending message.";
        }
    }
?>