/*
    Name: Mark Coretsopoulos
    Date Created: 10/27/19
    Most Recent Revision: 10/27/19
*/

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems() {
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    if (name == "") {
        alert("You must include your name");
        document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
   if (email == "") {
        alert("You must include your email");
        document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    if (phone == "") {
        alert("You must include your phone number");
        document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
    alert("All entered information is valid!");
   return false;
}