document.getElementById("checkEmail").addEventListener("click", async () => {
    let emailText = document.getElementById("emailText").value;
  
    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ emailText: emailText })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerText = data.result;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("result").innerText = "An error occurred.";
    });
  });
  