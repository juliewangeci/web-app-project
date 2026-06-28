// JavaScript for SugarGrain Bakery Project

document.addEventListener("DOMContentLoaded", function () {
    // Looks for your updated bakery form using its explicit ID
    const form = document.getElementById("cake-order-form");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            // Target the input elements using their specific IDs
            const nameInput = document.getElementById("full-name");
            const emailInput = document.getElementById("email-address");
            const messageInput = document.getElementById("order-instructions");

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

            // Stops the default form redirect so script handles the completion flow
            event.preventDefault();

            // Success confirmation popup with the thumbs-up emoji!
            alert("order received 👍🏾");

            // Resets the input fields neatly back to empty
            form.reset();
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