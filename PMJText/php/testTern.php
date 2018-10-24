<?php
	$mood = "sad";
	//$mood = "happy";
	//$mood = "iffy";

	$text = ($mood == "happy") ? "I am in a good mood!" : "I am in a $mood mood.";
	echo "$text";
?>