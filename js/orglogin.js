// JavaScript Document

$('document').ready(function()
{
     /* validation */
	 $("#Login-form").validate({

	   submitHandler: submitForm
       });
	   /* validation */

	   /* form submit */
	   function submitForm()
	   {
				var data = $("#Login-form").serialize();

				$.ajax({

				type : 'POST',
				url  : 'http://developzone.esy.es/newhhj/orglogin.php',
				data : data,
				beforeSend: function()
				{
					$("#login-error").fadeOut();
					$("#org-info-login").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
				},
				success :  function(data)
						   {
								if(data==1){
									$("#login-error").fadeIn(1000, function(){

											$("#login-error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; Sorry wrong details !</div>');

											$("#org-info-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Login');

									});

								}

								else if(data=="entered")
								{

									$("#org-info-login").html('&nbsp; LOGING IN ...');
									//setTimeout('$(".form-signin").fadeOut(500, function(){ $(".signin-form").load("../../php/signup/success.php"); }); ',5000);
									//localStorage.login="true";
									//localStorage.email=email;

									var valemail = document.getElementById("user_email").value;
									var valpassword = document.getElementById("password").value;

									localStorage.setItem("email", valemail);
									localStorage.setItem("password",valpassword);
									localStorage.login="true";
									var showemail=window.localStorage.getItem("email");
									var showpassword=window.localStorage.getItem("password");
									//alert("The adminemail of the entered candidate is "+showemail);
									//alert("The adminpassword of the entered candidate is "+showpassword);
									//window.location.href = "organisation.html";
                  var tempurl = "#org-main-page";
                  $.mobile.changePage( tempurl, { transition: "pop" });

								}
								else{

									$("#login-error").fadeIn(1000, function(){

						$("#login-error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' </div>');

									$("#org-info-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Login');

									});

								}
						   }
				});
				return false;
		}
	   /* form submit */




});
