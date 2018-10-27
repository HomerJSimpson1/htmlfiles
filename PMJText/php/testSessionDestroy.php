<?php
	session_start();
	$_SESSION['test'] = 5;
	session_destroy();
	echo $_SESSION['test']; // Prints 5
?>