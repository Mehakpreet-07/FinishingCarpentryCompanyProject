function sendMail(){
    event.preventDefault(); // preventing from refresh
    let parms={
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
    }

    if(!parms.name ||!parms.email || !parms.message){
        alert("Please Fill all the fields.");
        return;
    }

    
    emailjs.send("service_escqfiq", "template_irt1nid", parms).then(function (response){
        console.log("SUCCESS!", response.stauts, response.text);
        alert("Email sent successfully!");
    }, function (error) {
        console.log(" FAILED...", error);
        alert("Failed to send email. Please try again later.");
    
    });
}