//login
function verifyAdress1(){
	var adress = document.getElementById("adress1").value;
	
		if(adress.includes("@") && adress.includes(".com")){
			if ((adress.indexOf("@") <1) || ((adress.indexOf("@")+1 ) == adress.indexOf(".com"))|| ((adress.indexOf("@")) > adress.indexOf(".com"))) {
				alert("Exemple of adress : bohmid@shop.com");}else{return true;}
		}else{
			alert("This is not an adresse type");
		}
}
function verifyPwd(){
	var mdp = document.getElementById("pwd").value;
	if(mdp.length < 8){
		alert("The password should be more than 8 words");
	}else{
		return true;
	}
}
function send1(){
	var adress = document.getElementById("adress1").value;
		if(adress.includes("@")==true 
			&&(adress.indexOf("@") <1)==false
			&&(adress.indexOf("@")+1 ) == adress.indexOf(".com")==false 
			&&(adress.indexOf("@")) > adress.indexOf(".com")==false 
			&& verifyPwd() == true){
			window.location.assign("../products/products.html");
		}
}
//create
function verifyUser(){
	var user = document.getElementById("user").value;
	if(user.length < 1){
		alert("Write you name");
	}else{
		 return true;
	}
}
function verifyAdress2(){
	var adress = document.getElementById("adress2").value;
		if(adress.includes("@")&& adress.includes(".com")){
			if ((adress.indexOf("@") <1) || ((adress.indexOf("@")+1 ) == adress.indexOf(".com"))|| ((adress.indexOf("@")) > adress.indexOf(".com"))) {
				alert("Exemple of adress : bohmid@shop.com");}else{return true;}
		}else{
			alert("This is not an adresse type");
		}
}
function verifySamePwd(){
	var pwd1 = document.getElementById("pwd1").value,
		pwd2 = document.getElementById("pwd2").value;
	if (pwd1 != pwd2) {
		alert("You wrote different passwords");
	}
	else if (pwd1.length < 8 || pwd2.length < 8) {
		alert("The password should be more than 8 words");
	}else{ return true;}
}
function verifyAge(){
	var age = document.getElementById("age").value;
	if(age < 13 && age.length >=1 ){ // kteb 3omrou w 3omrou tla3 as8er mel 13
		alert("Sorry you are less than 13 years");
	}
	else if (age.length < 1) { //ma ktebech 3omrou men aslou
		alert("How old are you ?");
	}else if(age>=13) { return true;}
}
function send2(){
		if(verifyUser() == true && verifyAdress2() == true && verifySamePwd() == true && verifyAge() == true){
			window.location.assign("../products/products.html");
		}
}