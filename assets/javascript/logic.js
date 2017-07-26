document.on("ready", function(){
	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyCOr4E9AcuonuWeFhBRLzlb5lkRf0COF6M",
	authDomain: "funwithrealstate.firebaseapp.com",
	databaseURL: "https://funwithrealstate.firebaseio.com",
	projectId: "funwithrealstate",
	storageBucket: "",
	messagingSenderId: "73499968045"
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
			// ...
		});
	});
	
	// //When a user signs in to your app, pass the user's email address and password to signInWithEmailAndPassword:
	// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	//   // Handle Errors here.
	//   var errorCode = error.code;
	//   var errorMessage = error.message;
	//   // ...
	// });
});