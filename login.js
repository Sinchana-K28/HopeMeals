
document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
   
    // Simulate login validation (replace this with actual authentication)
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    if (email && password) { // Simple check, replace with backend validation
        window.location.href = "login.html"; // Redirect to home page
    } else {
        alert("Please enter valid credentials.");
    }
});
