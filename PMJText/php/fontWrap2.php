<?php
	function fontWrap($txt, $fontSize="12pt") {
		 echo "<span style=\"font-size:".$fontSize."\">".$txt."</span>";
	}

	fontWrap("really big text<br/>", "24pt");
	fontWrap("some body text<br/>", "16pt");
	fontWrap("smaller body text<br/>");
	fontWrap("even smaller body text<br/>", "10pt");
?>