Websites = new Mongo.Collection("websites");

if (Meteor.isClient) {

    Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
    });

	/////
	// template helpers 
	/////

	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
		    return Websites.find({}, {sort: {upVoteCount:-1}});
		}
	});


    // I added the following helper function to retrieve user names
    Template.body.helpers({username: function(){
	if (Meteor.user()) {
            //return Meteor.user().emails[0].address;
	    return Meteor.user().username;
	}
	else {
            return "Anonymous User";
	}

    } // End username: function()

    }); // End Template.body.helpers()

    // End of the added helper function (Template.body.helpers) that I added

    


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
		        //console.log("current count "+Websites.findOne(website_id).upVoteCount);
		        //Websites.findOne(website_id).upVoteCount++;
		        // var curUpVotes = Websites.findOne({_id:website_id}).upVoteCount;
		        // console.log("Current number upvotes "+curUpVotes);
		        // curUpVotes = curUpVotes + 1;
		        // console.log("Current number upvotes "+curUpVotes);		    
		        // Websites.update({_id:website_id}, {$set: {upVoteCount:curUpVotes}});
		        // var curUpVotes = 
		        // console.log("Current number upvotes "+curUpVotes);
		        // curUpVotes = curUpVotes + 1;
		        // console.log("Current number upvotes "+curUpVotes);		    
		        Websites.update({_id:website_id},
		              {$set: {upVoteCount:Websites.findOne({_id:website_id}).upVoteCount + 1  }});

			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){

			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Down voting website with id "+website_id);

		        // put the code in here to remove a vote from a website!
		        //Websites.findOne(website_id).upVoteCount--;
		        //var curDownVotes = Websites.findOne({_id:website_id}).downVoteCount;
		        //Websites.update({_id:website_id}, {$set: {downVoteCount:curDownVotes++}});

		        Websites.update({_id:website_id},
		              {$set: {downVoteCount:Websites.findOne({_id:website_id}).downVoteCount + 1  }});		    

			return false;// prevent the button from reloading the page
		}
	    ,
	    "click .js-del-item":function(event){
		var website_id = this._id;
		console.log(website_id);
		Websites.remove({"_id":website_id});
		return false; // prevent the button from reloading the page
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
		    //$(event.target).
			Websites.insert({
			    url:event.target.url.value,
			    title:event.target.title.value,
			    description:event.target.description.value,
			    createdOn:new Date(),
			    upVoteCount:0,
			    downVoteCount:0
			}) // end Websites.insert()

			return false;// stop the form submit from reloading the page

		}
	});


    
}


if (Meteor.isServer) {
	// start up function that creates entries in the Websites databases.
  Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	console.log("No websites yet. Creating starter data.");
	//var init_val = 0;
    	  Websites.insert({
    		title:"Goldsmiths Computing Department", 
    		url:"http://www.gold.ac.uk/computing/", 
    		description:"This is where this course was developed.", 
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0
    	});
    	 Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.", 
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0
    	});
    	 Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
    	        createdOn:new Date(),
                upVoteCount:0,
	        downVoteCount:0
    	 });
    	Websites.insert({
    		title:"Google", 
    		url:"http://www.google.com", 
    		description:"Popular search engine.", 
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0
    	});
    }
  });
}


