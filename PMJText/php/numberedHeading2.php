<?php
	function numberedHeading($txt) {
		 static $num_of_calls = 0;
		 $num_of_calls++;
		 echo "<h1>".$num_of_calls." ".$txt."</h1>";
	}

	numberedHeading("Widgets");
	echo "<p>We build a fine range of widgets.</p>";
	numberedHeading("Doodads");
	echo "<p>Finest in the world.</p>";
?>