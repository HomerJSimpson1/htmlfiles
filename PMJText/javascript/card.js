// Defining a Card object

// Constructor
function Card(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.printCard = printCard;
}


// function printCard() {
//     var name_line = "Name: " + this.name + "<br>\n";
//     var email_line = "Email: " + this.email + "<br>\n";
//     var address_line = "Address: " + this.address + "<br>\n";    
//     var phone_line = "Phone: " + this.phone + "<br>\n";
//     document.write(name_line, email_line, address_line, phone_line, "<br>\n");
// }

// The printCard() function, slightly tweaked to improve readability
function printCard() {
    var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
    var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
    var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";    
    var phone_line = "<strong>Phone: </strong>" + this.phone + "<br><hr>";
    document.write(name_line, email_line, address_line, phone_line);
}


// Create some objects

var tom = new Card("Tom Jones", "tom@jones.com", "123 Elm Street, Sometown, ST 77777", "555-555-9876");

var holmes = new Card();
holmes.name = "Sherlock Holmes";
holmes.email = "sherlock@holmes.com";
holmes.address = "221B Baker Street, London, England";
holmes.phone = "555-555-3456";


var sue = new Card("Sue Suthers", "sue@suthers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876");
var fred = new Card("Fred Fanboy", "fred@fanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-4444");
var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344");


// Now print them
tom.printCard();
holmes.printCard();

sue.printCard();
fred.printCard();
jimbo.printCard();
