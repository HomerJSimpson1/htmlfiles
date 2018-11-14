<?php
	function doDB() {
		 global $mysqli;

		 // Replace below connection information with the specific info needed to connect to your database
		 // i.e. hostname, username, password, database_name
		 // Connect to server and select database; you may need it
		 $mysqli = mysqli_connect("localhost", "testuser", "somepass", "testDB");

		 // If connection fails, stop script execution
		 if (mysqli_connect_errno()) {
		    printf("Connect failed: %s\n", mysqli_connect_error());
		    exit();
		 }
	}

?>