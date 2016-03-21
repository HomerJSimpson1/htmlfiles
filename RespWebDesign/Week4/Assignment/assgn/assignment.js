// put your javascript code here

// Create variables for all of the templates.
// This enhances performance by requiring compilation only once on page load.
// We can then use the same compiled templates many times.

var animal_classes_template, animal_class_template, animal_template;


// Create variables to keep track of the current animal class and animal
var current_class = animals_data.category[0];
var current_animal = current_class.animals[0];


// Create a helper function to instantiate a template and display
// the results in the content div
function showTemplate(template, data) {
    var html = template(data);
    $('#content').html(html);
}


// Use the document.ready to wait until the page is fully loaded before running
// our code.

$(document).ready(function() {
    // Compile all of our templates
    // var cur_template;

    // Animal Classes Template
    var cur_template = $("#animal-classes-template").html();
    animal_classes_template = Handlebars.compile(cur_template);

    // Animal Class Template
    cur_template = $("#animal-class-template").html();
    animal_class_template = Handlebars.compile(cur_template);

    // Animal Template
    cur_template = $("#animal-template").html();
    animal_template = Handlebars.compile(cur_template);

    // Use the click event to display the animal classes data
    $("#animal-classes-tab").click(function() {
	showTemplate(animal_classes_template, animals_data);

	// Make the Animal Classes Tab the active tab
	$(".nav-tabs .active").removeClass("active");
	$("#animal-classes-tab").addClass("active");

	// Callback
	$(".animal-classes-thumbnail").click(function() {
	    var index = $(this).data("id");

	    current_class = animals_data.category[index];
	    showTemplate(animal_class_template, current_class);

	    ///*
 	    $(".animal-class-thumbnail").click(function() {
		var index = $(this).data("id");
		current_animal = current_class.animals[index];
		showTemplate(animal_template, current_animal);

	    });
	    //*/


	});
    
    });

    
    // Use the click event to display the animal class data
    $("#animal-class-tab").click(function() {
	// display the animal class template
	showTemplate(animal_class_template, current_class);

	// Make the Animal Class Tab the active one
	$(".nav-tabs .active").removeClass("active");
	$("#animal-class-tab").addClass("active");

	// Click event
	$(".animal-class-thumbnail").click(function() {
	    var index = $(this).data("id");

	    // Set the current animal based on the index of the animal
	    // that was clicked upon
	    current_animal = current_class.animals[index];

	    // Display the animal template
	    showTemplate(animal_template, current_animal);
	});

    });


    // Start the page by showing all animal classes using a virtual click
    $("#animal-classes-tab").click();

}); // end $(document).ready
