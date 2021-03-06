Websites = new Mongo.Collection("websites");

if (Meteor.isClient) {

	/////
	// template helpers 
	/////

	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			return Websites.find({});
		}
	});


  // I added the following helper function to retrieve user names
  Template.body.helpers({username: function(){
      if (Meteor.user()) {
          return Meteor.user().emails[0].address;
	  //return Meteor.user().username;
      }
      else {
        return "Anonymous User";
      }

    } // End username: function()

  }); // End Template.body.helpers()

  // End of the added helper function (Template.body.helpers) that I added



    
        // Template.body.helpers({
	//     username:function(){
	// 	if(Meteor.user()){
	// 	    return Meteor.user().username;
	// 	    // return Meteor.user().emails[0].address;
	// 	}
	// 	else {
	// 	    return "Anonymous User";
	// 	}
	//     }
	// });

	/////
	// template events 
	/////

	Template.website_item.events({
		"click .js-upvote":function(event){
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Up voting website with id "+website_id);
			// put the code in here to add a vote to a website!

			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){

			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Down voting website with id "+website_id);

			// put the code in here to remove a vote from a website!

			return false;// prevent the button from reloading the page
		}
	})

	Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").toggle('slow');
		}, 
		"submit .js-save-website-form":function(event){

			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			console.log("The url they entered is: "+url);
			
			//  put your website saving code in here!	

			return false;// stop the form submit from reloading the page

		}
	});


    // From image_share/main.js
    // Template.image_add_form.events({
    // 	'submit .js-add-image':function(event){
    // 	    var img_src, img_alt;
	    
    // 	    img_src = event.target.img_src.value;
    // 	    img_alt = event.target.img_alt.value;
    // 	    console.log("src: "+img_src+" alt:"+img_alt);
    // 	    if (Meteor.user()){
    // 		Images.insert({
    // 		    img_src:img_src, 
    // 		    img_alt:img_alt, 
    // 		    createdOn:new Date(),
    // 		    createdBy:Meteor.user()._id
    // 		});
    // 	    }
    // 	    $("#image_add_form").modal('hide');
    // 	    return false;
    // 	}
    // });


    
}


if (Meteor.isServer) {
	// start up function that creates entries in the Websites databases.
  Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	console.log("No websites yet. Creating starter data.");
    	  Websites.insert({
    		title:"Goldsmiths Computing Department", 
    		url:"http://www.gold.ac.uk/computing/", 
    		description:"This is where this course was developed.", 
    		createdOn:new Date()
    	});
    	 Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.", 
    		createdOn:new Date()
    	});
    	 Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
    		createdOn:new Date()
    	});
    	Websites.insert({
    		title:"Google", 
    		url:"http://www.google.com", 
    		description:"Popular search engine.", 
    		createdOn:new Date()
    	});
    }
  });
}













// FROM Nitrous
// Websites = new Mongo.Collection("websites");

// if (Meteor.isClient) {

// 	/////
// 	// template helpers
// 	/////

// 	// helper function that returns all available websites
// 	Template.website_list.helpers({
// 		websites:function(){
// 			return Websites.find({});
// 		}
// 	});

//   // I added the following helper function to retrieve user names
//   Template.body.helpers({username: function(){
//       if (Meteor.user()) {
//         return Meteor.user().emails[0].address;
//       }
//       else {
//         return "Anonymous User";
//       }

//     } // End username: function()

//   }); // End Template.body.helpers()

//   // End of the added helper function (Template.body.helpers) that I added


// 	/////
// 	// template events
// 	/////

// 	Template.website_item.events({
// 		"click .js-upvote":function(event){
// 			// example of how you can access the id for the website in the database
// 			// (this is the data context for the template)
// 			var website_id = this._id;
// 			console.log("Up voting website with id "+website_id);
// 			// put the code in here to add a vote to a website!

// 			return false;// prevent the button from reloading the page
// 		},
// 		"click .js-downvote":function(event){

// 			// example of how you can access the id for the website in the database
// 			// (this is the data context for the template)
// 			var website_id = this._id;
// 			console.log("Down voting website with id "+website_id);

// 			// put the code in here to remove a vote from a website!

// 			return false;// prevent the button from reloading the page
// 		}
// 	})

// 	Template.website_form.events({
// 		"click .js-toggle-website-form":function(event){
// 			$("#website_form").toggle('slow');
// 		},
// 		"submit .js-save-website-form":function(event){

// 			// here is an example of how to get the url out of the form:
// 			var url = event.target.url.value;
// 			console.log("The url they entered is: "+url);

// 			//  put your website saving code in here!

// 			return false;// stop the form submit from reloading the page

// 		}
// 	});
// }


// if (Meteor.isServer) {
// 	// start up function that creates entries in the Websites databases.
//   Meteor.startup(function () {
//     // code to run on server at startup
//     if (!Websites.findOne()){
//     	console.log("No websites yet. Creating starter data.");
//     	  Websites.insert({
//     		title:"Goldsmiths Computing Department",
//     		url:"http://www.gold.ac.uk/computing/",
//     		description:"This is where this course was developed.",
//     		createdOn:new Date()
//     	});
//     	 Websites.insert({
//     		title:"University of London",
//     		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
//     		description:"University of London International Programme.",
//     		createdOn:new Date()
//     	});
//     	 Websites.insert({
//     		title:"Coursera",
//     		url:"http://www.coursera.org",
//     		description:"Universal access to the world’s best education.",
//     		createdOn:new Date()
//     	});
//     	Websites.insert({
//     		title:"Google",
//     		url:"http://www.google.com",
//     		description:"Popular search engine.",
//     		createdOn:new Date()
//     	});
//     }
//   });
// }
