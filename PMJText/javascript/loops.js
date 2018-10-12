// File: loops.js

// Create the array
var names = new Array();
var i = 0;

// Loop and prompt for names:
do {
    //alert("Testing");
    next = prompt("Enter the Next Name", "");
    if (next > " ") {
	names[i] = next;
    }
    i++;
} while (next > " ");

document.write("<h2>" + (names.length) + " names entered.</h2>");

// Display all of the names
document.write("<ol>");
for (i in names) {
    document.write("<li>" + names[i] + "</li>");
}
document.write("</ol>");
