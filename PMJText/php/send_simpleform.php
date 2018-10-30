<!DOCTYPE html>

<html>
	<head>
		<title>A Simple Response</title>
	</head>
	<body>
		<p>Welcome, <strong><?php echo $_POST['user']; ?></strong>!</p>
		<p>Your message is:
		<strong><?php echo $_POST['message'] ?></strong></p>
	</body>
</html>