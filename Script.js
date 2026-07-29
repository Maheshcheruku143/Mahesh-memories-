function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user==="mahesh" && pass==="2001"){

window.location="home.html";

}

else{

document.getElementById("error").innerHTML="❌ Invalid Username or Password";

}

}