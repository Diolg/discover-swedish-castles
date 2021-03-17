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

} 