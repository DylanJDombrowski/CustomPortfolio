<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if(empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: your-website-url?error");
        exit;
    }

    $recipient = "dyland601@gmail.com";
    $subject = "New Contact Form Submission from $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if(mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: your-website-url?success");
    } else {
        header("Location: your-website-url?error");
    }
}
?>
