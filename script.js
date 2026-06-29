document.getElementById("applicationForm").addEventListener("submit", function(event){

event.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message").value.trim();

let result=document.getElementById("result");

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern=/^[0-9]{10}$/;

if(name==="" || email==="" || phone==="" || message===""){
    result.style.color="red";
    result.innerHTML="Please fill in all fields.";
    return;
}

if(!email.match(emailPattern)){
    result.style.color="red";
    result.innerHTML="Please enter a valid email address.";
    return;
}

if(!phone.match(phonePattern)){
    result.style.color="red";
    result.innerHTML="Phone number must contain exactly 10 digits.";
    return;
}

result.style.color="green";
result.innerHTML="Application submitted successfully!";

document.getElementById("applicationForm").reset();

});