<?php
	$mysqli = new mysqli("localhost", "testuser", "somepass", "testDB");

	if (mysqli_connect_errno()) {
	   printf("Connect failed: %s\n", mysqli_connect_errno());
	   exit();
	}
	else {
	   printf("Host information: %s\n", mysqli_get_host_info($mysqli));
	   mysqli_close($mysqli);
	}
?>