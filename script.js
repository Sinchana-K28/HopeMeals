const donorBtn = document.getElementById('donorBtn');
const ngoBtn = document.getElementById('ngoBtn');
const donorForm = document.getElementById('donorForm');
const ngoForm = document.getElementById('ngoForm');

donorBtn.addEventListener('click', () => {
  donorForm.classList.add('active-form');
  ngoForm.classList.remove('active-form');
  donorBtn.classList.add('active');
  ngoBtn.classList.remove('active');
});

ngoBtn.addEventListener('click', () => {
  donorForm.classList.remove('active-form');
  ngoForm.classList.add('active-form');
  ngoBtn.classList.add('active');
  donorBtn.classList.remove('active');
});

//donate food
    document.getElementById("donateButton").addEventListener("click", function() {
        // Redirect to a new page
        window.location.href = "donate.html";

        // Alternatively, you can display an alert instead of redirecting
        // alert("Donation successful! Thank you for your support.");
    });