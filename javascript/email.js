$("#contact-form").on("submit", function(event) {
  event.preventDefault(); 
  console.log(this);
  let formData = new FormData(this);

  formData.append('service_id', 'gmail');
  formData.append('template_id', 'template_FCwYklu8');
  formData.append('user_id', 'user_ZrkMNdElPrhCXtg19YAVZ');
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false
  }).done(function() {
    alert('Thanks for contacting me! I will get back to you ASAP!');
  }).fail(function(error) {
    alert('Oops...' + JSON.stringify(error));
  });
});