//Set the EmailJS
    
 (function() {
    emailjs.init("user_ugvGbZOApBxJa8Ka2h7Vk");
})();

//Retrieve the data from form inputs
function sendMail(contactForm) {

    emailjs.send("service_jgqb1x9","contact_form", 
    {
        'message': contactForm.message.value,
        'user_name': contactForm.name.value,
        'user_email': contactForm.email.value,
        
    })
    
// Set function for success or error response
    .then(
        function(response) {
            console.log('SUCCESS', response);
                       document.getElementById("success-response").style.display="block";

//Set Time out for user to manage to read the success-message
    setTimeout(() => document.getElementById("success-response").hidden = true, 6000);

    },
        function(error) {
            console.log('FAILED', error);
           document.getElementById("error-response").style.display="block";              
});

//Cleaning the form

document.getElementById('contact-form').reset();

return false;
} 


    





//Function to show the user the message has been submitted successfully
/*let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
event.preventDefault(); 

let name = contactForm.elements["name"].value;
let email = contactForm.elements["email"].value;

let successHtml = `
<p>Hi ${name}! Your message has been sent successfully! <br> I will respond to ${email} in 2 hours! <br> 
Back to <a href="index.html">home page</a></p>
`

let responseDiv = document.getElementById("success-response");   
responseDiv.innerHTML = successHtml;  
responseDiv.style.display = "block";  
responseDiv.style.color = "white"; 

// Hide the success window after submission

setTimeout(() => responseDiv.hidden = true, 6000)

} 

// Cleans the form's inputs after submission

let form = document.getElementById("contact-form");
form.addEventListener("submit", function handleSubmit (event) {
    event.preventDefault()
    contactForm.reset()
})  */

//Check form

/*let form = document.getElementById("contact-form");
function checkForm(el) {
  let name = form.el.name.value;
  let message = form.el.message.value;

  let fail = "";   

  If(name.length <= 1 || name.length > 50)
    fail = "Please, enter correct name";
    else if(message.length > 5)
    fail = "Please, use no more than 200 characters!"

     if(fail !="") {
         alert("fail");

         return false;
     }*/




/*let form = document.getElementById("contact-form");
function validation() {
  let name = form.el.name.value;
  let message = form.el.message.value;
  let error = document.getElementById("error");
  let text;

  error.style.padding = "10px";

  if(name.length <= 1 || name.length > 50) {
      text = "please enter valid name!" ;
      error.innerHTML = text;
      return false;
  }

}*/




