// JavaScript Document

$('document').ready(function()
{
     /* validation */
	 $("#city-form").validate({

	   submitHandler: submitForm
       });
	   /* validation */

	   /* form submit */
	   function submitForm()
	   {
				var data = $("#city-form").serialize();

				$.ajax({

				type : 'POST',
				url  : 'http://developzone.esy.es/newhhj/enter.php',
				data : data,
				beforeSend: function()
				{
					$("#error").fadeOut();
					$("#city-login").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
				},
				success :  function(data)
						   {
								if(data==1)
								{

									$("#error").fadeIn(1000, function(){


											$("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; Please Enter valid city!</div>');

											$("#city-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Submit');

									});

								}
								else if(data=="successfull")
									{

										$("#city-login").html('&nbsp; SEARCHING ...');
										var valcity = document.getElementById("city").value;
										localStorage.setItem("city", valcity);
										//window.location.href = ;
                    var tempurl = "#select-city-allinfo-page";
                    $.mobile.changePage( tempurl, { transition: "pop" });
                    $("body").css("position","relative");

                    <!-- to display all organization in a city -->


                    			var url="http://developzone.esy.es/newhhj/allorginfo.php"; // PHP File
                    			var showemail=window.localStorage.getItem("email");
                    			var showpassword=window.localStorage.getItem("password");
                    			var city=window.localStorage.getItem("city");


                    			$.getJSON(url,{city:city},function(data){
                            $("#all-json-data").empty();
                    					console.log(data);
                              if(data.tutorials!=null){

                                $.each(data.tutorials, function(i,post){
                                var newRow =


                                    "<tbody>"
                                +"<tr>"
                                +"<td data-label='Organization Name'>"+"<br>"+post.orphanage_name+"</td>"
                                +"<td data-label='Address'>"+"<br>"+post.orphanage_address+"</td>"
                                +"<td data-label='Post'>"+"<br>"+post.orphanage_posts+"</td>"
                                +"<td data-label='Head'>"+"<br>"+post.orphanage_head+"</td>"
                                +"<td data-label='Email'>"+"<br>"+post.orphanage_email+"</td>"
                                +"<td data-label='Contact'>"+"<br>"+post.orphanage_contact+"</td>"
                                +"<td data-label=''><a href=tel:'"+post.orphanage_contact+"'>CALL</a></td>"

                                +"<td data-label=''><a href=mailto:'+post.orphanage_email+'?subject=Helping Hand &body=Name:,Adress:,Any code for delivary verification:,message:,Day and Time message:,Thank You>SEND A REQUEST</a></td>"


                                +"</tr>"
                                +"</tbody>";
                                $(newRow).appendTo("#all-json-data");
                                });
                              }
                    			});

									}
								else
									{

										$("#error").fadeIn(1000, function(){

										$("#error").html('<div class="alert alert-danger"><span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+data+' !</div>');

										$("#city-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; sumbit');

										});

									}
						   }
				});
				return false;
		}
	   /* form submit */




});
