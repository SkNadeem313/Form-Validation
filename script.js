function validation() {
	var name = document.getElementById("name").value;
	var subject  = document.getElementById("subject").value;
	var phone = document.getElementById("phone").value;
	var Email= document.getElementById("Email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

	if(name.length <5){
		text = "Enter Valid Name";
		error_message.innerHTML = text;
		return false ;

	}

	if(subject.length <5){
		text = "Enter correct subject";
		error_message.innerHTML = text;
		return false ;

	}




	if(isNaN (phone)||phone.length !=10){
		text = "Enter Valid phone no ";
		error_message.innerHTML = text;
		return false ;

	}
	




	if(Email.indexOf("@") == -1  ||  Email.length<6){
		text = "Enter Valid email";
		error_message.innerHTML = text;
		return false ;

	}




	if(message.length <30){
		text = "Enter more than 30 characters";
		error_message.innerHTML = text;
		return false ;

	}

	alert("Form sumitted successfuly")




	return true;
}