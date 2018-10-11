// Filename: random.js

function rand(low_num, high_num) {
    // Uses Math.random() to generate a number between 0 and 1
    // The function then scales the number appropriately to fit inside a specified range.
    return Math.floor(Math.random() * high_num) + low_num;
}


function useRand() {
    // Get the values from the form
    lowVal = parseInt(document.theform.low.value);
    highVal = parseInt(document.theform.high.value);
    randVal = rand(lowVal, highVal);
    // The following wipes out what's on the page and replaces it with the below.
    // How do I append it instead?
    // For now, I'll just use an alert box instead.
    //document.write("The randomly chosen number in the interval (" + lowVal + ", " + highVal + ") is: " + randVal);
    alert("The randomly chosen number in the interval (" + lowVal + ", " + highVal + ") is: " + randVal);
    return randVal;
}
