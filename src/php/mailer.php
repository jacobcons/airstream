<?php
// Only process POST reqeusts.
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  ini_set('error_reporting', E_STRICT);
  $fillOut = 'Please fill out the required field';

  // Get the form fields and remove whitespace.
  $name = trim($_POST['name']);
  $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
  $date = trim($_POST['date']);
  $location = trim($_POST['location']);
  $message = trim($_POST['message']);
  $hearAbout = trim($_POST['hearAbout']);
  $secret = '6LeOpycUAAAAABXwVk93Hkx2udXnZ2n0CHJAkBha';

  $url = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response'].'&remoteip'.$_SERVER['REMOTE_ADDR']);
  $recaptcha = json_decode($url, TRUE);

  if (empty($name)) {
    $res->errors->name = $fillOut;
  }

  if (empty($email)) {
    $res->errors->email = $fillOut;
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $res->errors->email = 'Invalid email address';
  }

  if (empty($message)) {
    $res->errors->message = $fillOut;
  }

  if ($recaptcha['success'] == false) {
    $res->recaptcha = $fillOut;
  }

  if ((array)$res->errors OR (array)$res->recaptcha) {
    $res->status = 'Please fix the errors above';
    http_response_code(400);
  } else {
    // Set the recipient email address.
    $recipient = "jacobcons@gmail.com";

    // Set the email subject.
    $subject = "Enquiry from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Date: $date\n";
    $email_content .= "Location: $location\n";
    $email_content .= "Where did you hear about us? $hearAbout\n";
    $email_content .= "\nMessage:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        $res->status = 'Your email has been sent. Thank you';
        http_response_code(200);
    } else {
        $res->status = 'Oops something went wrong. Email us directly at info@airstreamstudio.co.uk';
        http_response_code(500);
    }
  }

  echo json_encode($res);
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
}
?>
