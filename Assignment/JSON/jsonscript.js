function load()
{
	var i;
	var out = "<table border=1 width=100%><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th> <th>Subjects</th></tr>";
    for(i = 0; i < text.length; i++)
		{
        out=out+"<tr><td>"+ text[i].firstName +"</td><td>"+ text[i].lastName +"</td><td>" + text[i].rollno +"</td><td>" + text[i].subject;
		}
		out=out+"</table>";
		document.getElementById("display").innerHTML = out;
		document.getElementById("in").style.display="none";
		document.getElementById("display").style.display="block";
		document.getElementById("up").style.display="none";
		document.getElementById("de").style.display="none";
		
}
function insert()
{
	document.getElementById("display").style.display="none";
	document.getElementById("in").style.display="block";
	document.getElementById("up").style.display="none";
	document.getElementById("de").style.display="none";
}
function addrecord()
{
	var fn=document.getElementById("fname").value;
	var ln=document.getElementById("lname").value;
	var rl=document.getElementById("roll").value;
	var su=document.getElementById("sub").value;
	var newrecord = { "firstName":fn , "lastName":ln ,"rollno":rl , "subject":su };
	text.push(newrecord);
	alert("Record Added");
}
function update()
{
	var i;
	var out = "<table border=1 width=100%><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th> <th>Subjects</th></tr>";
    for(i = 0; i < text.length; i++)
		{
        out=out+"<tr><td>"+ text[i].firstName +"</td><td>"+ text[i].lastName +"</td><td>" + text[i].rollno +"</td><td>" + text[i].subject;
		}
		out=out+"</table>";
		document.getElementById("display").innerHTML = out;
		
	document.getElementById("in").style.display="none";
	document.getElementById("up").style.display="block";
	document.getElementById("display").style.display="block";
	document.getElementById("de").style.display="none";
}
function updaterecord()
{
	var fn=document.getElementById("ufname").value;
	var ln=document.getElementById("ulname").value;
	var rl=document.getElementById("uroll").value;
	var su=document.getElementById("usub").value;
	var i,f=0;
	for(i=0;i<text.length;i++)
	{
		if(text[i].firstName==fn)
		{
			text[i].lastName=ln;
			text[i].rollno=rl;
			text[i].subject=su;
			f=1;
			break;
		}
	}
	if(f==0)
		alert("Record not found");
	else if(f==1)
		alert("Record Updated");
}
function del()
{
	
	var i;
	var out = "<table border=1 width=100%><tr><th>First Name</th><th>Last Name</th><th>Roll Number</th> <th>Subjects</th></tr>";
    for(i = 0; i < text.length; i++)
		{
        out=out+"<tr><td>"+ text[i].firstName +"</td><td>"+ text[i].lastName +"</td><td>" + text[i].rollno +"</td><td>" + text[i].subject;
		}
		out=out+"</table>";
	document.getElementById("display").innerHTML = out;
	document.getElementById("in").style.display="none";
	document.getElementById("up").style.display="none";
	document.getElementById("display").style.display="block";
  document.getElementById("de").style.display="block";
}
function deleterecord()
{
	var fn=document.getElementById("dfname").value;
	var i,f=0;
	for(i=0;i<text.length;i++)
	{
		if(text[i].firstName==fn)
		{
			
			delete text[i].firstName;
			delete text[i].lastName;
			delete text[i].rollno;
			delete text[i].subject;
			f=1;
			break;
		}
	}
	if(f==0)
		alert("Record not found");
	else if(f==1)
		alert("Record Deleted");
	
}