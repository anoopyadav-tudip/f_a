$(document).ready(function(){
	firstnameCheck();
	lastnameCheck();
	emailCheck();
	passwordCheck();
	mobilenoCheck();
	streetnameCheck();
	citynameCheck();
	pincodeCheck();
});
function firstnameCheck()
{
	$("#firstname").on("change", function()
	{
		var fname=document.getElementById('firstname').value;
		var letters = /^[A-Za-z]+$/;
		
		if(fname.match(letters))
		{
			$(".error-fname").addClass("hide");
		}
		else
		{
			$(".error-fname").removeClass("hide");
		}
	});
}
function lastnameCheck()
{
	$("#lastname").on("change", function()
	{
		var lname=document.getElementById('lastname').value;
		var letters = /^[A-Za-z]+$/;

		if(lname.match(letters))
		{
			$(".error-lname").addClass("hide");
		}
		else
		{
			$(".error-lname").removeClass("hide");
		}
	});
}
function emailCheck()
{
	$("#email").on("change", function()
	{
		var email=document.getElementById('email').value;
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		{
			$(".error-email").addClass("hide");
		}
		else
		{
			$(".error-email").removeClass("hide");
		}
	});
}
function passwordCheck()
{
	$("#password").on("change", function()
	{
		var pwd=document.getElementById('password').value;
		var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
		if(pwd.match(decimal))
		{
			$(".error-pwd").addClass("hide");
		}
		else
		{
			$(".error-pwd").removeClass("hide");
		}
	});
}
function mobilenoCheck()
{
	$("#mobileno").on("change", function()
	{
		var mob=document.getElementById("mobileno").value;
		var phoneno = /^\d{10}$/;
		if(mob.match(phoneno))
		{
			$(".error-mob").addClass("hide");
		}
		else
		{
			$(".error-mob").removeClass("hide");
		}
	});
}
function streetnameCheck()
{
	$("#streetname").on("change", function()
	{
		var sname=document.getElementById('streetname').value;
		var letters = /^[A-Za-z]+$/;

		if(sname.match(letters))
		{
			$(".error-sname").addClass("hide");
		}
		else
		{
			$(".error-sname").removeClass("hide");
		}
	});
}
function citynameCheck()
{
	$("#cityname").on("change", function()
	{
		var cname=document.getElementById('cityname').value;
		var letters = /^[A-Za-z]+$/;

		if(cname.match(letters))
		{
			$(".error-cname").addClass("hide");
		}
		else
		{
			$(".error-cname").removeClass("hide");
		}
	});
}
function pincodeCheck()
{
	$("#pincode").on("change", function()
	{
		var pin=document.getElementById('pincode').value;
		var phoneno = /^\d{10}$/;

		if(pin.match(phoneno))
		{
			$(".error-pin").addClass("hide");
		}
		else
		{
			$(".error-pin").removeClass("hide");
		}
	});
}

function myFunction()
	{
		
		var fname=document.getElementById('firstname').value;
		var lname=document.getElementById('lastname').value;
		var email=document.getElementById('email').value;
		var pwd=document.getElementById('password').value;

		var lang = document.getElementById("language");
		var item = lang.options[lang.selectedIndex].value;
	
		var mob=document.getElementById("mobileno").value;
    var date=document.getElementById("bday").value;
		var gen=document.getElementById("gender").value;
		var house=document.getElementById("houseno").value;
		var street=document.getElementById("streetname").value;
		var city=document.getElementById("cityname").value;
		var pin=document.getElementById("pincode").value;
	
		if(fname=="")
			alert("First Name Should not be empty");
		else if(lname=="")
			alert("Last Name Should not be empty");
		else if(email=="")
			alert("Email Should not be empty");
		else if(pwd=="")
			alert("Password Should not be empty");
		else if(item=="")
			alert("Select a Language");	
		else if(mob=="")
			alert("Enter Mobile No");
		else if(date=="")
			alert("Select Date of Birth");
		else if(house=="")
			alert("Enter the House No");
		else if(street=="")
			alert("Enter the street name");
		else if(city=="")
			alert("City should not be empty");
		else if(pin=="")
			alert("Pincode should not be empty");
	}