$(document).ready(function() {

	//On click signup, hide login and show registration form
	$("#signup").click(function() {
		$("#loginsection").slideUp("slow", function(){
			$("#registersection").slideDown("slow");
		});
	});

	//On click signup, hide registration and show login form
	$("#signin").click(function() {
		$("#registersection").slideUp("slow", function(){
			$("#loginsection").slideDown("slow");
		});
	});


});