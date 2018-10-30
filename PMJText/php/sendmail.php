<?php
	// Start building the mail string
	$msg = "Name:	  ".$_POST['name']."\r\n";
	$msg.= "E-Mail:	  ".$_POST['email']."\r\n";
	$msg.= "Message:  ".$_POST['message']."\r\n";

	// Set up the mail
	$recipient = "you@yourdomain.com";
	$subject = "Form Submission Results";
	$mailheaders = "From: My Web Site <defaultaddress@yourdomain.com> \r\n";
	$mailheaders.= "Reply-To: ".$_POST['email'];

	// Send the mail
	mail($recipient, $subject, $msg, $mailheaders);
?>


<!DOCTYPE html>

<html language="en">
      <head>
	<title>Sending Mail from the Form in Listing 15.9</title>
      </head>
      <body>
	<p>Thanks, <strong><?php echo $_POST['name']; ?></strong>, for your message.</p>
	<p>Your e-mail address:
	<strong><?php echo $_POST['email']; ?></strong></p>
	<p>Your message: <br /> <?php echo $_POST['message']; ?></p>
      </body>
</html>