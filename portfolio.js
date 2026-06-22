let form= document.getElementById("contactForm");
let error= document.getElementById("error");
 function showMessage(msg,color){
     error.innerText=msg;
     error.style.color= color;
 }
 
 // Form Validation
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if(name==="" || email==="" ||message==="") {
        showMessage("All fields are required!","red");
        return;
    }
    showMessage("Form Submitted Successfully!","green");
});


//Welcome 
let userName = prompt("Enter Your Name");

if(userName){
    document.getElementById("welcome").innerText =
    "Welcome " + userName + "!";
}


//Project Counter

let projects = document.querySelectorAll(".project");
document.getElementById("projectCount").innerHTML="Total Project: "+projects.length;

//Move to top
document.getElementById("topBtn").addEventListener("click",function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

