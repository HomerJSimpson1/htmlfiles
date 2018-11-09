<?php
	function doDB() {
		 global $mysqli;

		 // Connect to server and select database; you may need it
		 $mysqli = mysqli_connect("localhost", "testuser", "somepass", "testDB");

		 // If connection fails, stop script execution
		 if (mysqli_connect_errno()) {
		    printf("Connect failed: %s\n", mysqli_connect_error());
		    exit();
		 }
	}

?>