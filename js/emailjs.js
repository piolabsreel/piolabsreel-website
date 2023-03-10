// email script

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_iu0w43m", "template_9205z1j", params).then(function (res) {
        alert("Email Sent! " + res.status);
    })
}
