<?php
	function addFive(&$num) {
		 $num += 5;
		 return($num);
	}

	$orignum = 10;
	addFive($orignum);
	echo $orignum;
?>