// JavaScript for SugarGrain Bakery Project

document.addEventListener("DOMContentLoaded", function () {
    // Looks for your bakery form on the contact page
    const form = document.querySelector(".bakery-form");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            const nameInput = form.querySelector("input[type='text']");
            const emailInput = form.querySelector("input[type='email']");
            const messageInput = form.querySelector("textarea");

            // 1. Make sure required fields aren't completely empty
            if (nameInput.value.trim() === "" || messageInput.value.trim() === "") {
                alert("Please fill in all required fields.");
                event.preventDefault(); // Prevents the form from submitting tracking errors
                return;
            }

            // 2. Simple email verification check
            if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
                alert("Please enter a valid email address.");
                event.preventDefault(); // Stops submission
                return;
            }

            // Success confirmation popup
            alert("Thank you! Your inquiry has been sent to SugarGrain Bakery successfully.");
        });
    }
});
// Interactive Feature 2: Dark/Light Mode Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        // Toggle the .dark-mode class on the body tag
        document.body.classList.toggle('dark-mode');
        
        // Dynamically update the button text based on the active mode
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.innerHTML = "☀️ Light Mode";
            themeToggleBtn.className = "btn btn-sm btn-outline-light";
        } else {
            themeToggleBtn.innerHTML = "🌙 Dark Mode";
            themeToggleBtn.className = "btn btn-sm btn-outline-dark";
        }
    });
}