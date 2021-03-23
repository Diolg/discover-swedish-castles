//Initialize EmailJS   
(function() {
    emailjs.init("user_ugvGbZOApBxJa8Ka2h7Vk");
})();

//Retrieve the data from inputs with EmailJS
function sendMail(contactForm) {
    emailjs.send("service_jgqb1x9", "contact_form", {
            "message": contactForm.message.value,
            "user_name": contactForm.name.value,
            "user_email": contactForm.email.value,
        })
        //Set function for success or error response
        .then(
            function(response) {
                console.log("SUCCESS", response);
                document.getElementById("success-response").style.display = "block";
                //Set Time out for user to manage to read the success-message
                setTimeout(() => document.getElementById("success-response").hidden = true, 6000);
            },
            function(error) {
                console.log("FAILED", error);
                document.getElementById("error-response").style.display = "block";
            });

    //Cleaning form after submission
    document.getElementById("contact-form").reset();
    return false;
}

