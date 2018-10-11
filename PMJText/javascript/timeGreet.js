// Get the current Date and Time
now = new Date();

// Delineate hours, minutes, and seconds
hour_of_day = now.getHours();
minute_of_hour = now.getMinutes();
seconds_of_minute = now.getSeconds();

// Display the time
document.write("<h3>");
document.write(hour_of_day + ":" + minute_of_hour + ":" + seconds_of_minute);
document.write("</h3>");

// Display a Greeting
document.write("<p>");
var msg = "";
if (hour_of_day < 10) {
    msg = "Good morning.";
}
else if (hour_of_day > 14 && hour_of_day <= 17) {
    msg = "Good afternoon.";
}
else if (hour_of_day > 17) {
    msg = "Good evening.";
}
else {
    msg = "Good day.";
}

document.write(msg);
document.write("</p>");

	
