// Function to toggle the navigation menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// Ensure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle Handling
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Form Submission Handling
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission behavior
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset(); // Reset form fields
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
