<!DOCTYPE html>
<!-- The only difference between this version and embedCondition.php is that the table in this version is 
     built outside of php, by slipping back into HTML mode (by closing the PHP tag with ?> and then reopening
     the PHP tag to add the closing brace.  In the other version, we created the table inside of the PHP tags.
-->
<html language="en">
  <head>
    <title>More PHP Embedded Inside HTML</title>
    <style type="text/css">
      table, tr, th, td {
          border: 1px solid #000;
          border-collapse: collapse;
          padding: 3px;
      }
      th {
          font-weight: bold;
      }
    </style>
  </head>
  
  <body>
    <?php
      $some_condition = true;
      if ($some_condition) {
    ?>
    <table>
      <tr><th colspan=\"3\">
	  Today's Prices
      </th></tr>
      <tr><td>14.00</td><td>32.00</td><td>71.00</td></tr>
    </table>
    <?php
      }
    ?>
  </body>
</html>
