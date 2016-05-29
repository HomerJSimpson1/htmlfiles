Websites = new Mongo.Collection("websites");


if (Meteor.isClient) {


    /// Accounts config
    Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
    });


    ///Routing
    Router.configure({
	layoutTemplate: 'ApplicationLayout'
    })
    
    Router.route('/', function () {
	this.render('welcome', {
	    to: "main"
	});

     });


    Router.route('/website_list', function () {
	this.render('navbar', {
	    to: "navbar"
	});
	this.render('websites', function() {
	    to: "main"
	});	
	
    });


    // For the "details" page:
    Router.route('/details/:_id', function () {
    	this.render('navbar', {
    	    to: "navbar"
    	});
    	this.render('details', {
    	    to: "main",
         data:function () { return Websites.findOne({_id: this.params._id}); }
    	});
	
    });  // end Router.route('details/:_id', ...)

    
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

    // To work with the details page...
        Template.details.events({
	    "submit .new_comment":function(event){
		event.preventDefault();
		console.log("Submitted form!");
		var website_id = this._id;
		var awebsite = Websites.findOne({_id:website_id});
		var webcomments = awebsite.comments;		

		if (!awebsite) { // then no website
		    console.log("Help!");
		}
		else {
		    console.log("website id = "+website_id);
		    if (!webcomments) { // then there are no comments yet for this website
		    	webcomments = [];
		    }
		    else
		    {
			console.log(webcomments);
		    }
		    console.log(event.target.Comment.value);
		    webcomments.unshift(event.target.Comment.value);
		    event.target.Comment.value = "";
		    awebsite.comments = webcomments;
		    Websites.update(awebsite._id, awebsite);

		    return false; // prevent the button from reloading the page
		    
		} // end else

	    } // end "click .js-post-comment"

	}) // end Template.details.events



	Template.website_item.events({
		"click .js-upvote":function(event){
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Up voting website with id "+website_id);
		        // put the code in here to add a vote to a website!    
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
		    event.preventDefault();
		    // here is an example of how to get the url out of the form:
		    var url = event.target.url.value;
		    console.log("The url they entered is: "+url);

		    // HTTP.call("GET", url,
		    // 	      function(error, result) {
		    // 		  if (!error) {
		    // 		      console.log(result);
		    // 		  }
		    // 		  else {
		    // 		      console.log("Error "+error+" was encountered.");
		    // 		  }
		    // 	      });
				  
		    //  put your website saving code in here!
		    //$(event.target).
		    Websites.insert({
			url:event.target.url.value,
			title:event.target.title.value,
			description:event.target.description.value,
			createdOn:new Date(),
			upVoteCount:0,
			downVoteCount:0,
			//comments:[]
		    }) // end Websites.insert()

		    return false;// stop the form submit from reloading the page

		}
	});


    
}          // end Meteor.isClient()


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
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0,
	        //comments:[]
    	});
    	 Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.", 
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0,
	        //comments:[]
    	});
    	 Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
    	        createdOn:new Date(),
                upVoteCount:0,
	        downVoteCount:0,
	        //comments:[]
    	 });
    	Websites.insert({
    		title:"Google", 
    		url:"http://www.google.com", 
    		description:"Popular search engine.", 
    	        createdOn:new Date(),
	        upVoteCount:0,
	        downVoteCount:0,
	        //comments:[]
    	});
    }
  });  // end Meteor.startup() function
}      // end Meteor.isServer()


