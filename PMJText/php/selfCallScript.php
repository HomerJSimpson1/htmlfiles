<!DOCTYPE html>

<html language="en">

      <head>
	<title>An HTML Form That Calls Itself</title>
      </head>

      <body>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
	      <p><label for="guess">Type your guess here:</label><br>
	      <input type="text" id="guess" name="guess"></p>
	      <button type="submit" name="submit" value="submit">Submit</button>
	</form>
      </body>
</html>