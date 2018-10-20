<?php
	$movies = array(
		'Science Fiction' => array('Alien', 'Star Wars', 'Predator'),
		'Action' => array('Cannonball Run', 'The Avengers', 'The Incredible Hulk'),
		'Drama' => array('Three Billboards Outside Ebbing, MO', '12 Years a Slave', 'The Artist'),
		'Comedy' => array('Crazy Rich Asians', 'The Hangover', 'Baby Mama')
		);
	/*
	foreach ($movies as $m) {
		while(list($k, $v) = each($m)) {
			  echo "$k ... $v <br>";
			  }
		echo "<hr>";
		}
	*/

	/*
	echo count(array_keys($movies));
	echo "<br>";
	//echo $movies['Science Fiction'];
	echo $movies['Science Fiction'][0];
	for ($i = 0; $i < count($movies['Science Fiction']); $i++) {
	    echo $movies['Science Fiction'][$i]."<br>";
	    }
	*/


	// PRINT OUT ALL OF THE MOVIES FOR EACH GENRE
	while(list($k, $v) = each($movies)) {
		echo "$k: ";
		for ($i = 0; $i < count($v); $i++) {
		    if ($i < count($v) - 1)
		       echo $v[$i].", ";
		    else
		       echo $v[$i];
		}
		echo "<br>";
		echo "<hr>";
	}


	// ALL OF THE ONES BELOW DO NOT WORK
	/*
	foreach (array_keys($movies) as $k) {
		echo $k;
		for ($i = 0; $i < count($movies[$k]); $i++) {
		    echo "$k: ";
		    echo $movies[$k][$i].", ";
		    echo "<br>";
		}
	}
	*/

	/*
	foreach (array_keys($movies) as $k)) {
		echo "$k ...";
		for ($i = 0; $i < count($k); $i++) {
		    echo "$movies[$k][$i], ";
		    }
		echo "<br>";
		// echo "$k <br>";
		}

	*/

	/*	
	foreach ($movies as list($k, $v)) {
		echo "$k ... $v <br>";
		}
	*/
	/* echo array_values($movies); */

	/*
	while(list($k, $v) = each($movies)) {
		echo "$k ... $v <br>";
		}
	echo "<hr>";
	*/

?>
			