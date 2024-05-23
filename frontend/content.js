// Function to scan emails
function scanEmails() {
    let emails = document.querySelectorAll(".zA .y6 span[id]");
    emails.forEach(email => {
      let emailText = email.innerText;
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailText: emailText })
      })
      .then(response => response.json())
      .then(data => {
        console.log(`Email: ${emailText}, Result: ${data.result}`);
      })
      .catch(error => console.error('Error:', error));
    });
  }

  function onGmailLoad() {
    if (window.location.href.startsWith("https://mail.google.com/")) {
      scanEmails();
    }
  }

  document.addEventListener('DOMContentLoaded', onGmailLoad);  