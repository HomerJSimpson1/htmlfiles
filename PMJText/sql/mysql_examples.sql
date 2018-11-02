-- MySQL examples to illustrate various commands in MySQL

-- Substring Functions
SELECT SUBSTRING("MySQL", 2, 3); -- Any substring
SELECT LEFT("MySQL", 2);     	 -- The two leftmost characters
SELECT RIGHT("MySQL", 3);	 -- The three rightmost characters


-- String Modification Functions
-- Case functions
SELECT LCASE('MYSQL');	-- Returns "mysql"
SELECT UCASE('mysql');	-- Returns "MYSQL"

SELECT UCASE(lastname) FROM master_name;

-- Other String Modification Functions
-- REPEAT
SELECT REPEAT("bowwow", 4);

-- REPLACE
SELECT REPLACE('bowwowbowwowbowwowbowwow', 'wow', 'WOW');


-- DATE/TIME FUNCTIONS:
-- Working with Days:
SELECT DAYOFWEEK('2016-07-04');		-- Returns 2 (Sunday is 1st day of week, one-indexed)

SELECT WEEKDAY('2016-07-04');		-- Returns 0 (Monday is 1st weekday, zero-indexed)

SELECT DAYOFMONTH('2016-07-04');	-- Returns 4

SELECT DAYOFYEAR('2016-07-04');		-- Returns 186

-- More examples:
SELECT COUNT(id) FROM orders WHERE DAYOFWEEK(date_ordered) < 4;		-- Orders placed in the first half of the week
SELECT COUNT(id) FROM orders WHERE DAYOFWEEK(date_ordered) > 3;		-- Orders placed in the second half of the week

SELECT COUNT(id) FROM orders WHERE DAYOFMONTH(date_ordered) < 16;		-- Orders placed in the first half of the month
SELECT COUNT(id) FROM orders WHERE DAYOFMONTH(date_ordered) > 15;		-- Orders placed in the second half of the month

SELECT DAYNAME(date_ordered) FORM orders;		    -- Returns name of the day of the week for any date, e.g. "Monday"

SELECT DAYNAME(date_ordered) FROM orders ORDER BY DAYOFWEEK(date_ordered);  -- Sort by the name of the day of the week



-- Working with Months and Years:

SELECT MONTH('2016-07-04'), MONTHNAME('2016-07-04');	-- Returns 7 and July respectively

SELECT DISTINCT MONTHNAME(date_ordered) FROM orders;	-- Returns unique months when orders were placed

SELECT DISTINCT YEAR(date_ordered) FROM orders;		-- Returns unique years when orders were placed


-- Working with Weeks:
-- There are 8 different ways to calculate weeks (see p.474 of text, top of page).
-- Weeks can be tricky - sometimes there are 53 weeks in a year, e.g.
SELECT DAYNAME('2001-12-30');		-- Returns Sunday
SELECT WEEK('2001-12-30', 4);		-- Returns 53.  Of course, the 53rd week only contained 2 days.

SELECT WEEK('2001-12-30', 1);		-- Returns 52.  The 2nd argument indicates the start day, in this case Monday.
SELECT WEEK('2001-12-31', 1);		-- Returns 53.  The 2nd argument indicates the start day, in this case Monday.


-- Working with Hours, Minutes, and Seconds
-- The following returns each component of the time separately (e.g. hours=7, minutes=27, seconds=49)
SELECT HOUR('2016-01-09 07:27:49') AS hours, MINUTE('2016-01-09 07:27:49') AS minutes, SECOND('2016-01-09 07:27:49') AS seconds;

SELECT CONCAT_WS(':', HOUR('2016-01-09 07:27:49'), MINUTE('2016-01-09 07:27:49')) AS sample_time;	  -- Returns 07:27


-- USING THE DATE_FORMAT FUNCTION
-- GENERAL FORMAT: DATE_FORMAT(date, format). See chart pp. 476-477 of text for format options
SELECT DATE_FORMAT('2016-01-09 07:27:49', '%h%i') AS sample_time;	-- Returns 07:27

SELECT DATE_FORMAT('2016-01-09 07:27:49', '%W, %M %D, %Y') AS sample_time;	-- Returns Saturday, January 9th, 2016

-- Returns current time, but using the book's example current time result
-- Returns Tuesday the 13th of September, 2016 around 1 o'clock PM
SELECT DATE_FORMAT(NOW(), '%W the %D of %M, %Y around %1 o\'clock %p') AS sample_time;	   --'


-- DATE ARITHMETIC

-- DATE_ADD(date, INTERVAL value type)
-- DATE_SUB(date, INTERVAL value type)
-- See chart p. 478 text for example INTERVAL value types

SELECT DATE_ADD(NOW(), INTERVAL 21 DAY);	      -- Returns 2016-10-04 16:03:41 (Using current time value from the book)
SELECT DATE_SUB(NOW(), INTERVAL 21 DAY);	      -- Returns 2016-08-23 16:03:58

-- If no hours, minutes, or seconds are part of the expression, then the value returned is just a date, not a datetime
SELECT DATE_ADD('2015-12-31', INTERVAL 1 DAY);	    -- Returns '2016-01-01'
SELECT DATE_ADD('2015-12-31', INTERVAL 12 HOUR);    -- Returns '2015-12-31 12:00:00

-- You can also use + and - operators in lieu of DATE_ADD and DATE_SUB.
SELECT '2015-12-31' + INTERVAL 1 DAY; 	      -- Returns '2016-01-01'


-- OTHER DATE/TIME FUNCTIONS
-- NOW() returns a datetime value corresponding to the current date and time
-- CURDATE() and CURRENT_DATE() (synonymous functions) return the current date in YYYY-MM-DD format
SELECT CURDATE(), CURRENT_DATE();

-- CURTIME() and CURRENT_TIME() (also synonymous) return the current time in HH:MM:SS format
SELECT CURTIME(), CURRENT_TIME();

-- I *think* the following 3 return the same result
SELECT NOW(), SYSDATE(), CURRENT_TIMESTAMP();

-- UNIX_TIMESTAMP() returns the current date in (or converts a given date to) UNIX timestamp format.
-- UNIX timestamp format is in seconds since the epoch, or seconds since midnight, January 1, 1970.

SELECT UNIX_TIMESTAMP();    -- Returns (in book example) 1473782880

SELECT UNIX_TIMESTAMP('1973-12-30');	-- Returns 126057600


-- FROM_UNIXTIME() performs the inverse operation; that is, converts from UNIX timestamp format to full datetime format.
SELECT FROM_UNIXTIME('1473782880');	-- Returns 2016-09-13 16:08:00.000000

-- Displaying the datetime result in a more visually appealing manner....
SELECT FROM_UNIXTIME('UNIX_TIMESTAMP(), '%D %M %Y at %h:%i:%s');	-- Returns 13th September 2016 at 04:09:13 (book example)

