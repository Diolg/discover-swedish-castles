//Set the EmailJS
    
  /*(function() {
    emailjs.init("user_ugvGbZOApBxJa8Ka2h7Vk");
})();

//Retrieve the data from form inputs
function sendMail(contactForm) {
    $('#contact-button').prop('disabled', true)
    emailjs.send("service_jgqb1x9","contact_form", 
    {
        'message': contactForm.message.value,
        'user_name': contactForm.name.value,
        'user_email': contactForm.email.value,
        
    })

// Set function for success or error response
    .then(
        function(response) {
            console.log('SUCCESS', response)
            alert('YOUR MESSAGE SENT SUCCESSFULY')
            $('#contact-button').prop('disabled', false)
        },
        function(error) {
            console.log('FAILED', error)
            $('#contact-button').prop('disabled', false)
        });
        return false;
};*/
    

//Function to show the user the message has been submitted successfully
let contactForm = document.getElementById("contact-form");
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

setTimeout(() => responseDiv.hidden = true, 5000)

} 

// Cleans the form's inputs after submission

let form = document.getElementById("contact-form");
form.addEventListener("submit", function handleSubmit (event) {
    event.preventDefault()
    contactForm.reset()
})
