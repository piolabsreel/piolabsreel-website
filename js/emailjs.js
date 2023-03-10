function SendMail() {
  var params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('messages').value,
  };

  const serviceID = 'service_iu0w43m';
  const templateID = 'template_9205z1j';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('messages').value = '';
      console.log(res);
      alert('Your mail was sent succesfully');
    })
  .catch((err) => console.log(err));

}
