const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_t67ua0t';
    const templateID = 'template_g8od3gm';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.innerHTML = 'Sending....';
      

        setTimeout(function() {
          btn.innerHTML = 'Message Sent';
          setTimeout(function() {
            btn.innerHTML = 'Send Again';
          }, 2000);
        }, 2000);
      })
      .catch((err) => {
       btn.innerHTML="Error"
        alert(JSON.stringify(err));
      });
  });