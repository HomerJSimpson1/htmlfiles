<?php
	function test() {
		 $testVariable = "this is a test variable";
	}

	// Should generate an error, as the $testVariable variable is
	// out of scope here.
	echo "test variable: ".$testVariable."<br>";
?>