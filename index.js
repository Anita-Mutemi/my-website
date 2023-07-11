document.querySelector('.phone-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.truecaller.com/';
});

function sendEmail(email) {
    var encodedEmail = encodeURIComponent(email);
    window.location.href = "mailto:" + encodedEmail;
  }