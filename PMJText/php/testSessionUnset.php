<?php
	session_start();
	$_SESSION['test'] = 5;
	session_destroy();
	unset($_SESSION['test']);
	echo $_SESSION['test']; // Prints nohting (or a notice about an undefined index).
?>