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


