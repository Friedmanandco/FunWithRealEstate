$(document).ready(function(){
	
	// Initialize Firebase
	
  var config = {
    apiKey: "AIzaSyC3SLkQ2cu8rfbJlHHlQu62sYM6-Gz-NgM",
    authDomain: "realestatedb-5919d.firebaseapp.com",
    databaseURL: "https://realestatedb-5919d.firebaseio.com",
    projectId: "realestatedb-5919d",
    storageBucket: "realestatedb-5919d.appspot.com",
    messagingSenderId: "531503123585"
  };
	firebase.initializeApp(config);

	//1. When a new user signs up using your app's sign-up form,
	//complete any new account validation steps that your app requires,
	// such as verifying that the new account's password was correctly 
	//typed and meets your complexity requirements.
	var email = "";
	var password = "";

	//2. Create a new account by passing the new user's email address and
	// password to createUserWithEmailAndPassword:
	$("#create-btn").on("click", function(){
		
		email = $("#email-input").val().trim();
		password = $("#password-input").val().trim();

		//TO DO: ADD VALIDATION ON EMAIL/PASSWORD
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(error);
			// ...
		});

		
	});
	$("#sign-in-btn").on("click", function(){
		email = $("#email-input").val().trim();
		password = $("#password-input").val().trim();
		//When a user signs in to your app, pass the user's email address and password to signInWithEmailAndPassword:
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	  		// Handle Errors here.
	  		var errorCode = error.code;
	  		var errorMessage = error.message;
	  		// ...		
		});
	});
	
	
});

